// app/mini-game/challengeTwo/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ScenarioContextBar } from "../components/scenarioContextBar";
import { MiniGameResults } from "@/types/miniGame"; // Adjust the path

export default function ChallengeTwoPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [progressValue, setProgressValue] = useState(33);

  const question =
    "Screen the Buyer: 'Global Ventures Inc.' is applying to ship with us. Their risk profile shows inconsistent records and potential links to high-risk regions. Is it safe to proceed?";
  const options = [
    { text: "Clear to Ship", isCorrect: false },
    { text: "Flag for Review", isCorrect: true },
    { text: "Block Shipment", isCorrect: false },
  ];

  function handleOptionClick(option: typeof options[number]) {
    // Prevent re-selection
    if (selectedOption !== null) return;

    setSelectedOption(option.text);
    setProgressValue(66);

    // Save the user’s Challenge 2 answer
    if (typeof window !== "undefined") {
      const KEY = "miniGameResults";
      
      let resultsData: MiniGameResults = {
        answers: {},
        startTime: null,
        endTime: null,
      };

      const stored = localStorage.getItem(KEY);
      if (stored) {
        try {
          resultsData = JSON.parse(stored);
        } catch (err) {
          console.error("Error parsing existing results:", err);
        }
      }

      if (!resultsData.answers) {
        resultsData.answers = {};
      }

      // Save Challenge 2 answer
      resultsData.answers.challenge2 = {
        answer: option.text,
        isCorrect: option.isCorrect
      };

      localStorage.setItem(KEY, JSON.stringify(resultsData));
    }

    // Navigate to Challenge 3
    router.push("/mini-game/challengeThree");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl mb-4">
        <Button variant="outline" size="lg" onClick={() => router.push("/mini-game")}>
          <ArrowLeft className="w-8 h-8 mr-2" />
          Back to Mini-Game Home
        </Button>
      </div>

      <div className="w-full max-w-3xl">
        <ScenarioContextBar
          companyCheckText="✔ You are a European Green Tech Co."
          productCheckText='✔ Product: "Solar Panels"'
          currentStep={2}
          totalSteps={3}
          progressValue={progressValue}
        />
      </div>

      {/* Challenge Content */}
      <div className="w-full max-w-2xl bg-background border border-border/40 rounded p-6">
        <h1 className="text-2xl font-bold mb-6">Challenge 2: Denied Party Screening</h1>
        <p className="text-lg mb-4">{question}</p>

        <ul className="space-y-4">
          {options.map((option) => (
            <li key={option.text}>
              <Button
                variant={selectedOption === option.text ? "default" : "outline"}
                size="lg"
                onClick={() => handleOptionClick(option)}
                className="w-full text-left"
                disabled={selectedOption !== null}
              >
                {option.text}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
