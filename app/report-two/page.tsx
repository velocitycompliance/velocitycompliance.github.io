// app/report-two/page.tsx
"use client";

import React, { useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/signupForm";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ReportTwoPage() {
    const router = useRouter();
    const [hasAccess, setHasAccess] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    // Load from localStorage on mount
    useLayoutEffect(() => {
        const alreadySignedUp = localStorage.getItem("reports");
        if (alreadySignedUp === "true") {
            setHasAccess(true);
        }
    }, []);

    // Check scroll % only if access hasn't been granted
    useEffect(() => {
        if (hasAccess) return;

        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const totalScrollable = scrollHeight - clientHeight;
            const scrollPercent = (scrollTop / totalScrollable) * 100;

            if (scrollPercent >= 15) {
                setShowSignup(true);
            }
        }

        handleScroll(); // run immediately (important if user refreshed mid-scroll)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasAccess]);

    // On success, unlock content and persist in localStorage
    const handleSignupSuccess = () => {
        localStorage.setItem("reports", "true");
        setHasAccess(true);
        setShowSignup(false);
    };

    return (
        <>
            {/* Back Navigation */}
            <div className="container mt-8 mb-0 gap-8 px-6 lg:px-24 xl:px-40">
                <Button variant="outline" size="lg" onClick={() => router.push("/")}>
                    <ArrowLeft className="w-8 h-8" /> Back to Home
                </Button>
            </div>

            <main className="min-h-screen bg-background text-foreground py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-40">
                    {/* PAGE HEADER */}
                    <header className="mb-12 text-center">
                        <h1 className="scroll-m-20 text-5xl font-bold tracking-tight mb-4">
                            The New High-Stakes Frontier of Trade Compliance
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Forced Labor Enforcement and Supply Chain Vigilance
                        </p>
                    </header>

                    {/* WRAPPED IN BLUR GATE IF NOT SIGNED UP */}

                    {/* INTRO SECTION */}
                    <section className="mb-12">
                        <p className="mb-4">
                            It’s no secret that trade compliance has grown exponentially more complex over the last year,
                            with government authorities around the world imposing tighter restrictions and levying record fines.
                            But there’s one area in particular that has soared to the top of boardroom agendas—and it’s not just about
                            tariffs or sanctions anymore. Forced labor and supply chain due diligence have emerged as a high-stakes
                            frontier in global trade compliance, reshaping how multinational manufacturers source raw materials and
                            assemble products.
                        </p>
                        <p className="mb-4">
                            <strong>Why now?</strong> In the past 12 months alone, customs officials in multiple jurisdictions,
                            from North America to Europe and beyond, have detained or blocked billions of dollars in shipments
                            because of potential forced labor ties. The message is clear: if you cannot conclusively prove that your
                            products are free from unethical labor practices—at every stage, in every corner of your supply chain—
                            you risk severe financial and reputational consequences.
                        </p>
                        <p className="mb-4">
                            This post dives into the major developments, the underlying data, and how new approaches to software
                            and automation are allowing leading enterprises to stay ahead of these intensified demands. Along the
                            way, we’ll share hard metrics that could easily be translated into eye-catching graphs or bar charts,
                            emphasizing the scale and seriousness of this trend.
                        </p>
                        <Image
                            src="/assets/reports/r2-1.png"
                            alt="Digital Transformation in Trade"
                            className="mb-4 w-full object-cover rounded"
                            width={800}
                            height={600}
                        />
                    </section>


                    {/* ACCELERATED ENFORCEMENT SECTION */}
                    <section className="mb-12">
                        <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight mb-4">
                            Accelerated Enforcement Yields Eye-Popping Numbers
                        </h2>
                        <p className="mb-4">
                            In the last year, customs authorities worldwide have drastically ramped up detentions of goods suspected
                            of forced labor involvement. For instance, across one major enforcement region:
                        </p>
                        <ul className="list-disc ml-6 mb-4">
                            <li>
                                <strong>Shipment Detentions Jumped by 25%:</strong> A year-over-year surge in the number of containers
                                held for forced labor screening.
                            </li>
                            <li>
                                <strong>Over 12,000 Shipments Subject to Extra Scrutiny:</strong> Upping last year’s figure by the
                                thousands, signaling an aggressive new posture.
                            </li>
                            <li>
                                <strong>Billions in Potentially Blocked Inventory:</strong> A widely cited estimate put the combined
                                value of detained or refused shipments at over $1.5 billion in just one region’s jurisdiction—up from
                                under $1 billion the prior year.
                            </li>
                        </ul>
                        <p className="mb-4">
                            Meanwhile, multiple trade law firms have reported that enforcement agencies are expanding their lens
                            beyond obviously high-risk regions. Everything from specialized electronics components to small automotive
                            parts is being flagged if there’s any uncertainty about sub-tier suppliers. In some months, as many as
                            40% of these detained shipments have been lower-dollar-value goods that historically might have flown under
                            the radar.
                        </p>
                        <p>
                            <strong>Why the shift to smaller inputs?</strong> It’s an acknowledgment that forced labor can lurk deeper
                            in the supply chain—such as in mining raw metals or processing intermediate components. Many manufacturers
                            aren’t fully aware of all upstream sources, and that ignorance has become a liability.
                        </p>
                    </section>

                    <div
                        className={`transition-all duration-300 ${hasAccess ? "" : "blur-sm pointer-events-none select-none"
                            }`}
                    >

                        {/* GLOBAL REGULATORY ALIGNMENT SECTION */}
                        <section className="mb-12">
                            <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight mb-4">
                                Global Regulatory Alignment: Key Sparks Driving Urgency
                            </h2>
                            <p className="mb-4">
                                Several game-changing regulations and policies have launched in the past 12 months, creating a more
                                coordinated global crackdown on forced labor:
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Legally Binding Import Bans</h3>
                            <p className="mb-4">
                                More countries are enacting explicit bans on imports tied to forced labor—modeled after an influential
                                North American law that has already resulted in over $1.7 billion worth of product detentions. The EU also
                                approved new legislation that outright prohibits products made with forced labor anywhere in the world,
                                intensifying demands for proof of ethical sourcing.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Corporate Sustainability Legislation</h3>
                            <p className="mb-4">
                                Key markets have introduced sweeping due diligence acts, mandating that large corporations monitor and
                                report on labor conditions across their entire supply chain. In some cases, non-compliance triggers
                                multi-million-dollar fines or potential exclusion from bidding on government contracts.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Cross-Border Cooperation Among Regulators</h3>
                            <p className="mb-4">
                                Enforcement agencies are increasingly sharing data and best practices. A manufacturer flagged for forced
                                labor in one country can see its shipments detained elsewhere. The risk of multi-jurisdictional scrutiny
                                is a wake-up call that no single market can be neglected.
                            </p>
                        </section>

                        {/* FINANCIAL & REPUTATIONAL FALLOUT SECTION */}
                        <section className="mb-12">
                            <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight mb-4">
                                The Financial and Reputational Fallout for Non-Compliance
                            </h2>
                            <p className="mb-4">
                                From a CFO’s perspective, few risks are as disruptive as having high-value inventory seized at port.
                                Beyond potential detention fees and re-routing expenses, there are hidden costs:
                            </p>
                            <ul className="list-disc ml-6 mb-4">
                                <li>
                                    <strong>Delayed Production Timelines:</strong> Components stuck in customs can idle factories, triggering
                                    customer dissatisfaction and lost revenue.
                                </li>
                                <li>
                                    <strong>Legal Defense and Investigations:</strong> Companies are forced to spend heavily on law firms,
                                    forensic auditors, and compliance specialists to gather exculpatory evidence.
                                </li>
                                <li>
                                    <strong>Reputational Damage:</strong> In an era of heightened public awareness around ethical sourcing,
                                    even a single forced labor controversy can spark social media backlash, hamper investor confidence, and
                                    push top talent away.
                                </li>
                            </ul>
                            <p className="mb-4">
                                In the last 12 months, several widely publicized enforcement actions have led to half a dozen well-known
                                brands paying settlement amounts north of $20 million each—purely for compliance lapses. Studies from
                                industry groups suggest that these headline-making fines only scratch the surface, as many other companies
                                face “silent” losses from shipments they must recall or destroy.
                            </p>
                            <Image
                            src="/assets/reports/r2-2.png"
                            alt="Digital Transformation in Trade"
                            className="mb-4 w-full object-cover rounded"
                            width={800}
                            height={600}
                        />
                        </section>

                        {/* COMPLEXITY & MULTI-TIER SUPPLY CHAIN SECTION */}
                        <section className="mb-12">
                            <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight mb-4">
                                Why Complexity Has Exploded: The Multi-Tier Supply Chain Problem
                            </h2>
                            <p className="mb-4">
                                If you’re manufacturing or distributing anything with multiple input materials—from textiles and minerals
                                to microchips—your supply chain likely spans a dizzying array of vendors. In some industries, it’s not
                                uncommon for a single final product to have:
                            </p>
                            <ul className="list-disc ml-6 mb-4">
                                <li>200–300 Tier-1 Suppliers (direct supply relationships)</li>
                                <li>1000+ Tier-2 Suppliers (the vendors of your vendors)</li>
                                <li>Countless “invisible” Tier-3 or Tier-4 Suppliers (where forced labor has historically been hardest to detect)</li>
                            </ul>
                            <p className="mb-4">
                                A large portion of forced labor scrutiny focuses on these “deeper” tiers. Traditional compliance methods—like
                                supplier questionnaires or sporadic audits—often fail to uncover hidden subcontractors using problematic
                                labor sources. As laws tighten, this complexity becomes an existential challenge for global manufacturers:
                            </p>
                            <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
                                “We’re no longer just verifying who we buy from; we have to vet who our suppliers buy from, and so on,
                                all the way down,” a compliance director at a Fortune 500 industrials firm recently lamented in an
                                industry panel discussion.
                            </blockquote>

                            <Image
                            src="/assets/reports/r2-3.png"
                            alt="Digital Transformation in Trade"
                            className="mb-4 w-full object-cover rounded"
                            width={800}
                            height={600}
                        />
                        </section>

                        {/* RISE OF SPECIALIZED COMPLIANCE TECH SECTION */}
                        <section className="mb-12">
                            <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight mb-4">
                                The Rise of Specialized Compliance Technology
                            </h2>
                            <p className="mb-4">
                                Enterprises are realizing that manual processes or generic compliance software can’t handle the explosive
                                complexity of forced labor due diligence. As a result, advanced trade compliance solutions—particularly
                                those tailored to industry-specific workflows—are in higher demand than ever. Some of the core capabilities
                                these cutting-edge platforms provide include:
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Automated Supply Chain Mapping</h3>
                            <p className="mb-4">
                                Leveraging AI-driven data ingestion to create visual “maps” of a product’s supply network, surfacing
                                sub-tier relationships that might otherwise remain hidden.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Real-Time Risk Scoring</h3>
                            <p className="mb-4">
                                Integrating watchlists, government advisories, and news feeds, so that whenever a high-risk supplier or
                                region is flagged, compliance teams receive immediate alerts.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Document Aggregation and Audit Trails</h3>
                            <p className="mb-4">
                                Collecting relevant factory audits, worker certification forms, and shipping documents in a single
                                repository. The best platforms do more than store records—they cross-verify them for inconsistencies.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Multi-Jurisdictional Regulations Engine</h3>
                            <p className="mb-4">
                                Interpreting varied forced labor laws across multiple markets automatically, so users can confidently
                                ship to the U.S., EU, Canada, and beyond without inadvertently violating a local statute.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Scalable Reporting</h3>
                            <p className="mb-4">
                                Generating robust due diligence reports that meet or exceed new legislation’s disclosure
                                requirements—often crucial for demonstrating “good faith” to regulators.
                            </p>
                            <p>
                                For CFOs evaluating the ROI, these features are proving their worth not just in avoided fines but in
                                preventing crippling supply chain disruptions. Companies with robust traceability are better positioned
                                to maintain production continuity, even if a particular supplier is blacklisted or regionally banned.
                            </p>
                            <Image
                            src="/assets/reports/r2-4.png"
                            alt="Digital Transformation in Trade"
                            className="mb-4 w-full object-cover rounded"
                            width={800}
                            height={600}
                        />
                        </section>
                    </div>
                </div>

                {/* FULL-PAGE BLUR + SIGNUP MODAL OVERLAY */}
                {showSignup && !hasAccess && (
                    <div className="fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center p-4">
                        <div className="bg-background w-full max-w-md rounded-lg p-6 relative shadow-lg border">
                            {/* Optional close button (if you want to allow user to dismiss) */}
                            <button
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
                                onClick={() => setShowSignup(false)}
                            >
                                {/* e.g. an X icon or text */}
                            </button>
                            <h2 className="text-2xl font-semibold mb-4 text-center">
                                Continue reading for free
                            </h2>
                            <SignupForm onSuccess={handleSignupSuccess} ctaText="Unlock Report" />
                        </div>
                    </div>
                )}

                {/* Back to Home Button */}
                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" onClick={() => router.push("/")}>
                        Back to Home
                    </Button>
                </div>
            </main >
            {/* Footer */}
            <footer className="bg-background text-foreground py-8 border-t border-border/40">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-8 md:px-12 lg:px-24 xl:px-40">
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="hover:text-primary">
                            Home
                        </Link>
                        <Link href="/features" className="hover:text-primary">
                            Features
                        </Link>
                        <Link href="/roi-calculator" className="hover:text-primary">
                            ROI Calculator
                        </Link>
                        <Link href="/#why-compliance" className="hover:text-primary">
                            Why Compliance?
                        </Link>
                        <Link href="mailto:velocitycomplianceofficial@gmail.com" className="hover:text-primary">
                            Contact Us
                        </Link>
                        <Link href="/privacy" className="hover:text-primary text-xs mt-8 dark:text-zinc-600">
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between h-auto">
                        <div className="text-lg font-semibold text-primary">VelocityCompliance</div>
                        <div className="text-sm mt-6 lg:mt-auto">
                            © 2025. Designed in Sweden, for the world 🌍.
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
