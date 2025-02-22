import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypingAnimation } from "../components/magicui/typing-animation";

const ROICalculator: React.FC = () => {
  const [shipmentVolume, setShipmentVolume] = useState<number>(0);
  const [complianceCost, setComplianceCost] = useState<number>(0);

  const annualComplianceCost = shipmentVolume * complianceCost;
  const potentialSavings = annualComplianceCost * 0.63;

  const formatNumber = (value: number): string =>
    value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: number) => void) => {
    const num = parseFloat(e.target.value);
    setter(isNaN(num) ? 0 : num);
  };

  return (
    <section id="roi" className="bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-0.5xl" htmlFor="shipmentVolume">Annual Shipment Volume</Label>
            <Input
              textSize = "text-2xl"
              paddingY = "py-6"
              type="number"
              id="shipmentVolume"
              placeholder="Enter shipment volume"
              value={shipmentVolume.toString()}  // always a string
              onChange={(e) => handleInputChange(e, setShipmentVolume)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-0.5xl" htmlFor="complianceCost">Avg Compliance Cost (€) / Shipment</Label>
            <Input
              textSize = "text-2xl"
              paddingY = "py-6"
              type="number"
              id="complianceCost"
              placeholder="Enter cost per shipment"
              value={complianceCost.toString()}  // always a string
              onChange={(e) => handleInputChange(e, setComplianceCost)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mb-6">
          <div className="p-6 border border-border/40 rounded-lg shadow-md bg-background/50">
            <p className="font-medium text-muted-foreground mb-1 text-0.5xl">Annual Compliance Cost</p>
            <TypingAnimation className="font-medium text-5xl">{`€${formatNumber(annualComplianceCost)}`}</TypingAnimation>
          </div>
          <div className="p-6 border border-border/40 rounded-lg shadow-md bg-background/50">
            <p className="font-medium text-muted-foreground mb-1 text-0.5xl">Potential Annual Savings (63%)</p>
            <TypingAnimation className="font-medium text-5xl">{`€${formatNumber(potentialSavings)}`}</TypingAnimation>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Estimates based on industry benchmarks.
        </p>
      </div>
    </section>
  );
};

export default ROICalculator;
