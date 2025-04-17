"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MarqueeDemo } from "../components/userTestimonials";
import ROICalculator from "../components/roiCalculator";
import SignupForm from "../components/signupForm";
import Navbar from "../components/navbar";
import PainPoints from "../components/painPoint";
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
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const anchorId = target.getAttribute("href")!;
        const element = document.querySelector(anchorId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () =>
      document.removeEventListener("click", handleSmoothScroll);
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
              Stop Fighting Compliance. Start Winning Global Trade.
            </h1>
            <p className="leading-7 mb-8 text-xl dark:text-zinc-300">
              The intelligent automation platform designed for ambitious SMEs. Turn regulatory complexity from your biggest headache into your hidden competitive edge. Ship faster, trade smarter, and scale globally &ndash; with confidence and control.
            </p>
            <Button size="lg" variant="default" onClick={openModal}>
              Become an Early Adopter &rarr;
            </Button>
            <p className="leading-7 mt-4 text-muted-foreground">
              Are endless customs delays, surprise six-figure penalties, and the daily chaos of manual checks strangling your growth? You&apos;re not alone. Global trade compliance is broken, especially for SMEs. We&apos;re here to fix it
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

      {/* PAIN POINTS */}
      <section id="painpoints" className="bg-background text-foreground py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-40">
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight mb-6 text-left">
            It&apos;s More Than Just Delays. It&apos;s Dragging You Down.
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* LEFT COLUMN (stream) */}
            <div className="order-2 lg:order-1 col-span-1 relative overflow-hidden max-h-[250px] lg:max-h-[650px]">
              <PainPoints />
              {/* Gradient overlay */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent"
              />
            </div>

            {/* RIGHT COLUMN (USPs) */}
            <div className="order-1 lg:order-2 grid grid-cols-1 gap-8 lg:col-span-2">
              <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
                <div className="order-2 md:order-1">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Paralyzing Delays
                  </h3>
                  <p className="leading-6 text-sm">
                    Shipments trapped for 30+ days? Lost tenders due to clearance nightmares? We give you back control over your timelines, targeting a 63% reduction in clearance bottlenecks
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
                <div className="order-2 md:order-1">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Crippling Financial Hits
                  </h3>
                  <p className="leading-6 text-sm">
                    Blindsided by &euro;220K surcharges or endless freight invoice errors? Our intelligent system flags discrepancies before they drain your resources, protecting your bottom line from the 1-3%+ leakage common in freight billing.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
                <div className="order-2 md:order-1">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Integration Nightmares
                  </h3>
                  <p className="leading-6 text-sm">
                    Struggling to connect disparate systems after an M&amp;A? Fighting data silos between ERP, P2P, and compliance tools? We build bridges, not more islands.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
                <div className="order-2 md:order-1">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Intangible Risks
                  </h3>
                  <p className="leading-6 text-sm">
                    Worried about controlling technical data transfers via email or cloud? Unsure how to license intangible exports compliantly? We provide clarity and control for your most sensitive assets.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
                <div className="order-2 md:order-1">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Manual Chaos &amp; Burnout
                  </h3>
                  <p className="leading-6 text-sm">
                    Drowning in spreadsheets? Your best people wasting hours on manual HS code checks, document chasing, and navigating the &quot;grey areas&quot;? Free your team to focus on growth, not admin.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
                <div className="order-2 md:order-1">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Scaling = Stress?
                  </h3>
                  <p className="leading-6 text-sm">
                    Does entering new markets or launching new products feel impossible due to compliance hurdles? We provide the scalable foundation to grow fearlessly, turning compliance from a barrier into a business enabler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROP USPs */}
      <section id="features" className="bg-background text-foreground py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-40">
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight mb-6 text-left">
            Intelligence. Automation. Partnership. That&apos;s How You Master Global Trade.
          </h2>
          <p className="leading-7 text-muted-foreground mb-6">
            VelocityCompliance isn&apos;t just software. It&apos;s your strategic co-pilot for navigating the complexities of international commerce. We combine cutting-edge AI, verified trusted technologies first, and deep process understanding to deliver:
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
              <div className="order-2 md:order-1">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  Predictive Compliance
                </h3>
                <p className="leading-7 mb-4">
                  Our AI Regulation Matrix doesn&apos;t just react; it anticipates, constantly scanning 900+ global regulations and your specific transactions to flag risks proactively. Move beyond manual checks to intelligent oversight.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full">
                <Image
                  src="/assets/placeholder-valueprop1.png"
                  alt="Faster Clearance"
                  className="mb-4 w-full object-cover rounded"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
              <div className="order-2 md:order-1">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  Seamless Automation
                </h3>
                <p className="leading-7 mb-4">
                  From automated classifications and denied party screening, 20% better detection, to streamlined payments and verifiable compliance certificates &ndash; we handle the heavy lifting, accurately and instantly.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full">
                <Image
                  src="/assets/placeholder-valueprop2.png"
                  alt="Cost Savings"
                  className="mb-4 w-full object-cover rounded"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
              <div className="order-2 md:order-1">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  Actionable Visibility
                </h3>
                <p className="leading-7 mb-4">
                  Finally connect the dots across your supply chain. Gain transparent insights into your compliance posture, operational bottlenecks, and true costs &ndash; empowering smarter decisions and effective stakeholder communication.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full">
                <Image
                  src="/assets/placeholder-valueprop3.png"
                  alt="Faster Clearance"
                  className="mb-4 w-full object-cover rounded"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col items-start border border-border/40 rounded">
              <div className="order-2 md:order-1">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  Built for Your Reality
                </h3>
                <p className="leading-7 mb-4">
                  We understand compliance is unique, like a &quot;fingerprint&quot;. Our platform is designed for the specific needs and resource realities of SMEs, integrating with your existing systems without the &quot;ERP PTSD&quot;.
                </p>
              </div>
              <div className="order-1 md:order-2 w-full">
                <Image
                  src="/assets/placeholder-valueprop4.png"
                  alt="Cost Savings"
                  className="mb-4 w-full object-cover rounded"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="roi-calculator" className="bg-background text-foreground py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-40">
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight mb-4 text-left">
            Your Savings. Then Consider the True Value.
          </h2>
          <p className="text-sm text-muted-foreground text-left mt-4">
            Estimates based on industry benchmarks. Adjust the sliders to see personalized results.
          </p>
          <ROICalculator />
          <h3 className="scroll-m-20 text-2xl font-medium tracking-tight text-left mb-4">
            But the real ROI goes deeper:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 tracking-tight text-left">
            <li className="border border-border/40 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 tracking-tight">
                Mitigated Risk
              </h4>
              <p className="tracking-tight text-s/2">
                What&apos;s the cost of not catching that violation? Avoid crippling penalties, reputational damage, and loss of export privileges.
              </p>
            </li>
            <li className="border border-border/40 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 tracking-tight">
                Unlocked Opportunities
              </h4>
              <p className="tracking-tight text-s/2">
                How much faster could you enter new markets? What deals have you lost due to compliance friction? Turn compliance into a competitive weapon.
              </p>
            </li>
            <li className="border border-border/40 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 tracking-tight">
                Reclaimed Resources
              </h4>
              <p className="tracking-tight text-s/2">
                What could your team achieve if freed from manual tasks and compliance firefighting? Reinvest that time into innovation and growth.
              </p>
            </li>
          </ul>
          <p className="leading-7 text-muted-foreground mt-4 mb-6">
            Stop letting compliance friction dictate your potential. Partner with VelocityCompliance and build the predictable, scalable, and stress-free global trade operation you need to thrive.
          </p>
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
              The Daily Grind is Real. The Opportunity is Bigger.
            </h2>
            <MarqueeDemo />
            <div className="mt-8 text-center">
              <Button
                size="lg"
                variant="outline"
                className="z-10 relative"
                onClick={openModal}
              >
                Become an Early Adopter &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN? */}
      <section id="why-join" className="bg-background text-foreground py-12">
        <div className="container mx-auto px-6 text-center gap-8 md:px-12 lg:px-24 xl:px-40">
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight mb-2 text-left">
            Don&apos;t Just Buy Software. Co-Create Your Solution.
          </h2>
          <p className="leading-7 mb-6 mx-auto tracking-tight text-left mb-12">
            VelocityCompliance is architected by technologists who understand the future, informed by the deep operational insights of trade professionals like you. We know the standard solutions fall short. They don&apos;t address the real complexities, the implementation hurdles, the data challenges, or the unique &ldquo;fingerprint&rdquo; of your business.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 tracking-tight text-left mb-6">
            <li className="border border-border/40 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                Get Unrivaled Acces
              </h3>
              <p className="tracking-tight text-s/2">
                Be the first to leverage our intelligent automation platform.
              </p>
            </li>
            <li className="border border-border/40 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                Shape the Product
              </h3>
              <p className="tracking-tight text-s/2">
                Your direct feedback is critical. Help us prioritize the features and solve the problems you face daily from freight audits to intangible controls.
              </p>
            </li>
            <li className="border border-border/40 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                Gain a Strategic Edge
              </h3>
              <p className="tracking-tight text-s/2">
                Implement the future of compliance before your competitors, guided by our team.
              </p>
            </li>
            <li className="border border-border/40 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                Exclusive Benefits
              </h3>
              <p className="tracking-tight text-s/2">
                Secure significant first-year discounts, dedicated onboarding support acknowledging the real implementation journey, and strategic consultations.
              </p>
            </li>
          </ul>
          <p className="leading-7 text-muted-foreground mb-6">
            Stop letting compliance friction dictate your potential. Partner with VelocityCompliance and build the predictable, scalable, and stress-free global trade operation you need to thrive.
          </p>
          <Button size="lg" onClick={openModal}>
            Request Early Access &amp; Consultation &rarr;
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background text-foreground py-8 border-t border-border/40">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-8 md:px-12 lg:px-24 xl:px-40">
          <div className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-primary">
              Home
            </a>
            <a
              href="#mini-game"
              className="hover:text-primary"
              onClick={() => router.push("/mini-game")}
            >
              Mini Game
            </a>
            <a href="#roi-calculator" className="hover:text-primary">
              ROI Calculator
            </a>
            <a href="#why-compliance" className="hover:text-primary">
              Why Compliance?
            </a>
            <a
              href="mailto:velocitycomplianceofficial@gmail.com"
              className="hover:text-primary"
            >
              Contact Us
            </a>

            <a
              href="/privacy"
              className="hover:text-primary text-xs mt-8 color dark:text-zinc-600"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex flex-col justify-between h-auto">
            <div className="text-lg font-semibold text-primary w-auto lg:text-right md:text-left">
              VelocityCompliance
            </div>
            <div className="text-sm mt-6 lg:mt-auto">
              © 2025. Designed in Sweden, for the world &#127757;.
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
                Become an early Adopter
              </h2>
              <p className="text-sm text-muted-foreground text-left mb-8">
                Be the first to transform your compliance process.
              </p>
              <SignupForm onSuccess={closeModal} ctaText="Get Early Access" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
