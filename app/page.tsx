"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

import { Button } from "@/components/ui/button";
import { MarqueeDemo } from "../components/userTestimonials";
import ROICalculator from "../components/roiCalculator";
import SignupForm from "../components/signupForm";
import Navbar from "../components/navbar";
import { BlurFade } from "../components/magicui/blur-fade";
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Smooth Scroll for Anchor Links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const anchorId = target.getAttribute("href")!;
        const element = document.querySelector(anchorId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar openModal={openModal} />


      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-background text-foreground py-12 md:py-20"
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6 lg:px-24 xl:px-40">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center order-2 md:order-1">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-tight lg:text-6xl mb-6">
              End Customs Delays and Slash Compliance Costs
            </h1>
            <p className="leading-7 mb-8 text-xl dark:text-zinc-300">
              We’re building the automation SMEs need to ship faster, save more, and scale without the stress.
            </p>
            <Button size="lg" variant="default" onClick={openModal}>
              Get Early Access →
            </Button>
            <p className="leading-7 mt-4 text-muted-foreground">
              Tired of 30+ day delays and unexpected surcharges? Join us.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
            <BlurFade duration={1.0} delay={0.0} inView>
              <div className="relative w-full min-h-[250px] md:min-h-0 md:h-full">
                <Image
                  src="/assets/placeholder-hero.png"
                  alt="Hero Screenshot Placeholder"
                  className="w-full h-auto md:h-full md:w-auto object-cover"
                  width={800}
                  height={600}
                  priority // Ensures faster loading on mobile
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>


      {/* VALUE PROPOSITIONS */}
      <section id="features" className="bg-background text-foreground py-12">

        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-40">
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight mb-6 text-left">
            Your Compliance Pain, Solved
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col-reverse md:flex-col items-start p-6 border border-border/40 rounded">
              <div className="order-2 md:order-1">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  End 30+ Day Delays
                </h3>
                <p className="leading-7 mb-4">
                  Tired of shipments stuck in customs limbo? We’re targeting a 63% cut in clearance times.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full">
                <Image src="/assets/placeholder-valueprop1.png" alt="Faster Clearance" className="mb-4 w-full object-cover rounded" width={800} height={600} />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col items-start p-6 border border-border/40 rounded">
              <div className="order-2 md:order-1">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  Stop Costly Surcharges
                </h3>
                <p className="leading-7 mb-4">
                  A $220K penalty stings. We’re building automation to catch errors before they hit.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full">
                <Image src="/assets/placeholder-valueprop2.png" alt="Cost Savings" className="mb-4 w-full object-cover rounded" width={800} height={600} />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col items-start p-6 border border-border/40 rounded">
              <div className="order-2 md:order-1">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  Ditch Manual Chaos
                </h3>
                <p className="leading-7 mb-4">
                  Spreadsheets eating your week? We’re designing a smarter way to manage compliance.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full">
                <Image src="/assets/placeholder-valueprop3.png" alt="Manual Work" className="mb-4 w-full object-cover rounded" width={800} height={600} />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col items-start p-6 border border-border/40 rounded">
              <div className="order-2 md:order-1">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  Scale Without Stress
                </h3>
                <p className="leading-7 mb-4">
                  Growth shouldn’t mean compliance nightmares. We’re crafting a scalable solution.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full">
                <Image src="/assets/placeholder-valueprop4.png" alt="Scalability" className="mb-4 w-full object-cover rounded" width={800} height={600} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="roi-calculator" className="bg-background text-foreground py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 md:px-12 lg:px-24 xl:px-40">
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight mb-4 text-left px-6">
            See Your Potential Savings
          </h2>
          <ROICalculator />
        </div>
      </section>

      {/* TESTIMONIALS */}
<section id="why-compliance" className="text-foreground py-2">
  <div className="relative flex min-h-[600px] sm:min-h-[700px] w-full items-center justify-center overflow-visible md:px-12 lg:px-24 xl:px-40">
    <AnimatedGridPattern
      numSquares={70}
      maxOpacity={0.15}
      duration={0.5}
      repeatDelay={0.5}
      className={cn(
        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[5%] h-full skew-y-12 opacity-35"
      )}
    />

    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="scroll-m-20 text-3xl sm:text-4xl font-medium tracking-tight mb-6 text-left">
        Why Compliance Sucks (And Why We’re Fixing It)
      </h2>
      <MarqueeDemo />
      <div className="mt-8 text-center">
        <Button size="lg" variant="outline" className="z-10 relative" onClick={openModal}>
          Join the Waitlist
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* WHY JOIN? */}
      <section id="why-join" className="bg-background text-foreground py-12">
        <div className="container mx-auto px-6 text-center md:px-12 lg:px-24 xl:px-40">
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight mb-2 text-left">
            Why Join VelocityCompliance Now?
          </h2>
          <p className="leading-7 mb-6 mx-auto tracking-tight text-left lg:pr-94">
            We’re not just another tool—we’re solving the compliance chaos that’s holding SMEs back. Join our waitlist to get in early and help us build what you need.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 tracking-tight text-left">
            <li className="p-6 border border-border/40 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">Early Access</h3>
              <p className="tracking-tight text-s/2">Be the first to try our platform when it launches.</p>
            </li>
            <li className="p-6 border border-border/40 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">Shape the Future</h3>
              <p className="tracking-tight text-s/2">Your feedback will define how we tackle your pain points.</p>
            </li>
            <li className="p-6 border border-border/40 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">Exclusive Perks</h3>
              <p className="tracking-tight text-s/2">First 100 sign-ups get 20% off year one + a free consultation.</p>
            </li>
          </ul>
          <Button size="lg" onClick={openModal}>Join the Waitlist</Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background text-foreground py-8 border-t border-border/40">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-8 md:px-12 lg:px-24 xl:px-40">
          <div className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-primary">Home</a>
            <a href="#mini-game" className="hover:text-primary"  onClick={() => router.push("/mini-game")}>Mini Game</a>
            <a href="#roi-calculator" className="hover:text-primary">ROI Calculator</a>
            <a href="#why-compliance" className="hover:text-primary">Why Compliance?</a>
            <a href="mailto:velocitycomplianceofficial@gmail.com" className="hover:text-primary">Contact Us</a>

            <a href="/privacy" className="hover:text-primary text-xs  mt-8 color dark:text-zinc-600">Privacy Policy</a>
          </div>
          <div className="flex flex-col justify-between h-auto">
            <div className="text-lg font-semibold text-primary w-auto lg:text-right md:text-left">
              VelocityCompliance
            </div>
            <div className="text-sm mt-6 lg:mt-auto">
              © 2025. Designed in Sweden, for the world 🌍.
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <div className="py-12">

        {modalOpen && (
          <div
            id="modalOverlay"
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="bg-background text-foreground rounded-lg shadow-lg w-full max-w-md p-6 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                className="absolute top-3 right-3 text-foreground hover:text-primary text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-2 text-left">
                Join the Waitlist for Early Access
              </h2>
              <p className="text-sm text-muted-foreground text-left mb-8">
                Be the first to transform your compliance process.
              </p>
              <SignupForm onSuccess={closeModal} ctaText="Join the Waitlist" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
