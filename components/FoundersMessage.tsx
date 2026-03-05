"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const FoundersMessage = () => (
  <Layout>
    {/* Split Hero */}
    <section className="min-h-[60vh] grid md:grid-cols-2">
      {/* Left — text */}
      <div className="bg-jam-charcoal flex items-end">
        <div className="px-8 md:px-16 py-16">
          <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">A Message from the Founder</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            People didn't want handouts.<br />
            <span className="text-jam-purple">They wanted a chance.</span>
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <div>
              <p className="text-white font-bold text-base">Ahante Princess</p>
              <p className="text-white/50 text-sm">CEO & Founder, JAM Foundation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right — founder photo */}
      <div className="relative min-h-[400px] md:min-h-full">
        <img
          src="/images/founder.png"
          alt="Ahante Princess — CEO & Founder, JAM Foundation"
          className="absolute inset-0 w-full h-full object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jam-charcoal/40 to-transparent" />
      </div>
    </section>

    {/* Body */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Intro */}
        <AnimatedSection>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            JAM Foundation was born from years of working closely with communities affected by poverty, displacement, and crisis—and seeing firsthand how much potential is wasted when people lack opportunity, not ability.
          </p>
        </AnimatedSection>

        {/* Anaphora block */}
        <AnimatedSection delay={0.1}>
          <div className="border-l-4 border-jam-purple pl-6 space-y-5 mb-12">
            {[
              "I have met girls who wanted nothing more than to stay in school, but were forced to drop out because survival came first.",
              "I have met mothers who were not lazy or dependent, but trapped by circumstances beyond their control.",
              "I have met farmers who lost their land—not their skills—due to conflict and climate change.",
            ].map((line) => (
              <p key={line} className="text-foreground text-lg leading-relaxed">
                <span className="font-bold text-jam-purple">I have met </span>
                {line.replace("I have met ", "")}
              </p>
            ))}
          </div>
        </AnimatedSection>

        {/* Pull quote */}
        <AnimatedSection delay={0.2}>
          <div className="relative my-14 bg-jam-charcoal rounded-2xl p-10 overflow-hidden">
            <span className="absolute -top-4 -left-2 text-[120px] leading-none text-white/5 font-serif select-none">"</span>
            <p className="relative text-white font-bold text-xl md:text-2xl leading-snug">
              What struck me most was this: People did not want handouts. They wanted a chance.
            </p>
          </div>
        </AnimatedSection>

        {/* Rest of message */}
        <AnimatedSection delay={0.25}>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>JAM Foundation exists to provide that chance.</p>
            <p>We believe that true impact is not measured by how much aid is distributed, but by how many lives are rebuilt with dignity, skills, and resilience. That belief guides every program we run—from keeping girls in school, to restoring livelihoods through climate-smart farming, to saving children from malnutrition.</p>
            <p>This work is not easy. The challenges are complex. But the people we serve are resilient, hopeful, and determined—and they deserve solutions that match their strength.</p>
            <p>Thank you for believing in this mission. Thank you for choosing impact over indifference. And thank you for being part of a future where vulnerability is not a life sentence.</p>
          </div>
        </AnimatedSection>

        {/* Closing signature */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 pt-8 border-t border-border flex items-center gap-5">
            <img
              src="/images/founder.png"
              alt="Ahante Princess"
              className="h-14 w-14 rounded-full object-cover object-top shrink-0"
            />
            <div>
              <p className="text-foreground font-bold text-lg leading-tight">Together, we are rebuilding lives—one community at a time.</p>
              <p className="text-muted-foreground text-sm mt-1">— Ahante Princess, CEO & Founder, JAM Foundation</p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.35}>
          <div className="flex flex-wrap gap-4 mt-12">
            <Link href="/donate" className="btn-primary">Donate Now</Link>
            <Link href="/projects" className="btn-outline">Explore Our Projects</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default FoundersMessage;