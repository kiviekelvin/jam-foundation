"use client";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";;
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, FileCheck, Heart } from "lucide-react";

// ─── PAYSTACK CONFIG ───────────────────────────────────────────────────────────
// Replace these before going live
const PAYSTACK_PUBLIC_KEY = "pk_live_REPLACE_WITH_YOUR_PAYSTACK_PUBLIC_KEY";
const DONATION_EMAIL = "donations@jamfafrica.org";

// Create these plans in your Paystack Dashboard → Products → Plans
// then paste each plan_code here
const PAYSTACK_MONTHLY_PLANS: Record<number, string> = {
  20:  "PLN_REPLACE_20_MONTHLY",
  50:  "PLN_REPLACE_50_MONTHLY",
  100: "PLN_REPLACE_100_MONTHLY",
  200: "PLN_REPLACE_200_MONTHLY",
};
// ──────────────────────────────────────────────────────────────────────────────

const oneTimeTiers = [
  { amount: 25,   desc: "Keeps one girl in school for a month",        accent: "bg-jam-sage",   accentText: "text-jam-sage" },
  { amount: 50,   desc: "Emergency nutrition for one child",            accent: "bg-jam-orange", accentText: "text-jam-orange" },
  { amount: 100,  desc: "Greenhouse inputs and seeds for a family",     accent: "bg-jam-purple", accentText: "text-jam-purple" },
  { amount: 250,  desc: "Solar drying equipment for farmers",           accent: "bg-jam-clay",   accentText: "text-jam-clay" },
  { amount: 500,  desc: "Community nutrition outreach program",         accent: "bg-jam-sage",   accentText: "text-jam-sage" },
  { amount: 1200, desc: "One full greenhouse for a displaced family",   accent: "bg-jam-orange", accentText: "text-jam-orange" },
];

const monthlyTiers = [
  { amount: 20,  desc: "Sustains education or nutrition for one person every month",           accent: "bg-jam-sage",   accentText: "text-jam-sage",   label: "Sustainer" },
  { amount: 50,  desc: "Stabilizes a family through food, schooling, or income support",       accent: "bg-jam-orange", accentText: "text-jam-orange", label: "Stabilizer" },
  { amount: 100, desc: "Powers long-term recovery programs for displaced families and youth",  accent: "bg-jam-purple", accentText: "text-jam-purple", label: "Rebuilder" },
  { amount: 200, desc: "Supports community-level solutions that restore dignity at scale",     accent: "bg-jam-clay",   accentText: "text-jam-clay",   label: "Transformer" },
];

const trustSignals = [
  { icon: Shield,    label: "CAC Registered Nonprofit", sub: "Nigeria · CAC/IT/9202984" },
  { icon: FileCheck, label: "72% Goes to Programs",     sub: "Directly to communities" },
  { icon: Heart,     label: "Official Receipts Issued", sub: "For every donation" },
];

// ─── PAYSTACK TYPE DECLARATION ─────────────────────────────────────────────────
interface PaystackConfig {
  key: string;
  email: string;
  amount: number;
  currency?: string;
  plan?: string;
  metadata?: Record<string, unknown>;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
}

declare global {
  interface Window {
    PaystackPop: {
      setup(config: PaystackConfig): { openIframe(): void };
    };
  }
}
// ──────────────────────────────────────────────────────────────────────────────

