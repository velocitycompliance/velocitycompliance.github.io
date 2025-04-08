// app/mini-game/challengeOne/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ScenarioContextBar } from "../components/scenarioContextBar";
import { MiniGameResults } from "@/types/miniGame"; // Adjust the path

export default function ChallengeOnePage() {
  const router = useRouter();

  // Local states for selection UI
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [progressValue, setProgressValue] = useState(0);

  const question = "Select the correct TARIC code for exporting Solar Panels.";
  const options = [
    { code: "8541 40 90", isCorrect: true },
    { code: "8501 10 99", isCorrect: false },
    { code: "8537 10 10", isCorrect: false },
    { code: "9405 50 40", isCorrect: false },
  ];

  function handleOptionClick(option: typeof options[number]) {
    // Prevent re-selection
    if (selectedCode !== null) return;

    setSelectedCode(option.code);
    setProgressValue(33);

    // Update localStorage with the user's choice for Challenge 1
    if (typeof window !== "undefined") {
      const KEY = "miniGameResults";

      let resultsData: MiniGameResults = {
        answers: {},
        startTime: null,
        endTime: null,
      };


      // Fetch existing data if any
      const stored = localStorage.getItem(KEY);
      if (stored) {
        try {
          resultsData = JSON.parse(stored);
        } catch (err) {
          console.error("Error parsing existing results:", err);
        }
      }

      // Ensure we have an 'answers' object
      if (!resultsData.answers) {
        resultsData.answers = {};
      }

      // Set startTime if not already set
      if (!resultsData.startTime) {
        resultsData.startTime = Date.now();
      }

      // Save Challenge 1 answer
      resultsData.answers.challenge1 = {
        answer: option.code,
        isCorrect: option.isCorrect
      };

      localStorage.setItem(KEY, JSON.stringify(resultsData));
    }

    // Navigate to Challenge Two
    router.push("/mini-game/challengeTwo");
  }

  return (
    <div className="min-h-screen flex flex-col">
    {/* Back button */}
    <div className="mt-8 mb-8 gap-8 px-6 lg:px-24 xl:px-40">
      <Button variant="outline" size="lg" onClick={() => router.push("/mini-game")}>
        <ArrowLeft className="w-8 h-8 mr-2" />
        Back to Mini-Game Home
      </Button>
    </div>

    {/* Two-column split for content (stacks on mobile) */}
    <div className="container mx-auto flex flex-col md:flex-row gap-4 max-w-5xl">
      {/* Left column: scenario, header, question */}
      <div className="md:w-1/2 flex flex-col justify-start gap-2">
        <ScenarioContextBar
          companyCheckText="✔ You are a European Green Tech Co."
          productCheckText='✔ Product: "Solar Panels"'
          currentStep={1}
          totalSteps={3}
          progressValue={progressValue}
        />


      </div>

      {/* Right column: answer options */}
      <div className="md:w-1/2 bg-background border border-border/40 rounded p-6">
      <div>
          <h1 className="text-2xl font-bold mb-4">Challenge 1: HS/TARIC Code Check</h1>
          <p className="text-lg mb-4">{question}</p>
        </div>
        <ul className="space-y-4">
          {options.map((option) => (
            <li key={option.code}>
              <Button
                variant={selectedCode === option.code ? "default" : "outline"}
                size="lg"
                onClick={() => handleOptionClick(option)}
                className="w-full text-left"
                disabled={selectedCode !== null}
              >
                {option.code}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}
