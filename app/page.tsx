"use client";
import React, { useState, useEffect } from "react";
import SignupForm from "../components/signupForm";
import { NumberTicker } from "../components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Home() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  // ROI Calculator states
  const [shipmentVolume, setShipmentVolume] = useState<number>(0);
  const [complianceCost, setComplianceCost] = useState<number>(0);
  const [clearanceTime, setClearanceTime] = useState<number>(0);

  const annualComplianceCost = shipmentVolume * complianceCost;
  const potentialSavings = annualComplianceCost * 0.63;
  const daysShaved = clearanceTime * 0.63;

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    // Replace with PostHog capture or other analytics if needed
    console.log("Waitlist signup:", email);
    alert(`Thanks for joining, ${email}!`);
    closeModal();
  };

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
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-background">
        {/* Logo */}
        <div className="text-lg font-bold text-primary">ComplianceAI</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-foreground">
          <li>
            <a href="#hero" className="hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#value-props" className="hover:text-primary">
              Features
            </a>
          </li>
          <li>
            <a href="#roi-calculator" className="hover:text-primary">
              ROI Calculator
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-primary">
              Testimonials
            </a>
          </li>
        </ul>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <Button variant="outline" onClick={openModal}>
            Get Early Access
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="p-2">
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-background text-foreground">
              <DropdownMenuItem asChild>
                <a href="#hero">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#value-props">Features</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#roi-calculator">ROI Calculator</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#testimonials">Testimonials</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={openModal}
                >
                  Get Early Access
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="bg-background text-foreground py-12 md:py-20"
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              Transform Compliance Into Your Competitive Edge
            </h1>
            <p className="leading-7 mb-6">
              Automate customs, VAT, and dual-use controls so you can ship faster,
              cut costs, and scale securely—without the headaches.
            </p>
            <Button variant="default" onClick={openModal}>
              Get Early Access →
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/placeholder-hero.png"
              alt="Hero Screenshot Placeholder"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section id="value-props" className="bg-background text-foreground py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value Prop 1 */}
          <div className="flex flex-col items-start p-6 border border-border/40 rounded">
            <img
              src="/assets/placeholder-valueprop1.png"
              alt="Value Prop 1"
              className="mb-4 w-full object-cover rounded"
            />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
              Cut Your Clearance Times by 63%
            </h3>
            <p className="leading-7">
              No more 30+ day customs delays. Our AI-driven platform auto-classifies
              TARIC/NOGA codes with 94% accuracy and slashes clearance times to mere
              days.
            </p>
          </div>

          {/* Value Prop 2 */}
          <div className="flex flex-col items-start p-6 border border-border/40 rounded">
            <img
              src="/assets/placeholder-valueprop2.png"
              alt="Value Prop 2"
              className="mb-4 w-full object-cover rounded"
            />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
              Save Up to €280K Annually
            </h3>
            <p className="leading-7 mb-4">
              Reduce penalties, manual overhead, and carbon taxes with an all-in-one
              compliance matrix that integrates with EU authorities.
            </p>
            <NumberTicker
              value={100}
              className="text-8xl font-medium tracking-tighter text-foreground"
            />
          </div>

          {/* Value Prop 3 */}
          <div className="flex flex-col items-start p-6 border border-border/40 rounded">
            <img
              src="/assets/placeholder-valueprop3.png"
              alt="Value Prop 3"
              className="mb-4 w-full object-cover rounded"
            />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
              Stay Secure &amp; Scalable
            </h3>
            <p className="leading-7">
              Air-gapped AI for dual-use exports. Quantum-proof payment routing.
              GDPR-compliant data handling from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="roi-calculator" className="bg-background text-foreground py-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">ROI Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="shipmentVolume" className="block font-medium mb-2">Annual Shipment Volume</label>
            <input
              type="number"
              id="shipmentVolume"
              value={shipmentVolume || ""}
              onChange={(e) => setShipmentVolume(parseFloat(e.target.value) || 0)}
              className="w-full rounded border border-border bg-background/50 px-3 py-2 text-foreground"
            />
          </div>
          <div>
            <label htmlFor="complianceCost" className="block font-medium mb-2">Avg Compliance Cost (€) / Shipment</label>
            <input
              type="number"
              id="complianceCost"
              value={complianceCost || ""}
              onChange={(e) => setComplianceCost(parseFloat(e.target.value) || 0)}
              className="w-full rounded border border-border bg-background/50 px-3 py-2 text-foreground"
            />
          </div>
          <div>
            <label htmlFor="clearanceTime" className="block font-medium mb-2">Current Clearance Time (days)</label>
            <input
              type="number"
              id="clearanceTime"
              value={clearanceTime || ""}
              onChange={(e) => setClearanceTime(parseFloat(e.target.value) || 0)}
              className="w-full rounded border border-border bg-background/50 px-3 py-2 text-foreground"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border border-border/40 rounded">
            <strong>Annual Compliance Cost:</strong>
            <div className="mt-1 text-lg">€{annualComplianceCost.toFixed(2)}</div>
          </div>
          <div className="p-4 border border-border/40 rounded">
            <strong>Potential Annual Savings (63%):</strong>
            <div className="mt-1 text-lg">€{potentialSavings.toFixed(2)}</div>
          </div>
          <div className="p-4 border border-border/40 rounded">
            <strong>Days Shaved (63%):</strong>
            <div className="mt-1 text-lg">{daysShaved.toFixed(1)} days</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="bg-background text-foreground py-12"
      >
        <div className="container mx-auto px-6">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-6">
            Success Stories
          </h2>
          <div className="space-y-8">
            <div className="border border-border/40 p-6 rounded">
              <p className="leading-7 italic mb-2">
                “We used to budget 6 weeks for shipping to customers in the Baltics.
                Now it’s down to under 10 days—and we haven’t missed a single filing.”
              </p>
              <div className="text-sm font-medium text-right">
                — Anna, COO at GreenSustain AB
              </div>
            </div>
            <div className="border border-border/40 p-6 rounded">
              <p className="leading-7 italic mb-2">
                “We saved €200K in compliance overhead and doubled our cross-border
                shipments in Q1 alone.”
              </p>
              <div className="text-sm font-medium text-right">
                — Tomas, CFO at Baltic Machines
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background text-foreground py-8 border-t border-border/40">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025. Designed in Sweden, for the world.</p>
          <p className="mt-2 space-x-4">
            <a href="#hero" className="hover:text-primary">
              Home
            </a>
            <a href="#value-props" className="hover:text-primary">
              Features
            </a>
            <a href="#roi-calculator" className="hover:text-primary">
              ROI Calculator
            </a>
            <a href="#testimonials" className="hover:text-primary">
              Testimonials
            </a>
          </p>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div
          id="modalOverlay"
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-background text-foreground rounded shadow-lg w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent inside clicks from closing
          >
            <button
              className="absolute top-3 right-3 text-foreground hover:text-primary text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="scroll-m-20 text-2xl font-bold mb-4">
              Join the Waitlist
            </h2>
            <SignupForm onSuccess={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
