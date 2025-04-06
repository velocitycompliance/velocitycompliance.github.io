"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";

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

  // On mount, load the results from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedResults = localStorage.getItem("miniGameResults");
      if (storedResults) {
        try {
          const data: MiniGameResults = JSON.parse(storedResults);
          setResultsData(data);
        } catch (err) {
          console.error("Error parsing miniGameResults:", err);
        }
      }
      // Also remove the start time so the next game will start fresh
      localStorage.removeItem("miniGameStartTime");
    }
  }, []);

  // If no results data, show a loading state or a message.
  if (!resultsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading results...</p>
      </div>
    );
  }

  // Calculate derived values
  const challenges = Object.keys(resultsData.answers);
  const totalChallenges = challenges.length;
  const correctAnswers = challenges.reduce(
    (acc, key) => acc + (resultsData.answers[key as keyof typeof resultsData.answers].isCorrect ? 1 : 0),
    0
  );
  const totalTimeTaken = Math.floor((resultsData.endTime - resultsData.startTime) / 1000);

  // For demonstration: each incorrect answer adds €2000 and 1 day delay.
  const penalties = totalChallenges - correctAnswers;
  const potentialCosts = `€${penalties * 2000}`;
  const potentialDelay = `${penalties} Day${penalties !== 1 ? "s" : ""} Added`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Navigation: Back to Home & Restart */}
      <div className="w-full max-w-4xl mb-4 flex justify-between items-center">
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            // Clear stored results for a fresh start.
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
          {`Challenge Complete! Here's Your Compliance Score:`}
        </h1>

        <div className="space-y-4 mb-6">
          <div className="text-lg font-semibold">
            Accuracy:{" "}
            <span className="text-primary">
              {correctAnswers} out of {totalChallenges} correct
            </span>
          </div>
          <div className="text-lg font-semibold">
            Total Time Taken:{" "}
            <span className="text-primary">{totalTimeTaken} seconds</span>
          </div>
          <div className="text-lg font-semibold">
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
              return (
                <li key={challengeKey} className="text-lg">
                  <strong>Challenge {idx + 1}:</strong> You selected{" "}
                  <span className="text-primary">{challenge.answer}</span> –{" "}
                  {challenge.isCorrect ? (
                    <span className="text-green-600 font-semibold">Correct</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Incorrect</span>
                  )}
                </li>
              );
            })}
          </ul>
          
        </div>
        <div className="mb-6 mt-12">
          <TextAnimate animation="fadeIn" by="line" as="p" className="text-xl leading-relaxed">
            {`The average manual compliance check takes 45 seconds per shipment.

Error rates cause delays of up to 42 days and fines exceeding €10,000.

Our AI-powered system achieves 94% accuracy in just 0.2 seconds, reducing clearance times by up to 83% and saving you significant costs!`}
          </TextAnimate>
        </div>
      </div>
    </div>
  );
}
