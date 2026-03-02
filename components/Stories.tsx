"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const stories = [
  {
    name: "Bulus",
    title: "Rebuilding Life Without Land",
    program: "Farm Without Land",
    desc: "After bandit attacks forced him off his farmland, Bulus lost his primary source of income. With JAM Foundation's Farm Without Land program, he now grows vegetables in a climate-smart greenhouse.",
    impact: ["Produces vegetables year-round", "Steady income of $150/month", "Children eat better and stay healthy"],
    quote: "I thought I would never farm again. Now, I can provide for my family—and feel proud to be a farmer once more.",
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
    accentBorder: "border-jam-sage",
    number: "01",
  },
  {
    name: "Fatima",
    title: "Returning to School, Reclaiming Dreams",
    program: "School Is Home Again",
    desc: "Displacement forced 12-year-old Fatima to miss an entire school year. Through School Is Home Again, JAM Foundation provided uniforms, books, and psychosocial support.",
    impact: ["Re-enrolled after 9 months of displacement", "Receives mentorship and tutoring", "Confidence and hope restored"],
    quote: "I feel like I can be anything I want to be now. School is my safe place again.",
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
    accentBorder: "border-jam-orange",
    number: "02",
  },
  {
    name: "Ajoke",
    title: "Mothers Rising, Families Thriving",
    program: "Mothers Rising",
    desc: "With no income and three children to feed, Ajoke was facing extreme poverty. Through Mothers Rising, she learned tailoring and received a startup kit.",
    impact: ["Income of $200/month", "Children are fed, clothed, and attending school", "Now mentors other mothers"],
    quote: "JAM Foundation didn't just give me a handout—they gave me a future.",
    accent: "bg-jam-purple",
    accentText: "text-jam-purple",
    accentBorder: "border-jam-purple",
    number: "03",
  },
  {
    name: "Ali",
    title: "Saving a Child's Life",
    program: "Nourish to Survive",
    desc: "In a community affected by banditry, 3-year-old Ali was critically malnourished. Through Nourish to Survive, he received therapeutic nutrition and regular check-ups.",
    impact: ["Weight restored to healthy levels", "Family educated on nutrition", "Community awareness raised"],
    quote: "I never thought my child would survive. Thanks to JAM Foundation, he is growing strong every day.",
    accent: "bg-jam-clay",
    accentText: "text-jam-clay",
    accentBorder: "border-jam-clay",
    number: "04",
  },
];

const Stories = () => (
  <Layout>
    <PageHero
      title="Stories From the Field"
      subtitle={`"Statistics tell us what happens. Stories tell us why it matters."`}
      accent="clay"
    />

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-24">
          {stories.map((story, i) => {
            const isEven = i % 2 === 1;
            return (
              <AnimatedSection key={story.name} delay={0.1} direction={isEven ? "right" : "left"}>
                <article className={`grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden ${isEven ? "md:[direction:rtl]" : ""}`}>

                  {/* Colored panel */}
                  <div className={`${story.accent} p-10 flex flex-col justify-between ${isEven ? "md:[direction:ltr]" : ""}`}>
                    <div>
                      <span className="text-6xl font-extrabold text-white/10 leading-none block mb-6 select-none">
                        {story.number}
                      </span>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{story.program}</p>
                      <h2 className="text-2xl font-extrabold text-white leading-tight mb-1">{story.title}</h2>
                      <p className="text-sm text-white/70 font-medium mb-8">Meet {story.name}</p>

                      <ul className="space-y-2.5">
                        {story.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className={`bg-card border border-border p-10 flex flex-col justify-between ${isEven ? "md:[direction:ltr]" : ""}`}>
                    <p className="text-muted-foreground leading-relaxed mb-8">{story.desc}</p>

                    {/* Pull quote */}
                    <div className={`border-l-4 ${story.accentBorder} pl-6`}>
                      <blockquote className={`text-lg font-bold ${story.accentText} leading-snug mb-3`}>
                        "{story.quote}"
                      </blockquote>
                      <span className="text-sm text-muted-foreground font-medium">— {story.name}</span>
                    </div>
                  </div>

                </article>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection>
          <div className="text-center mt-20 bg-card border border-border rounded-2xl py-14 px-6">
            <p className="text-muted-foreground mb-2 text-sm uppercase tracking-widest font-semibold">Every story is a life transformed</p>
            <h3 className="text-2xl font-bold text-foreground mb-8">Your support makes the next story possible.</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="btn-primary">Donate Now</Link>
              <Link href="/jam-circle" className="btn-outline">Join the JAM Circle</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Stories;