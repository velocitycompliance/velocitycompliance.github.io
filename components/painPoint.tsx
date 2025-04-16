//component/painPoint.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

// Define our notification (pain point) type
interface NotificationItem {
  // Note: the component now uses 'description' as the main text.
  description: string;
  icon: string;
  color: string;
  time: string;
}

// Array of notifications representing typical pain points
const painNotifications: NotificationItem[] = [
  {
    description: "Paralyzing Delays – Shipments trapped for over 30 days, missing critical deadlines.",
    time: "3 days ago",
    icon: "⏳",
    color: "#FF3D71",
  },
  {
    description: "Crippling Financial Hits – Unexpected surcharges draining budgets and disrupting forecasts.",
    time: "1 week ago",
    icon: "💸",
    color: "#FFB800",
  },
  {
    description: "Integration Nightmares – Systems failing to connect, leaving data in silos.",
    time: "45m ago",
    icon: "🔌",
    color: "#1E86FF",
  },
  {
    description: "Intangible Risks – Uncontrolled data transfers and licensing issues on the rise.",
    time: "15h ago",
    icon: "⚠️",
    color: "#FF3D71",
  },
  {
    description: "Manual Chaos & Burnout – Overworked teams drowning in spreadsheets and repetitive tasks.",
    time: "1 day ago",
    icon: "📝",
    color: "#FFB800",
  },
  {
    description: "Scaling = Stress? – Expansion stalled by overwhelming compliance hurdles.",
    time: "24h ago",
    icon: "🚧",
    color: "#FF3D71",
  },
];

// To simulate a continuous stream we replicate the notifications
const notifications = Array.from({ length: 2 }, () => painNotifications).flat();

// Notification component for each item in the list
const Notification = ({ description, icon, color, time }: NotificationItem) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-full cursor-pointer rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[101.5%] transform-gpu will-change-transform",
        // Light mode styles
        "bg-white shadow-md",
        // Dark mode styles
        "dark:bg-transparent dark:backdrop-blur-md dark:border dark:border-gray-600"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-8 w-18 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-base">{icon}</span>
        </div>
        <div className="flex flex-col flex-grow">
          <figcaption className="text-xs dark:text-white">
            {description}
          </figcaption>
          <span className="mt-1 text-xs text-gray-400">{time}</span>
        </div>
      </div>
    </figure>
  );
};

// Animated list container for notifications
export function AnimatedPainPoints({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex-col overflow-hidden p-2", className)}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none" />
    </div>
  );
}

// Main PainPoints component for the "problem space" section
const PainPoints: React.FC = () => {
  return (
    <div>
      <AnimatedPainPoints />
    </div>
  );
};

export default PainPoints;