const Donate = () => {
  const searchParams = useSearchParams();
  const projectContext = searchParams.get("project"); // e.g. "Clean Water Initiative"

  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tiers = isMonthly ? monthlyTiers : oneTimeTiers;

  // Reset selected amount when switching modes
  const switchMode = (monthly: boolean) => {
    setIsMonthly(monthly);
    setSelectedAmount(monthly ? 20 : 50);
    setCustomAmount("");
    setError("");
  };

  const finalAmount = customAmount
    ? parseFloat(customAmount)
    : selectedAmount ?? 0;

  const selectedTier = tiers.find((t) => t.amount === selectedAmount);

  const handleDonate = () => {
    if (!donorEmail) { setError("Please enter your email address."); return; }
    if (!finalAmount || finalAmount < 1) { setError("Please select or enter a valid donation amount."); return; }
    if (isMonthly && !selectedAmount) { setError("Please select a monthly giving tier."); return; }

    // Guard: Paystack script not loaded yet
    if (!window.PaystackPop) {
      setError("Payment system is still loading. Please try again in a moment.");
      return;
    }

    setError("");
    setLoading(true);

    const paystackConfig: PaystackConfig = {
      key: PAYSTACK_PUBLIC_KEY,
      email: donorEmail,
      amount: Math.round(finalAmount * 100),
      currency: "USD",
      metadata: {
        custom_fields: [
          { display_name: "Donor Name",   variable_name: "donor_name",   value: donorName || "Anonymous" },
          { display_name: "Giving Type",  variable_name: "giving_type",  value: isMonthly ? "Monthly" : "One-time" },
          { display_name: "Amount (USD)", variable_name: "amount_usd",   value: `$${finalAmount}` },
          { display_name: "Project",      variable_name: "project",      value: projectContext ?? "General" },
        ],
      },
      callback: (response: { reference: string }) => {
        setLoading(false);
        window.location.href = `/thank-you?ref=${response.reference}&type=${isMonthly ? "monthly" : "once"}`;
      },
      onClose: () => setLoading(false),
    };

    // Add plan code for monthly giving if available
    if (isMonthly && selectedAmount && PAYSTACK_MONTHLY_PLANS[selectedAmount]) {
      paystackConfig.plan = PAYSTACK_MONTHLY_PLANS[selectedAmount];
    }

    const handler = window.PaystackPop.setup(paystackConfig);
    handler.openIframe();
  };

  return (
    <Layout>
      <PageHero
        title="Make a Donation"
        subtitle="Your donation creates real, measurable change in the lives of vulnerable communities."
        accent="sage"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Trust signals */}
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-4 mb-16">
              {trustSignals.map((t) => (
                <div key={t.label} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="h-10 w-10 bg-jam-sage/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <t.icon className="h-5 w-5 text-jam-sage" />
                  </div>
                  <p className="font-bold text-foreground text-sm">{t.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left — toggle + amount picker */}
            <AnimatedSection delay={0.05}>
              <div>
                {/* One-time / Monthly toggle */}
                <div className="flex rounded-xl border border-border overflow-hidden mb-8">
                  <button
                    onClick={() => switchMode(false)}
                    className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${
                      !isMonthly ? "bg-jam-sage text-white" : "bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Give Once
                  </button>
                  <button
                    onClick={() => switchMode(true)}
                    className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${
                      isMonthly ? "bg-jam-sage text-white" : "bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Give Monthly
                  </button>
                </div>

                {isMonthly && (
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed bg-jam-sage/10 rounded-lg px-4 py-3">
                    <span className="font-semibold text-jam-sage">JAM Circle members</span> give monthly and receive field updates, impact stories, and founder messages. Cancel anytime.
                  </p>
                )}

                <h2 className="text-base font-bold text-foreground mb-4">
                  {isMonthly ? "Choose Your Monthly Impact" : "What Your Donation Does"}
                </h2>

                <div className={`grid gap-3 mb-6 ${isMonthly ? "grid-cols-2" : "grid-cols-2"}`}>
                  {tiers.map((tier) => {
                    const isSelected = selectedAmount === tier.amount && !customAmount;
                    return (
                      <button
                        key={tier.amount}
                        onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(""); }}
                        className={`rounded-xl p-4 text-left border-2 transition-all duration-200 ${
                          isSelected
                            ? `${tier.accent} border-transparent`
                            : "bg-card border-border hover:border-jam-sage/40"
                        }`}
                      >
                        <p className={`text-xl font-extrabold ${isSelected ? "text-white" : "text-foreground"}`}>
                          ${tier.amount}
                          {isMonthly && <span className={`text-xs font-medium ml-1 ${isSelected ? "text-white/70" : "text-muted-foreground"}`}>/mo</span>}
                        </p>
                        {"label" in tier && (
                          <p className={`text-xs font-bold uppercase tracking-wide mt-0.5 ${isSelected ? "text-white/80" : tier.accentText}`}>
                            {(tier as typeof monthlyTiers[0]).label}
                          </p>
                        )}
                        <p className={`text-xs mt-1 leading-snug ${isSelected ? "text-white/80" : "text-muted-foreground"}`}>
                          {tier.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Custom amount — one-time only */}
                {!isMonthly && (
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Right — donor details + pay */}
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Your Details</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Your receipt will be sent here.</p>
                  </div>
                </div>

                {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

                {/* Summary */}
                {finalAmount > 0 && (
                  <div className="bg-muted rounded-xl p-4 mb-6">

                    {/* Project context banner */}
                    {projectContext && (
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                        <Heart className="h-3.5 w-3.5 text-jam-sage shrink-0" />
                        <p className="text-xs font-semibold text-jam-sage">
                          Supporting: {projectContext}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-muted-foreground">
                        {isMonthly ? "Monthly donation" : "One-time donation"}
                      </p>
                      <p className="text-lg font-extrabold text-foreground">
                        ${finalAmount}{isMonthly && <span className="text-sm font-medium text-muted-foreground">/mo</span>}
                      </p>
                    </div>
                    {selectedTier && (
                      <p className="text-xs text-muted-foreground">{selectedTier.desc}</p>
                    )}
                    {isMonthly && (
                      <p className="text-xs text-jam-sage font-semibold mt-2">✓ You'll be joining the JAM Circle</p>
                    )}
                  </div>
                )}

                <button
                  onClick={handleDonate}
                  disabled={loading || !finalAmount}
                  className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Opening payment..."
                    : isMonthly
                    ? `Give $${finalAmount || "..."}/month`
                    : `Donate $${finalAmount || "..."}`}
                </button>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  Secured by Paystack · Official receipt sent by email{isMonthly ? " · Cancel anytime" : ""}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* JAM Circle upsell — only show on one-time tab */}
          {!isMonthly && (
            <AnimatedSection delay={0.15}>
              <div className="mt-16 bg-jam-charcoal rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Prefer lasting impact?</p>
                  <h3 className="text-xl font-bold text-white mb-1">Join the JAM Circle</h3>
                  <p className="text-white/60 text-sm max-w-md leading-relaxed">
                    Monthly giving from $20/month lets us plan better, respond faster, and walk alongside families as they rebuild — month after month.
                  </p>
                </div>
                <button
                  onClick={() => switchMode(true)}
                  className="btn-primary shrink-0"
                >
                  Switch to Monthly →
                </button>
              </div>
            </AnimatedSection>
          )}

          {/* Transparency link */}
          <AnimatedSection>
            <p className="text-center text-xs text-muted-foreground mt-10">
              Wondering how we use funds?{" "}
              <Link href="/financial-transparency" className="text-jam-sage font-semibold hover:underline underline-offset-4">
                View our Financial Transparency page →
              </Link>
            </p>
          </AnimatedSection>

        </div>
      </section>
    </Layout>
  );
};

export default Donate;