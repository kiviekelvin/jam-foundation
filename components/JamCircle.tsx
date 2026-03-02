"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, ArrowRight, Mail, BarChart2, Users } from "lucide-react";

const tiers = [
  {
    amount: "$20",
    period: "/month",
    label: "Sustainer",
    desc: "Helps sustain education, nutrition, or skills support for one vulnerable person every month.",
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
    accentLight: "bg-jam-sage/10",
    accentBorder: "border-jam-sage",
  },
  {
    amount: "$50",
    period: "/month",
    label: "Stabilizer",
    desc: "Helps stabilize a family through food, schooling, or income support every month.",
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
    accentLight: "bg-jam-orange/10",
    accentBorder: "border-jam-orange",
    featured: true,
  },
  {
    amount: "$100",
    period: "/month",
    label: "Rebuilder",
    desc: "Powers long-term recovery programs for displaced families, women, and youth.",
    accent: "bg-jam-purple",
    accentText: "text-jam-purple",
    accentLight: "bg-jam-purple/10",
    accentBorder: "border-jam-purple",
  },
  {
    amount: "$200",
    period: "/month",
    label: "Transformer",
    desc: "Supports community-level solutions that restore dignity and independence at scale.",
    accent: "bg-jam-clay",
    accentText: "text-jam-clay",
    accentLight: "bg-jam-clay/10",
    accentBorder: "border-jam-clay",
  },
];

const perks = [
  {
    icon: Mail,
    title: "Monthly Field Updates",
    desc: "Stories and honest progress reports from the communities you're supporting.",
  },
  {
    icon: BarChart2,
    title: "Impact Transparency",
    desc: "See exactly how your giving is being used — successes and challenges included.",
  },
  {
    icon: Users,
    title: "Founder Access",
    desc: "Occasional personal messages from Ahante Princess and the project teams.",
  },
  {
    icon: Heart,
    title: "Inner Circle Status",
    desc: "Become a trusted long-term partner in transformation — not a one-time donor.",
  },
];

const JamCircle = () => (
  <Layout>
    <PageHero
      title="The JAM Circle"
      subtitle="Monthly Partners Restoring Lives, Dignity & Opportunity in Nigeria"
      accent="sage"
    />

    {/* Emotional hook */}
    <div className="bg-jam-charcoal border-b border-white/10">
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Why monthly giving matters</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-5">
          Real change doesn't happen in a moment.<br />
          <span className="text-jam-sage">It happens month after month.</span>
        </h2>
        <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
          The communities we serve don't just need help once. They need reliable support they can count on — steady enough to plan around, consistent enough to build on. That's what JAM Circle members provide.
        </p>
      </div>
    </div>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* What monthly giving enables */}
        <AnimatedSection>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-20">
            <h3 className="text-lg font-bold text-foreground mb-6">Your monthly commitment allows JAM Foundation to:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Sustain education for vulnerable children without interruption",
                "Provide consistent nutrition for at-risk families",
                "Support women and youth as they rebuild livelihoods",
                "Plan programs without waiting for emergencies to fundraise",
                "Reduce dependency on crisis-driven giving",
                "Respond faster when communities need urgent help",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-jam-sage shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tiers */}
        <AnimatedSection delay={0.05}>
          <h2 className="text-2xl font-bold text-foreground mb-3">Choose Your Level of Impact</h2>
          <p className="text-muted-foreground mb-10 text-sm">Every amount matters. Pick what works for you — you can always change it later.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.amount} delay={i * 0.07}>
                <div className={`relative bg-card border-2 ${tier.featured ? tier.accentBorder : "border-border"} rounded-2xl p-7 h-full flex flex-col`}>
                  {tier.featured && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${tier.accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      Most Popular
                    </span>
                  )}
                  <div className={`h-10 w-10 ${tier.accentLight} rounded-xl flex items-center justify-center mb-5`}>
                    <span className={`text-sm font-extrabold ${tier.accentText}`}>{tier.label[0]}</span>
                  </div>
                  <p className={`text-3xl font-extrabold ${tier.accentText} leading-none`}>
                    {tier.amount}
                    <span className="text-base font-medium text-muted-foreground">{tier.period}</span>
                  </p>
                  <p className={`text-sm font-bold mt-1 mb-4 ${tier.accentText}`}>{tier.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{tier.desc}</p>
                  <Link
                    href="/donate"
                    className={`mt-6 w-full text-center py-2.5 rounded-lg text-sm font-semibold border-2 ${tier.accentBorder} ${tier.accentText} hover:${tier.accent} hover:text-white transition-all duration-200`}
                  >
                    Join as {tier.label}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Perks */}
        <AnimatedSection delay={0.05}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-3">This Is Not Charity. It's Partnership.</h2>
            <p className="text-muted-foreground text-sm mb-10">JAM Circle members are not distant donors — they are partners in transformation. Here's what you receive:</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {perks.map((perk, i) => (
                <AnimatedSection key={perk.title} delay={i * 0.07}>
                  <div className="flex gap-4 bg-muted border border-border rounded-xl p-6">
                    <div className="h-10 w-10 bg-jam-sage/15 rounded-lg flex items-center justify-center shrink-0">
                      <perk.icon className="h-5 w-5 text-jam-sage" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{perk.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Closing commitment */}
        <AnimatedSection>
          <div className="bg-jam-charcoal rounded-2xl p-10 md:p-14 text-center">
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">A quiet commitment that changes lives</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5 leading-snug max-w-xl mx-auto">
              You may never meet the child who returns to school.<br />
              <span className="text-jam-sage">But your support will be there every step of the way.</span>
            </h3>
            <p className="text-white/50 text-sm mb-10 max-w-md mx-auto">
              That consistency is what changes lives. Join the JAM Circle today and help restore dignity, opportunity, and hope — month after month.
            </p>
            <Link href="/donate" className="btn-primary text-base px-10 py-4 group inline-flex items-center gap-2">
              Join the JAM Circle
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-white/30 mt-4">Takes less than a minute · Cancel anytime</p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default JamCircle;