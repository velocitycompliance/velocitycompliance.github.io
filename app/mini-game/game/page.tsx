// min-game/game.tsx (adjust path as needed)
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { useRouter } from "next/navigation";  // <-- Import useRouter

// --- Configuration (Paste the updated config from Step 1 here) ---
const gridConfig = {
  cols: 60,
  rows: 30,
  squareSize: 20,
  opacityLevel0: "[opacity:0]",
  opacityLevel1: "[opacity:0.3]",
  opacityLevel2: "[opacity:0.65]",
  opacityLevelDefault: "[opacity:0.95]",
  baseFillClass: "fill-background",
  transitionDurationClass: "duration-200", // Adjusted duration
};
const allOpacityClasses = [
  gridConfig.opacityLevel0,
  gridConfig.opacityLevel1,
  gridConfig.opacityLevel2,
  gridConfig.opacityLevelDefault,
];
// --- End Configuration ---

export default function Intro() {
  const router = useRouter();             // <-- useRouter hook here
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // First useEffect (Event Listeners) - Remains the same as before
  useEffect(() => {
    const gridElement = gridRef.current;
    if (!gridElement) return;
    const squares = gridElement.querySelectorAll<SVGRectElement>("svg rect");
    if (squares.length === 0) return;

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as SVGRectElement;
      const index = Array.from(squares).findIndex(sq => sq === target);
      if (index !== -1) {
        setHoveredIndex(index);
      }
    };
    const handleMouseLeave = () => { setHoveredIndex(null); };

    squares.forEach((square) => {
      square.addEventListener("mouseenter", handleMouseEnter);
      square.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => { // Cleanup
      squares.forEach((square) => {
        square.removeEventListener("mouseenter", handleMouseEnter);
        square.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Second useEffect (Apply Styles based on hover) - MODIFIED
  useEffect(() => {
    const gridElement = gridRef.current;
    if (!gridElement) return;
    const squares = gridElement.querySelectorAll<SVGRectElement>("svg rect");
    if (squares.length === 0) return;

    const { cols } = gridConfig; // Removed unused vars here

    let hoveredCol = -1;
    let hoveredRow = -1;

    if (hoveredIndex !== null) {
      hoveredCol = hoveredIndex % cols;
      hoveredRow = Math.floor(hoveredIndex / cols);
    }

    squares.forEach((square, index) => {
      // Always remove all previous opacity classes first
      square.classList.remove(...allOpacityClasses);

      if (hoveredIndex === null) {
        // No hover: apply default obscured opacity
        square.classList.add(gridConfig.opacityLevelDefault);
      } else {
        // Calculate current square's position
        const currentCol = index % cols;
        const currentRow = Math.floor(index / cols);

        // Calculate distance (Chebyshev distance)
        const distance = Math.max(Math.abs(currentCol - hoveredCol), Math.abs(currentRow - hoveredRow));

        // Apply opacity based on distance
        if (distance === 0) {
          square.classList.add(gridConfig.opacityLevel0); // Center
        } else if (distance === 1) {
          square.classList.add(gridConfig.opacityLevel1); // Ring 1
        } else if (distance === 2) {
          square.classList.add(gridConfig.opacityLevel2); // Ring 2
        } else {
          square.classList.add(gridConfig.opacityLevelDefault); // Beyond Ring 2
        }
      }
    });

  }, [hoveredIndex]); // Re-run when hover changes


  // When the user clicks "Start the 60-Second Challenge!"
  // navigate to Challenge 1:
  const handleStartGame = () => {
    // Reset the timer by setting a new start time
    if (typeof window !== "undefined") {
      localStorage.setItem("miniGameStartTime", String(Date.now()));
      
    localStorage.removeItem("miniGameResults"); // ✅ Clear past results
    }
    console.log("Starting game...");
    router.push("/mini-game/challengeOne"); // <-- Adjust route as needed
  };

  return (
    <div className="relative flex h-[70vh] min-h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xxl">

      {/* Layer 0: Static Background Map Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/game/worldMap.png" // Verify path
          alt="World Map Background"
          layout="fill"
          objectFit="contain"
          className="opacity-100"
          priority
        />
      </div>

      {/* Layer 1: Interactive Grid Overlay */}
      <div ref={gridRef} className="absolute inset-0 z-10">
        <InteractiveGridPattern
          width={gridConfig.squareSize}
          height={gridConfig.squareSize}
          squares={[gridConfig.cols, gridConfig.rows]}
          // --- Base Styling including transition ---
          squaresClassName={cn(
            gridConfig.baseFillClass,       // Base color (e.g., 'fill-background')
            "transition-opacity ease-in-out", // Apply transition
            gridConfig.transitionDurationClass // Control speed (e.g., 'duration-200')
            // Default opacity is now set by useEffect, not here initially
          )}
          className={cn("h-full w-full")}
        />
      </div>

      {/* Layer 2: Content Layer (Text and Button) */}
      <div className="relative z-10 mt-auto mb-16 flex w-12/13 max-w-3xl flex-col items-center rounded-lg bg-background/20 p-7 text-center backdrop-blur-md md:mb-16 md:p-9 pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground drop-shadow-lg">
            {`Can You Beat the Compliance Clock?`}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary drop-shadow-md">
            {`Test Your Global Trade Skills!`}
          </h2>
          <p className="text-sm md:text-base text-foreground/90 max-w-xl mb-8 drop-shadow-sm">
            Manual compliance costs businesses $217B annually and causes average delays of 18–42 days. See if you can navigate a shipment faster.
          </p>
          <Button size="lg" onClick={handleStartGame} className="px-8 py-6 text-lg font-semibold">
            Start the 60-Second Challenge!
          </Button>
        </div>
      </div>
    </div>
  );
}