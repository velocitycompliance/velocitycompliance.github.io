import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const reviews = [
  {
      name: "Jean-Pierre Dubois",
      username: "Import Operations Manager",
      body: "Between unpredictable customs delays and those surprise fees, our cash flow is getting crushed. We need a solution that brings speed *and* predictability to our imports.",
      ImageSrc: "/assets/face-1.jpg"
  },
  {
      name: "Carlos Rodriguez",
      username: "Trade Compliance Specialist",
      body: "Manually classifying hundreds of SKUs and keeping up with constant regulatory changes? It's a recipe for errors and delays. We need robust automation to stay competitive.",
      ImageSrc: "/assets/face-2.jpg"
  },
  {
      name: "Jay Chow",
      username: "Logistics Director",
      body: "We got hit with a €150,000 penalty due to a licensing slip-up. The risk exposure is unacceptable. I need proactive tools that give us real-time visibility and control.",
      ImageSrc: "/assets/face-3.png"
  },
  {
      name: "Mei Lin",
      username: "Supply Chain Analyst",
      body: "Compliance complexity is strangling our global expansion plans. Simplifying cross-border trade isn't just about cost savings; it's about unlocking growth.",
      ImageSrc: "/assets/face-4.png"
  },
  {
      name: "Lena Rybowski",
      username: "Finance Manager",
      body: "Our freight invoices are a black box of hidden charges and errors. We're leaving money on the table. I need a system that audits these automatically and recovers our losses.",
      ImageSrc: "/assets/face-5.png"
  },
  {
      name: "Raj Patel, Head of Legal",
      username: "Global Manufacturing",
      body: "In a potential acquisition, uncovering hidden compliance gaps could tank the whole deal. We need comprehensive due diligence tools to assess and mitigate those risks.",
      ImageSrc: "/assets/face-6.png"
  },
  {
      name: "Stacy Liu, Supply Chain Manager",
      username: "E-commerce Distributor",
      body: "We're drowning in paperwork and manual processes. Automation isn't just about efficiency; it's about freeing up our team to focus on strategic growth.",
      ImageSrc: "/assets/face-7.png"
  },
  {
      name: "Sofia Rossi, Trade Compliance Manager",
      username: "Pharmaceutical Exporter",
      body: "Communicating the ROI of compliance to leadership is a constant struggle. We need data-driven tools that demonstrate the value and justify the investment.",
      ImageSrc: "/assets/face-8.png"
  },
  {
      name: "Isabelle Moreau, Data Security Officer",
      username: "Diversified Conglomerate",
      body: "Integrating our patchwork of legacy systems for compliance visibility is a nightmare. We need a solution that can bridge these gaps and provide a single, reliable view.",
      ImageSrc: "/assets/face-9.png"
  },
  {
      name: "Stanley Peralta, CFO",
      username: "Auto Parts Manufacturer",
      body: "Protecting sensitive technical data across our global supply chain is mission-critical. We need granular controls and audit trails to ensure compliance and prevent catastrophic breaches.",
      ImageSrc: "/assets/face-10.png"
  },
  {
      name: "Jesper Svensson, Training Manager",
      username: "Automotive Supplier",
      body: "Keeping our global workforce up-to-date on complex and ever-changing regulations is a huge burden. We need a scalable and engaging training solution that integrates with our workflow.",
      ImageSrc: "/assets/face-11.png"
  },
  {
      name: "Omar Hassan, Customs Broker",
      username: "Fashion Importer",
      body: "Inaccurate classifications are causing costly delays and penalties. We need an AI-powered solution that learns our products and automates classification with pinpoint accuracy.",
      ImageSrc: "/assets/face-12.png"
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ ImageSrc, name, username, body }: { ImageSrc: string; name: string; username: string; body: string }) => (
  <figure className={cn(
    "relative w-60 sm:w-64 md:w-72 h-full cursor-pointer overflow-hidden rounded-xl border p-4",
    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    "dark:border-zinc-100/[.1] dark:bg-zinc-500/[.10] dark:hover:bg-zinc-500/[.25]"
  )}>
    <div className="flex items-center gap-2">
      <Image
        className="rounded-full"
        width={32}
        height={32}
        alt={name}
        src={ImageSrc}
      />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
  </figure>
);

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden py-6 sm:py-8 gap-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Updated gradient overlays with lower width and z-index layering */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 sm:w-1/6 bg-gradient-to-r from-background z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 sm:w-1/6 bg-gradient-to-l from-background z-10"></div>
    </div>
  );
}
