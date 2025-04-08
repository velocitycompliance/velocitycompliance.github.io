"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/signupForm"; // same as your existing form
import Image from "next/image";

export default function AddEmailPage() {
    const router = useRouter();

    // When SignupForm is successfully submitted, go to results
    const handleSuccess = () => {
        router.push("/mini-game/results");
    };

    return (
        <>
            {/* Optional: some kind of top navigation or "Back" button */}
            <div className="container mt-8 mb-0 gap-8 px-6 lg:px-24 xl:px-40">
                <Button variant="outline" size="lg" onClick={() => router.push("/mini-game")}>
                    Back to Mini-Game Home
                </Button>
            </div>

            <section className="bg-background text-foreground py-12 md:py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6 lg:px-24 xl:px-40">
                    {/* Left Column: Header + Signup Form */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <header>
                            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4">
                            Before We Show Your Results...
                            </h1>
                            <p className="text-xl text-muted-foreground mb-4">
                            Enter your email to unlock the final compliance summary &amp; see how you performed.
                            </p>
                        </header>

                        <div className="border border-border/40 rounded-lg shadow-md">
                            <SignupForm onSuccess={handleSuccess} ctaText="See My Results" />
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <div className="relative w-full min-h-[250px] md:min-h-[400px]">
                            <Image
                                src="/assets/game/game-singnup-teaser.png"
                                alt="Compliance Solution Preview"
                                className="w-full h-auto object-cover rounded"
                                width={800}
                                height={600}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 