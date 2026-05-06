"use client";

import { useState } from "react";
import data from "../../data/site.json";
import Image from "next/image";
import CTA from "../../components/ui/CTA";
import StickyCTA from "../../components/sections/StickyCTA";
import TrustStrip from "../../components/sections/TrustStrip";
import PageHeader from "../../components/ui/Header";

const image = data.about.image; // common image for both languages

export default function AboutPage() {
  const [lang, setLang] = useState<"en" | "ml">("en");

  const content = data.about[lang];

  return (
    <main>
      {/* Premium Hero Section */}
      <PageHeader
        eyebrow="About Us"
        title="A Sacred Legacy of Trust & Divine Guidance"
        description={content.short}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Main Content */}
      <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#c2410c] font-medium uppercase tracking-wider text-sm mb-3">
                Spiritual Journey
              </p>

              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E1B16] leading-tight">
                {data.site.name}
              </h2>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang("en")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${lang === "en"
                  ? "bg-[#c2410c] text-white shadow-md"
                  : "bg-[#FAF7F2] text-[#5F5A52] border border-[#F1E3BF]"
                  }`}
              >
                English
              </button>

              <button
                onClick={() => setLang("ml")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${lang === "ml"
                  ? "bg-[#c2410c] text-white shadow-md"
                  : "bg-[#FAF7F2] text-[#5F5A52] border border-[#F1E3BF]"
                  }`}
              >
                മലയാളം
              </button>
            </div>

            <div className="w-20 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />

            {/* Dynamic Content */}
            <div className="space-y-5 text-[#5F5A52] text-lg leading-relaxed">
              {content.long
                .split("\n\n")
                .map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
            </div>

            {/* Lineage Card */}
            <div className="bg-[#FAF7F2] border border-[#F1E3BF] rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-serif font-semibold text-[#1E1B16] mb-4">
                {lang === "en" ? "Lineage & Tradition" : "പാരമ്പര്യവും വിശ്വാസവും"}
              </h3>

              <p className="text-[#5F5A52] leading-relaxed">
                {content.lineage}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <h3 className="text-2xl font-serif font-semibold text-[#1E1B16] mb-5">
                Seek Personal Guidance
              </h3>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTA
                  type="whatsapp"
                  phone={data.site.whatsapp}
                  label="Consult on WhatsApp"
                  theme={data.theme}
                />
              </div>
            </div>
          </div>

          {/* Right Sticky Image (Common) */}
          <div className="lg:sticky lg:top-24">
            <div className="relative group flex justify-center">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#D4AF37]/20 to-transparent blur-xl opacity-80" />

              <div className="relative h-[450px] w-full max-w-md rounded-[2rem] overflow-hidden border border-white bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <Image
                  src={image}
                  alt={data.site.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip data={data.trust} />

      <StickyCTA
        phone={data.site.whatsapp}
        theme={data.theme}
      />
    </main>
  );
}