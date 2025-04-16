import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { TypingAnimation } from "../components/magicui/typing-animation";

// Assumed digital solution investment cost
const solutionCost = 45000;

const AmazingROICalculatorWithSliders: React.FC = () => {
  // Default benchmark values
  const [shipmentVolume, setShipmentVolume] = useState<number>(5000);
  const [complianceCost, setComplianceCost] = useState<number>(50);
  const [savingsRate, setSavingsRate] = useState<number>(63);
  const [isClient, setIsClient] = useState<boolean>(false); // Hydration guard

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculations
  const annualComplianceCost = shipmentVolume * complianceCost;
  const potentialSavings = annualComplianceCost * (savingsRate / 100);
  const roiRatio = potentialSavings / solutionCost; 
  const paybackPeriod = (solutionCost / potentialSavings) * 12; // months

  // Format numbers: force locale "en-US" and no decimals
  const formatNumber = (value: number): string =>
    value.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <TooltipProvider>
      <section id="roi" className="bg-background text-foreground py-10">
        <div className="container mx-auto">

          {/* Sliders Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Annual Shipment Volume Slider */}
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Label htmlFor="shipmentVolume" className="font-semibold">
                  Annual Shipment Volume
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={16} className="text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter the total number of shipments processed annually. (e.g., 5,000)</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Slider
                defaultValue={[5000]}
                max={10000}
                step={100}
                onValueChange={(val) => setShipmentVolume(val[0])}
                className="w-full"
              />
              <p className="text-center text-xl font-medium">
                {isClient && formatNumber(shipmentVolume)}
              </p>
            </div>

            {/* Average Compliance Cost per Shipment Slider */}
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Label htmlFor="complianceCost" className="font-semibold">
                  Avg Compliance Cost ($) / Shipment
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={16} className="text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This cost includes fines, delays, manual processing, etc.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Slider
                defaultValue={[50]}
                max={500}
                step={5}
                onValueChange={(val) => setComplianceCost(val[0])}
                className="w-full"
              />
              <p className="text-center text-xl font-medium">
                {isClient && `$${formatNumber(complianceCost)}`}
              </p>
            </div>

            {/* Estimated Savings Rate Slider */}
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Label htmlFor="savingsRate" className="font-semibold">
                  Estimated Savings (%)
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={16} className="text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Adjust the expected improvement from digital automation. The default 63%
                      is based on industry benchmarks.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Slider
                defaultValue={[63]}
                max={100}
                step={1}
                onValueChange={(val) => setSavingsRate(val[0])}
                className="w-full"
              />
              <p className="text-center text-xl font-medium">
                {isClient && `${formatNumber(savingsRate)}%`}
              </p>
            </div>
          </div>

          {/* Immediate Results Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center mb-6">
            {/* Annual Compliance Cost */}
            <div className="border border-border/40 rounded-lg shadow-lg bg-background/50">
              <p className="font-medium text-muted-foreground mb-2">
                Annual Compliance Cost
              </p>
              <TypingAnimation className="font-bold text-5xl">
                {isClient ? `$${formatNumber(annualComplianceCost)}` : ""}
              </TypingAnimation>
            </div>
            {/* Potential Savings */}
            <div className="border border-border/40 rounded-lg shadow-lg bg-background/50">
              <p className="font-medium text-muted-foreground mb-2">
                Potential Annual Savings
              </p>
              <TypingAnimation className="font-bold text-5xl">
                {isClient ? `$${formatNumber(potentialSavings)}` : ""}
              </TypingAnimation>
            </div>

            {/* Additional ROI Outputs */}
            {/* ROI Ratio */}
            <div className="border border-border/40 rounded-lg shadow-lg bg-background/50">
              <p className="font-medium text-muted-foreground mb-2">
                ROI Ratio
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={16} className="ml-1 inline text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Calculated as Potential Savings / Investment Cost. Assumes a solution cost of $45,000.</p>
                  </TooltipContent>
                </Tooltip>
              </p>
              <TypingAnimation className="font-bold text-5xl">
                {isClient ? `${roiRatio.toFixed(1)}×` : ""}
              </TypingAnimation>
            </div>
            {/* Payback Period */}
            <div className="border border-border/40 rounded-lg shadow-lg bg-background/50">
              <p className="font-medium text-muted-foreground mb-2">
                Payback Period
                <Tooltip>
                  <TooltipTrigger>
                    <Info size={16} className="ml-1 inline text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Computed as (Investment Cost / Potential Savings) × 12. Lower is better.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </p>
              <TypingAnimation className="font-bold text-5xl">
                {isClient ? `${Math.round(paybackPeriod)} months` : ""}
              </TypingAnimation>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-4">
            Estimates based on industry benchmarks. Adjust the sliders to see personalized results.
          </p>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default AmazingROICalculatorWithSliders;
