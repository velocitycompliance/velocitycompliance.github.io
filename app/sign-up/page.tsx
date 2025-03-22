"use client";

import React from "react";
import { useRouter } from "next/navigation";
// If you have a separate Footer component, you can import it; if not, include your footer code inline.
import SignupForm from "@/components/signupForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();

  // When the form is successfully submitted, navigate back to home (or handle as needed)
  const handleSuccess = () => {
    router.push("/sign-up/report-slash-compliance");
  };

  return (
    <>
      <div className="mt-6 ml-16">
        <Button variant="outline" size="lg" onClick={() => router.push("/")}>
          <ArrowLeft className="w-8 h-8" /> Back to Home
        </Button>
      </div>
      <main className="bg-background text-foreground min-h-screen py-12">

        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-40">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4 text-center">
            Join the Waitlist for Early Access
          </h1>
          <p className="text-center mb-8 text-xl text-muted-foreground">
            Be the first to experience our game-changing compliance solution.
          </p>

          <div className="max-w-md mx-auto p-6 border border-border/40 rounded-lg shadow-md">
            <SignupForm onSuccess={handleSuccess} />
          </div>


        </div>
      </main>

      <footer className="bg-background text-foreground py-8 border-t border-border/40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025. Designed in Sweden, for the world 🌍.
          </p>
        </div>
      </footer>
    </>
  );
}
