import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Anonymous SME Owner",
    username: "Cross-Border Shipper",
    body: "Customs delays cost me €50K last quarter alone. I need a faster way.",
    Image: "https://avatar.vercel.sh/sme1",
  },
  {
    name: "Anonymous Exporter",
    username: "EU Trader",
    body: "Manual HS code checks take hours—hours I don’t have.",
    Image: "https://avatar.vercel.sh/exporter1",
  },
  {
    name: "Anonymous Logistics Lead",
    username: "Global Mover",
    body: "A €220K surcharge hit us out of nowhere. Compliance shouldn’t be this risky.",
    Image: "https://avatar.vercel.sh/logistics1",
  },
  {
    name: "Anonymous Founder",
    username: "Startup Hustler",
    body: "I’d kill for a tool that cuts my clearance times in half.",
    Image: "https://avatar.vercel.sh/founder1",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  Image,
  name,
  username,
  body,
}: {
  Image: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={Image} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
