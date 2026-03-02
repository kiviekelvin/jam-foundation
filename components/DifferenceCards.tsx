"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Leaf, Heart, BarChart3 } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "People-Centered",
    description: "We design solutions with communities, not for them",
    color: "bg-jam-sage",
  },
  {
    icon: Leaf,
    title: "Climate-Smart",
    description: "We prioritize sustainable, adaptive approaches",
    color: "bg-jam-orange",
  },
  {
    icon: Heart,
    title: "Dignity-Driven",
    description: "We focus on income, skills, and independence",
    color: "bg-jam-purple",
  },
  {
    icon: BarChart3,
    title: "Accountable",
    description: "We track impact and communicate transparently",
    color: "bg-jam-clay",
  },
];

const DifferenceCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/community-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-jam-charcoal/70" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-jam-sage mb-2 font-bold">
            Our DNA
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="relative rounded-lg overflow-hidden cursor-pointer min-h-[220px] md:min-h-[280px] flex flex-col items-center justify-center text-center group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-jam-charcoal/40 backdrop-blur-sm border border-primary-foreground/10 rounded-lg transition-all duration-500 group-hover:bg-jam-charcoal/80" />

              {/* Default state: icon + title */}
              <div className="relative z-10 flex flex-col items-center gap-4 px-4 transition-all duration-300">
                <motion.div
                  className={`w-14 h-14 rounded-full ${card.color} flex items-center justify-center`}
                  animate={{
                    scale: hoveredIndex === i ? 0.8 : 1,
                    y: hoveredIndex === i ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <card.icon className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
                </motion.div>

                <h3 className="text-lg md:text-xl font-extrabold text-primary-foreground uppercase tracking-wide leading-tight">
                  {card.title}
                </h3>

                {/* Description — revealed on hover */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.p
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary-foreground/80 text-sm leading-relaxed"
                    >
                      {card.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Accent bottom bar on hover */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 ${card.color}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceCards;
