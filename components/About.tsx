"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  { title: "Listening to Communities", desc: "We start by understanding the real needs of the people we serve through field assessments, direct conversations with displaced families, youth, and mothers, and collaboration with local leaders.", num: "01", color: "bg-jam-sage" },
  { title: "Evidence-Based Program Design", desc: "All JAM Foundation programs are built on proven methods: climate-smart agriculture, life skills training, vocational empowerment, and nutrition interventions.", num: "02", color: "bg-jam-orange" },
  { title: "Implementation With Accountability", desc: "We combine hands-on support with strong governance, on-site monitoring by trained staff, use of local partners, and clear tracking of inputs, outputs, and outcomes.", num: "03", color: "bg-jam-purple" },
  { title: "Measuring & Sharing Impact", desc: "We track metrics like children in school, mothers earning income, food preserved, and lives saved. We document real stories from the field to show human impact.", num: "04", color: "bg-jam-clay" },
  { title: "Sustainability & Community Ownership", desc: "We design programs to empower, not create dependency. Training and resources go directly to participants. Community leaders are involved in planning.", num: "05", color: "bg-jam-sage" },
  { title: "Continuous Learning", desc: "We collect feedback from beneficiaries, analyze successes and challenges, and adjust programs to improve efficiency and effectiveness.", num: "06", color: "bg-jam-orange" },
];

const About = () => (
  <Layout>
    <PageHero
      title="Our Approach"
      subtitle={`"We don't just give handouts. We build futures, restore dignity, and empower communities."`}
      accent="sage"
    />

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <p className="text-lg text-muted-foreground mb-16 leading-relaxed">
            At JAM Foundation, we believe that impact is not accidental, it's intentional. Every program is designed to ensure that your donation creates meaningful, measurable, and lasting change.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {steps.map((item, i) => (
            <AnimatedSection key={item.num} delay={i * 0.08}>
              <div className="flex gap-0 items-stretch rounded-lg overflow-hidden border border-border group card-hover">
                <div className={`${item.color} w-20 shrink-0 flex items-center justify-center`}>
                  <span className="text-2xl font-extrabold text-primary-foreground">{item.num}</span>
                </div>
                <div className="p-6 flex-1">
                  <h2 className="text-lg font-bold text-foreground mb-1">{item.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-4 mt-12">
            <Link href="/donate" className="btn-primary">Donate Now</Link>
            <Link href="/jam-circle" className="btn-outline">Join the JAM Circle</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* 3-Phase Approach */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-jam-sage mb-2 font-bold">Our Model</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">How We Create Lasting Change</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            JAM Foundation combines three phases of intervention to ensure that support today leads to stability tomorrow.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              phase: "Phase 1",
              title: "Immediate Response",
              desc: "Nutrition, education access, and emergency relief to stabilize lives in crisis.",
              color: "bg-jam-clay",
            },
            {
              phase: "Phase 2",
              title: "Recovery",
              desc: "Skills training, farming support, and income restoration to rebuild livelihoods.",
              color: "bg-jam-orange",
            },
            {
              phase: "Phase 3",
              title: "Resilience",
              desc: "Climate-smart systems, community ownership, and sustainable solutions for long-term independence.",
              color: "bg-jam-sage",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.phase} delay={i * 0.1}>
              <div className={`${item.color} rounded-lg p-8 h-full flex flex-col`}>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-2">{item.phase}</span>
                <h3 className="text-xl font-extrabold text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/85 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Where We Work */}
    <section className="py-20 md:py-28 section-charcoal">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-jam-sage mb-2 font-bold">Where We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">On the Ground, Where It Matters</h2>
          <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8">
            We currently focus on <strong className="text-primary-foreground">underserved, rural, and conflict-affected communities in Nigeria</strong>, with plans to scale across Africa as partnerships and funding grow.
          </p>
          <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground hover:text-jam-charcoal transition-all duration-200">
            Explore Our Projects
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default About;
