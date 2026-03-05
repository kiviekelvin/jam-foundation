"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
  program: string;
}

const images: GalleryImage[] = [
  // Education
  { src: "/images/gallery/education-01.jpeg", alt: "Girl studying in classroom", caption: "Her Future Fund: keeping girls in school across conflict-affected communities.", category: "Education", program: "Her Future Fund" },
  { src: "/images/gallery/education-02.jpeg", alt: "Children returning to school", caption: "School Is Home Again: displaced children re-enrolling and rediscovering hope.", category: "Education", program: "School Is Home Again" },
  { src: "/images/gallery/education-03.jpeg", alt: "Youth in leadership workshop", caption: "School Is Home Again: displaced children re-enrolling and rediscovering hope.", category: "Education", program: "School Is Home Again" },
  { src: "/images/gallery/education-04.jpeg", alt: "Teacher with students", caption: "School Is Home Again: displaced children re-enrolling and rediscovering hope.", category: "Education", program: "School Is Home Again" },
  { src: "/images/gallery/education-05.jpeg", alt: "Students in class", caption: "Beyond School™: peer learning and community building in action.", category: "Education", program: "Beyond School" },
  { src: "/images/gallery/education-06.jpeg", alt: "Classroom session", caption: "Beyond School™: peer learning and community building in action.", category: "Education", program: "Beyond School" },
  { src: "/images/gallery/education-07.jpeg", alt: "Youth group activity", caption: "Beyond School™: peer learning and community building in action.", category: "Education", program: "Beyond School" },
  { src: "/images/gallery/education-08.jpeg", alt: "Students at desks", caption: "Beyond School™: peer learning and community building in action.", category: "Education", program: "Beyond School" },
  { src: "/images/gallery/education-09.jpg", alt: "Youth leadership training", caption: "School Is Home Again: displaced children re-enrolling and rediscovering hope.", category: "Education", program: "School Is Home Again" },

  // Economic Empowerment
  { src: "/images/gallery/empowerment-01.jpg", alt: "Mother learning tailoring", caption: "Earn a Skill. Build a Life.: hands-on training for real livelihoods.", category: "Economic Empowerment", program: "Earn a Skill. Build a Life." },
  { src: "/images/gallery/empowerment-02.jpg", alt: "Youth skills training", caption: "Earn a Skill. Build a Life.: hands-on training for real livelihoods.", category: "Economic Empowerment", program: "Earn a Skill. Build a Life." },
  { src: "/images/gallery/empowerment-03.jpg", alt: "Mother with her business", caption: "Mothers Rising: graduates running their own small businesses.", category: "Economic Empowerment", program: "Mothers Rising" },
  { src: "/images/gallery/empowerment-04.jpg", alt: "Youth graduation ceremony", caption: "Mothers Rising: graduates running their own small businesses.", category: "Economic Empowerment", program: "Mothers Rising" },

  // Climate, Food Security & Health
  { src: "/images/gallery/climate-01.jpg", alt: "Greenhouse farming", caption: "Save the Harvest: solar drying systems reducing post-harvest food loss.", category: "Climate, Food Security & Health", program: "Save the Harvest" },
  { src: "/images/gallery/climate-02.jpg", alt: "Solar food dryer", caption: "Save the Harvest: solar drying systems reducing post-harvest food loss.", category: "Climate, Food Security & Health", program: "Save the Harvest" },
  { src: "/images/gallery/climate-03.jpg", alt: "Community farming", caption: "Save the Harvest: solar drying systems reducing post-harvest food loss.", category: "Climate, Food Security & Health", program: "Save the Harvest" },
  { src: "/images/gallery/climate-04.jpg", alt: "Child nutrition screening", caption: "Farm Without Land: communities learning sustainable agricultural techniques.", category: "Climate, Food Security & Health", program: "Farm Without Land" },
  { src: "/images/gallery/climate-05.jpeg", alt: "Child nutrition screening", caption: "Nourish to Survive: community health workers screening children for malnutrition.", category: "Climate, Food Security & Health", program: "Nourish to Survive" },
  { src: "/images/gallery/climate-06.jpeg", alt: "Mother receiving nutrition education", caption: "Nourish to Survive: mothers learning about infant and young child nutrition.", category: "Climate, Food Security & Health", program: "Nourish to Survive" },
  { src: "/images/gallery/climate-07.jpeg", alt: "Food processing", caption: "Nourish to Survive: community health workers screening children for malnutrition.", category: "Climate, Food Security & Health", program: "Nourish to Survive" },
  { src: "/images/gallery/climate-08.jpeg", alt: "Health outreach", caption: "Nourish to Survive: mobile health teams reaching remote communities.", category: "Climate, Food Security & Health", program: "Nourish to Survive" },
  { src: "/images/gallery/climate-09.jpeg", alt: "Greenhouse produce", caption: "Nourish to Survive: community health workers screening children for malnutrition.", category: "Climate, Food Security & Health", program: "Nourish to Survive" },
];

const categories = ["All", "Education", "Economic Empowerment", "Climate, Food Security & Health"];

const categoryAccent: Record<string, string> = {
  "All": "bg-jam-charcoal text-white",
  "Education": "bg-jam-sage text-white",
  "Economic Empowerment": "bg-jam-orange text-white",
  "Climate, Food Security & Health": "bg-jam-purple text-white",
};

const categoryAccentOutline: Record<string, string> = {
  "All": "border-jam-charcoal text-jam-charcoal",
  "Education": "border-jam-sage text-jam-sage",
  "Economic Empowerment": "border-jam-orange text-jam-orange",
  "Climate, Food Security & Health": "border-jam-purple text-jam-purple",
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <Layout>
      <PageHero
        title="Gallery"
        subtitle="Real people. Real places. Real change. A visual window into the communities we serve."
        accent="purple"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Filter tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                    activeCategory === cat
                      ? categoryAccent[cat]
                      : `bg-transparent ${categoryAccentOutline[cat]} hover:opacity-70`
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 0.04}>
                <button
                  onClick={() => openLightbox(i)}
                  className="block w-full group relative rounded-xl overflow-hidden aspect-square cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-bold text-white/70 uppercase tracking-wide block mb-1">{img.program}</span>
                      <p className="text-white text-xs leading-snug line-clamp-2">{img.caption}</p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">No photos in this category yet.</div>
          )}

          {/* CTA */}
          <AnimatedSection>
            <div className="text-center mt-16">
              <p className="text-muted-foreground text-sm mb-6">Every photo represents a life being transformed. Your support makes this possible.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/donate" className="btn-primary">Donate Now</a>
                <a href="/stories" className="btn-outline">Read Their Stories</a>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <div
            className="max-w-4xl w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">
                {filtered[lightboxIndex].program}
              </p>
              <p className="text-white text-sm leading-relaxed max-w-xl mx-auto">
                {filtered[lightboxIndex].caption}
              </p>
              <p className="text-white/30 text-xs mt-3">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;