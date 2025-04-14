//signup/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SignupForm from "@/components/signupForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();

  // When the form is successfully submitted, navigate to the next step.
  const handleSuccess = () => {
    router.push("/sign-up/report-slash-compliance");
  };

  return (
    <>
      {/* Back Navigation */}
      <div className="container mt-8 mb-0 gap-8 px-6 lg:px-24 xl:px-40">
        <Button variant="outline" size="lg" onClick={() => router.push("/")}>
          <ArrowLeft className="w-8 h-8" /> Back to Home
        </Button>
      </div>

      {/* Split Layout Section */}
      <section className="bg-background text-foreground py-12 md:py-20">
        {/* Page Header */}
        <div className="container mx-auto flex gap-8 px-12 lg:px-32 xl:px-60">
          <header className="text-left mb-8">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4">
              Sign up for the Paper
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Unlock Efficiency, Grapple with Compliance, and Boost Your Profit in 2025
            </p>
          </header>
        </div>

        {/* Signup Form */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6 lg:px-24 xl:px-40">
          <div className="max-w-md mx-auto p-6 border border-border/40 rounded-lg shadow-md">
            <SignupForm onSuccess={handleSuccess} ctaText="Access Paper" />
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
            <div className="relative w-full min-h-[250px] md:min-h-0 md:h-full">
              <Image
                src="/assets/sign-up-hero.png"
                alt="Compliance Solution Preview"
                className="w-full h-auto md:h-full md:w-auto object-cover rounded"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-foreground py-8 border-t border-border/40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025. Designed in Sweden, for the world 🌍.
          </p>
        </div>a
      </footer>
    </>
  );
}
