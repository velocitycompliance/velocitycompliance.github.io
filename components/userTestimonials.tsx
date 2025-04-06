import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  { name: "Anonymous SME Owner", username: "Cross-Border Shipper", body: "Customs delays cost me €50K last quarter alone. I need a faster way.", Image: "/assets/face-1.jpg" },
  { name: "Anonymous Exporter", username: "EU Trader", body: "Manual HS code checks take hours—hours I don’t have.", Image: "/assets/face-2.jpg" },
  { name: "Anonymous Logistics Lead", username: "Global Mover", body: "A €220K surcharge hit us out of nowhere. Compliance shouldn’t be this risky.", Image: "/assets/face-3.png" },
  { name: "Anonymous Founder", username: "Startup Hustler", body: "I’d kill for a tool that cuts my clearance times in half.", Image: "/assets/face-4.png" },
  { name: "Anonymous CFO", username: "Freight Optimizer", body: "We lost €20K last year to compliance penalties. I need certainty, not surprises.", Image: "/assets/face-5.png" },
  { name: "Anonymous Operations Manager", username: "Supply Chain Veteran", body: "Chasing down documents and manual entries waste my team's time every day.", Image: "/assets/face-6.png" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ Image, name, username, body }: { Image: string; name: string; username: string; body: string }) => (
  <figure className={cn(
    "relative w-60 sm:w-64 md:w-72 h-full cursor-pointer overflow-hidden rounded-xl border p-4",
    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    "dark:border-zinc-100/[.1] dark:bg-zinc-500/[.10] dark:hover:bg-zinc-500/[.25]"
  )}>
    <div className="flex items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt={name} src={Image} />
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
