// pages/mini-game/page.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Intro from "./game/page";

export default function MiniGamePage() {
  const router = useRouter();

  return (
    <>
      <div className="mt-8 mb-4 gap-8 px-6 lg:px-24 xl:px-40">
        <Button variant="outline" size="lg" onClick={() => router.push("/")}>
          <ArrowLeft className="w-8 h-8" /> Back to Home
        </Button>
      </div>

      <div className="m-8 py-8 mt-12 gap-8 px-6 lg:px-24 xl:px-40">
        <Intro />
      </div>

      <footer className="bg-background text-foreground py-8 border-t border-border/40 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2025. Designed in Sweden, for the world 🌍.</p>
        </div>
      </footer>
    </>
  );
}
