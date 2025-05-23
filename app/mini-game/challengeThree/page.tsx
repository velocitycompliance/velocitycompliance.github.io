// app/mini-game/challengeThree/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ScenarioContextBar } from "../components/scenarioContextBar";
import { MiniGameResults } from "@/types/miniGame"; // Adjust the path


export default function ChallengeThreePage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [progressValue, setProgressValue] = useState(66);

  const question =
    "Does this shipment require a specific export permit based on current trade regulations for solar panels destined for Saudi Arabia?";
  const options = [
    { text: "Yes", isCorrect: true },
    { text: "No", isCorrect: false },
  ];

  function handleOptionClick(option: typeof options[number]) {
    if (selectedOption !== null) return;

    setSelectedOption(option.text);
    setProgressValue(100);

    // Add the final answer and record endTime
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

      // Save Challenge 3
      resultsData.answers.challenge3 = {
        answer: option.text,
        isCorrect: option.isCorrect
      };
      // Record endTime
      resultsData.endTime = Date.now();

      localStorage.setItem(KEY, JSON.stringify(resultsData));
    }

    router.push("/mini-game/addEmail");
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back button */}
      <div className="mt-8 mb-8 gap-8 px-6 lg:px-24 xl:px-40">
        <Button
          variant="outline"
          size="lg"
          onClick={() => router.push("/mini-game")}
        >
          <ArrowLeft className="w-8 h-8 mr-2" />
          Back to Mini-Game Home
        </Button>
      </div>

      {/* Two-column split for content (stacks on mobile) */}
      <div className="container mx-auto flex flex-col md:flex-row gap-4 max-w-5xl">
        {/* Left column: scenario context, progress, etc. */}
        <div className="md:w-1/2 flex flex-col justify-start gap-2">
          <ScenarioContextBar
            companyCheckText="✔ You are a European Green Tech Co."
            productCheckText='✔ Product: "Solar Panels"'
            currentStep={3}
            totalSteps={3}
            progressValue={progressValue}
          />
        </div>

        {/* Right column: challenge question & answer options */}
        <div className="md:w-1/2 bg-background border border-border/40 rounded p-6">
          <h1 className="text-2xl font-bold mb-4">Challenge 3: Regulatory Hurdle</h1>
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
    </div>
  );
}
