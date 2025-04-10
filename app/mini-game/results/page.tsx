//mini-game/results
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Hourglass, CircleDollarSign, Crosshair } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MiniGameResults {
  answers: {
    challenge1: { answer: string; isCorrect: boolean };
    challenge2: { answer: string; isCorrect: boolean };
    challenge3: { answer: string; isCorrect: boolean };
  };
  startTime: number;
  endTime: number;
}

export default function ResultsPage() {
  const router = useRouter();
  const [resultsData, setResultsData] = useState<MiniGameResults | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedResults = localStorage.getItem("miniGameResults");
      let data: MiniGameResults | null = null;

      if (storedResults) {
        try {
          data = JSON.parse(storedResults);
        } catch (err) {
          console.error("Error parsing miniGameResults:", err);
        }
      }

      // If data is missing (e.g. due to a timeout), create default results
      if (!data) {
        const now = Date.now();
        data = {
          answers: {
            challenge1: { answer: "No Answer", isCorrect: false },
            challenge2: { answer: "No Answer", isCorrect: false },
            challenge3: { answer: "No Answer", isCorrect: false },
          },
          startTime: now - 60 * 1000, // simulate that the full 60s has passed
          endTime: now,
        };
      }

      setResultsData(data);
      // Remove start time so next game starts fresh.
      localStorage.removeItem("miniGameStartTime");
    }
  }, []);

  // Still waiting on results? Show a loading indicator.
  if (!resultsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading results...</p>
      </div>
    );
  }

  // Derived calculations
  const challenges = Object.keys(resultsData.answers);
  const totalChallenges = challenges.length;
  const correctAnswers = challenges.reduce(
    (acc, key) =>
      acc + (resultsData.answers[key as keyof typeof resultsData.answers].isCorrect ? 1 : 0),
    0
  );
  const totalTimeTaken = Math.floor((resultsData.endTime - resultsData.startTime) / 1000);

  // Penalties: realistic costs/delays per error.
  const costPerError = 5000; // €5000 fine per error
  const delayPerError = 3;   // 3 days delay per error
  const penalties = totalChallenges - correctAnswers;
  const formattedCost = new Intl.NumberFormat("de-DE").format(penalties * costPerError);
  const potentialCosts = `€${formattedCost}`;
  const potentialDelay = `${penalties * delayPerError} Day${penalties * delayPerError !== 1 ? "s" : ""} Delay`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Navigation: Restart the mini-game or return to the main website */}
      <div className="w-full max-w-4xl mb-4 flex justify-between items-center">
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.removeItem("miniGameResults");
              localStorage.removeItem("miniGameStartTime");
            }
            router.push("/mini-game");
          }}
        >
          <RefreshCw className="w-6 h-6 mr-2" />
          Restart Challenge
        </Button>
      </div>

      <div className="w-full max-w-3xl bg-background border border-border/40 rounded p-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Challenge Complete! Here&apos;s Your Compliance Score:
        </h1>

        <div className="space-y-4 mb-6">
          <div className="text-xl font-semibold flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-muted-foreground" />
            Accuracy:{" "}
            <span className="text-primary">
              {correctAnswers} out of {totalChallenges} correct
            </span>
          </div>

          <div className="text-xl font-semibold flex items-center gap-2">
            <Hourglass className="w-5 h-5 text-muted-foreground" />
            Total Time Taken:{" "}
            <span className="text-primary">{totalTimeTaken} seconds</span>
          </div>

          <div className="text-2xl font-semibold flex items-center gap-2">
            <CircleDollarSign className="w-6 h-6 text-muted-foreground" />
            Potential Costs/Delays Incurred:{" "}
            <span className="text-primary">
              {potentialCosts}, {potentialDelay}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Answers:</h2>
          <ul className="space-y-2">
            {challenges.map((challengeKey, idx) => {
              const challenge = resultsData.answers[challengeKey as keyof typeof resultsData.answers];
              const isCorrect = challenge.isCorrect;

              return (
                <li key={challengeKey} className="text-lg flex items-center gap-3">
                  {isCorrect ? (
                    <Badge className="bg-green-800 text-green-100 border border-green-300 w-18">Correct</Badge>
                  ) : (
                    <Badge className="bg-red-800 text-red-100 border border-red-300 w-18">Incorrect</Badge>
                  )}
                  <span>
                    <strong>Challenge {idx + 1}:</strong> You selected{" "}
                    <span className="text-primary">{challenge.answer}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" mt-12">
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-l leading-relaxed"
          >
            {`Manual compliance checks can be both time-consuming and error-prone—taking on average 45 seconds per shipment. Each oversight not only increases the risk of non-compliance but can also lead to severe financial repercussions.`}
          </TextAnimate>
        </div>
        <div className="mt-4 p-4 text-xl text-gray-300 border bg-zinc-900 border-gray-600 rounded-xl">
          Based on your responses, potential errors could cost you an additional {potentialCosts} and delay your shipments by approximately {potentialDelay}.
        </div>

        <div className="w-full mt-8">
          <Button
            size="lg"
            className="w-full"
            onClick={() => router.push("/")}
          >
            Back to Main Website
          </Button>
        </div>
      </div>

    </div>
  );
}
