"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Sprout, MapPin, Leaf, Shield, BarChart2 } from "lucide-react";

const reasons = [
  {
    icon: Sprout,
    number: "01",
    title: "We Focus on Solutions, Not Symptoms",
    desc: "Education that keeps girls in school long-term. Skills that lead to income, not dependency. Climate-smart farming that works without land. Nutrition programs that save lives and prevent future hunger.",
    proof: "72% of every dollar goes directly to programs",
    accent: "text-jam-sage",
    accentLight: "bg-jam-sage/10",
    accentBorder: "border-jam-sage",
  },
  {
    icon: MapPin,
    number: "02",
    title: "We Work Where the Need Is Greatest",
    desc: "Our programs focus on conflict-affected communities, displaced families, and underserved rural areas; places often overlooked yet most in need of sustained support.",
    proof: "Active across multiple states in Nigeria",
    accent: "text-jam-orange",
    accentLight: "bg-jam-orange/10",
    accentBorder: "border-jam-orange",
  },
  {
    icon: Leaf,
    number: "03",
    title: "We Combine Climate Action with Human Survival",
    desc: "Greenhouse farming, solar food preservation, and food security programs. We address climate impact where it hurts most; in the food, income, and survival of real families.",
    proof: "Up to 40% reduction in post-harvest food loss",
    accent: "text-jam-purple",
    accentLight: "bg-jam-purple/10",
    accentBorder: "border-jam-purple",
  },
  {
    icon: Shield,
    number: "04",
    title: "We Center Dignity and Independence",
    desc: "We invest in skills, knowledge, ownership, and self-reliance. Our goal is to help people stand on their own, not depend on aid forever.",
    proof: "Income-generating outcomes tracked for every program",
    accent: "text-jam-clay",
    accentLight: "bg-jam-clay/10",
    accentBorder: "border-jam-clay",
  },
  {
    icon: BarChart2,
    number: "05",
    title: "We Are Transparent and Accountable",
    desc: "Clear program goals, honest reporting, and responsible use of funds. When you give to JAM Foundation, you know where your money goes and why it matters.",
    proof: "Annual reports + monthly donor updates",
    accent: "text-jam-sage",
    accentLight: "bg-jam-sage/10",
    accentBorder: "border-jam-sage",
  },
];

const dollarImpacts = [
  { amount: "$25", label: "keeps one girl in school for a month", program: "Her Future Fund", accent: "text-jam-sage", bg: "bg-jam-sage" },
  { amount: "$50", label: "provides emergency nutrition for one child", program: "Nourish to Survive", accent: "text-jam-orange", bg: "bg-jam-orange" },
  { amount: "$75", label: "funds skills training for one mother", program: "Mothers Rising", accent: "text-jam-purple", bg: "bg-jam-purple" },
  { amount: "$100", label: "pays for greenhouse inputs and seeds", program: "Farm Without Land", accent: "text-jam-clay", bg: "bg-jam-clay" },
  { amount: "$300", label: "funds full education support for one girl", program: "Her Future Fund", accent: "text-jam-sage", bg: "bg-jam-sage" },
  { amount: "$1,200", label: "builds one full greenhouse for a family", program: "Farm Without Land", accent: "text-jam-purple", bg: "bg-jam-purple" },
];

const WhyDonate = () => (
  <Layout>
    <PageHero
      title="Why Donate to JAM Foundation?"
      subtitle="Your generosity deserves clarity, impact, and accountability."
      accent="orange"
    />

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Reasons */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-10">5 Reasons Donors Choose JAM Foundation</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 mb-24">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.07} className={i === 4 ? "md:col-span-2 md:max-w-xl" : ""}>
              <div className={`bg-card border-l-4 ${r.accentBorder} p-7 h-full flex flex-col`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`h-10 w-10 ${r.accentLight} rounded-lg flex items-center justify-center shrink-0`}>
                    <r.icon className={`h-5 w-5 ${r.accent}`} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest ${r.accent} mb-0.5`}>{r.number}</p>
                    <h3 className="font-bold text-foreground text-base leading-snug">{r.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{r.desc}</p>
                <div className={`${r.accentLight} rounded-lg px-4 py-2.5`}>
                  <p className={`text-xs font-semibold ${r.accent}`}>✓ {r.proof}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Your dollar has a job */}
        <AnimatedSection delay={0.05}>
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">Your Dollar Has a Job</h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">Every amount you give is tied to a real outcome. Here's what your donation actually does on the ground.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dollarImpacts.map((d, i) => (
                <AnimatedSection key={d.amount + d.label} delay={i * 0.06}>
                  <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className={`${d.bg} px-5 py-3`}>
                      <p className="text-white font-extrabold text-2xl">{d.amount}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-sm text-foreground font-medium leading-snug mb-1">{d.label}</p>
                      <p className={`text-xs font-semibold ${d.accent}`}>{d.program}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Closing */}
        <AnimatedSection>
          <div className="bg-jam-charcoal rounded-2xl p-10 md:p-14 text-center">
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Give with confidence</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
              Every donation is a vote of confidence<br />
              <span className="text-jam-orange">in people's ability to rebuild.</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you give $25 or $1,200, your support creates real, lasting change in the lives of children, mothers, farmers, and youth across Nigeria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="btn-primary text-base px-10 py-4">Donate Now</Link>
              <Link href="/impact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white hover:text-jam-charcoal transition-all duration-200">
                Explore Our Impact
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default WhyDonate;