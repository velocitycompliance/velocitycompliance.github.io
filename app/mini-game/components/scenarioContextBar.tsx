"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  AnimatedSpan,
} from "@/components/magicui/terminal"; // Adjust your import
import { Progress } from "@/components/ui/progress";

// Props for scenario bar
interface ScenarioContextBarProps {
  companyCheckText: string;
  productCheckText: string;
  currentStep: number;
  totalSteps: number;
  progressValue: number;
}

export function ScenarioContextBar({
  companyCheckText,
  productCheckText,
  currentStep,
  totalSteps,
  progressValue,
}: ScenarioContextBarProps) {
  // Local state for the countdown
  const [timeLeft, setTimeLeft] = useState<number>(60);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1) Check if we have a saved "startTime" in local storage
    const savedTime = window.localStorage.getItem("miniGameStartTime");
    let gameStartTime: number;

    if (!savedTime) {
      // No start time found, set a new one
      gameStartTime = Date.now();
      window.localStorage.setItem("miniGameStartTime", String(gameStartTime));
    } else {
      gameStartTime = parseInt(savedTime, 10);
    }

    // 2) Create an interval to update the countdown
    const timer = setInterval(() => {
      const now = Date.now();
      const diffSec = Math.floor((now - gameStartTime) / 1000);
      const remaining = 120 - diffSec;
      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        setTimeLeft(0);
        // Optionally do something when time hits 0
        // e.g. alert("Time's up!") or router.push("/mini-game/game/timeUp");
      }
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-4 p-4 mb-6 border-b border-border/40">
      {/* Step Indicator & Manual Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-primary">{progressValue}%</span>
      </div>
      <Progress value={progressValue} className="w-full" />

      <Terminal className="rounded-xl border border-border bg-background">
        {/* 1) Company Check */}
        <AnimatedSpan delay={30} className="text-green-500">
          {companyCheckText}
        </AnimatedSpan>

        {/* 2) Product Check */}
        <AnimatedSpan delay={500} className="text-green-500">
          {productCheckText}
        </AnimatedSpan>

        {/* 3) Misstep Warning */}
        <AnimatedSpan delay={800} className="text-red-500 block mb-2">
          ✖ Remember: each misstep adds delays & costs!
        </AnimatedSpan>

        {/* 4) The Countdown in Large Text */}
        <AnimatedSpan delay={900} className="text-white-400 text-xl font-bold">
          Time Left: {timeLeft}s
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}
