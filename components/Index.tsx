"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Users, Sprout, ArrowRight, GraduationCap, Briefcase, Wheat, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import DifferenceCards from "@/components/DifferenceCards";
import StatCounter from "@/components/StatCounter";
const heroImage = "/hero-image.jpg";
const focusEducation = "/focus-education.jpg";
const focusEmpowerment = "/focus-empowerment.jpg";
const focusClimate = "/focus-climate.jpg";

const visionTabs = [
  {
    key: "education",
    label: "Education",
    color: "bg-jam-sage",
    image: focusEducation,
    title: "Education",
    description: "We keep vulnerable children especially girls in school and equip youth with the life skills they need to lead. Because education is the most powerful investment in a community's future.",
    link: "/projects",
  },
  {
    key: "empowerment",
    label: "Empowerment",
    color: "bg-jam-orange",
    image: focusEmpowerment,
    title: "Economic Empowerment",
    description: "We help women and youth rebuild livelihoods through vocational training, entrepreneurship support, and financial literacy, turning dependence into dignity and self-sufficiency.",
    link: "/projects",
  },
  {
    key: "climate",
    label: "Climate, Food & Health",
    color: "bg-jam-purple",
    image: focusClimate,
    title: "Climate Resilience, Food & Health",
    description: "From greenhouse farming to solar food preservation and emergency nutrition, we help communities adapt to climate shocks and feed their families year-round.",
    link: "/projects",
  },
];

const focusAreas = [
  {
    icon: BookOpen,
    title: "Education",
    description: "Keeping vulnerable children especially girls in school and equipping youth with life skills.",
    color: "bg-jam-sage",
    programs: ["Her Future Fund", "School Is Home Again", "Beyond School"],
  },
  {
    icon: Users,
    title: "Economic Empowerment",
    description: "Helping women and youth rebuild livelihoods through skills training and entrepreneurship.",
    color: "bg-jam-orange",
    programs: ["Mothers Rising", "Earn a Skill. Build a Life."],
  },
  {
    icon: Sprout,
    title: "Climate Resilience & Food Security",
    description: "Climate-smart farming, solar food preservation, and emergency nutrition programs.",
    color: "bg-jam-purple",
    programs: ["Farm Without Land", "Save the Harvest", "Nourish to Survive"],
  },
];

const impactStats = [
  { number: "8", label: "Active Programs" },
  { number: "3", label: "Focus Areas" },
  { number: "100", label: "Communities Targeted", suffix: "+" },
  { number: "72", label: "Budget to Programs", suffix: "%" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = visionTabs[activeTab];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="JAM Foundation community empowerment work in Nigeria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jam-charcoal/90 via-jam-charcoal/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-5 tracking-tight"
            >
              Building Resilient
              <span className="block text-jam-sage">Futures</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg text-primary-foreground/70 mb-10 leading-relaxed"
            >
              Empowering vulnerable children, women, and youth across Africa with education, skills, and climate-resilient solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/donate" className="btn-primary text-base px-8 py-4">
                Donate Now
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground hover:text-jam-charcoal transition-all duration-200 group"
              >
                Our Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Who We Are */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Who We Are</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              JAM Foundation is a nonprofit organization committed to building resilient futures for vulnerable communities across Africa, starting in Nigeria. We work at the intersection of education, economic empowerment, climate resilience, and child survival.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mb-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Why We Exist</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {[
                {
                  text: "Farmers lose their land to violence and climate shocks",
                  image: "/farmer.jpg",
                  alt: "Farmer in field",
                },
                {
                  text: "Children drop out of school because survival comes first",
                  image: "/school-children.jpg",
                  alt: "Children in school",
                },
                {
                  text: "Mothers are forced into dependency by circumstance",
                  image: "/mother-child.jpg",
                  alt: "Mother and child",
                },
                {
                  text: "Food is wasted while children suffer from malnutrition",
                  image: "/need-food.jpg",
                  alt: "Community food distribution",
                },
              ].map((card, i) => (
                <AnimatedSection key={card.text} delay={0.1 + i * 0.08}>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer">
                    {/* Background image */}
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient overlay — stronger at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Text at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white font-semibold text-base leading-snug drop-shadow">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <p className="mt-10 text-center text-foreground font-semibold text-sm">
              JAM Foundation exists to change this; with practical, long-lasting solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What Makes Us Different */}
      <DifferenceCards />

      {/* Our Mission */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-jam-sage mb-2 font-bold">Our Mission</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Why We Do What We Do</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To empower vulnerable children, women, and youth with the <strong className="text-foreground">education, skills, resources, and climate-resilient solutions</strong> they need to survive crises, rebuild livelihoods, and thrive with dignity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">Our Vision</h2>
            <p className="text-muted-foreground text-lg mb-10">A future where:</p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                { text: "Every child has access to education and proper nutrition", color: "bg-jam-sage", icon: GraduationCap },
                { text: "Women and youth earn sustainable incomes", color: "bg-jam-orange", icon: Briefcase },
                { text: "Farmers can produce food despite climate and conflict", color: "bg-jam-purple", icon: Wheat },
                { text: "Communities are resilient, not dependent", color: "bg-jam-clay", icon: Shield },
              ].map((item) => (
                <div key={item.text} className={`${item.color} rounded-lg p-6 relative overflow-hidden min-h-[120px] flex items-start`}>
                  <span className="text-primary-foreground font-semibold leading-relaxed relative z-10 pr-12">{item.text}</span>
                  <item.icon className="absolute bottom-3 right-3 h-10 w-10 text-primary-foreground/20" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 section-charcoal">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-jam-sage mb-2">Our Reach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">Impact at a Glance</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <StatCounter value={stat.number} label={stat.label} suffix={stat.suffix} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Create Change — Tabbed Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Our Focus Areas</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-hidden rounded-lg">
              {/* Tabs — scrollable on mobile, equal-width on desktop */}
              <div className="flex border-b border-border bg-muted overflow-x-auto scrollbar-none">
                {visionTabs.map((tab, i) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(i)}
                    className={`shrink-0 md:flex-1 px-5 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                      activeTab === i
                        ? `${tab.color} text-primary-foreground`
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content — stacks on mobile, side by side on md+ */}
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden h-56 md:h-auto md:min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active.key}
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </AnimatePresence>
                </div>

                {/* Text */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.key}
                    className={`${active.color} p-8 md:p-14 flex flex-col justify-center`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-3xl font-extrabold text-primary-foreground mb-4 tracking-tight">
                      {active.title}
                    </h3>
                    <p className="text-primary-foreground/85 leading-relaxed mb-8 text-sm md:text-base">
                      {active.description}
                    </p>
                    <Link
                      href={active.link}
                      className="inline-flex items-center gap-2 text-primary-foreground font-bold uppercase tracking-wider text-sm group w-fit"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-jam-sage">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 tracking-tight leading-tight">
              Together, We Can Turn<br />Vulnerability Into Resilience
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you donate, partner, sponsor a program, or share our work. You become part of a movement helping communities survive crisis and build lasting futures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-jam-charcoal text-primary-foreground font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 text-base">
                Donate Now
              </Link>
              <Link href="/jam-circle" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground hover:text-jam-sage transition-all duration-200">
                Join the JAM Circle
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
