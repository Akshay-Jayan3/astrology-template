"use client";

import Image from "next/image";
import CTA from "../ui/CTA";
import { useEffect, useState } from "react";

export default function Hero({ data, phone, theme }: any) {
  const slides = data.spiritualImages || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((img: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={img}
              alt={`Hero ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Better Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[92vh]">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-24 pt-24 pb-16">
          <div className="max-w-2xl space-y-6">
            {/* Trust Badge - fixed for mobile */}
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/30 px-4 py-3 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />

              <p className="text-xs sm:text-sm leading-relaxed font-medium">
                <span className="text-[#D4AF37] font-semibold">
                  Traditional Vedic Astrology
                </span>

                <span className="text-white/70 px-1">•</span>

                <span className="text-white">
                  Kerala Jyothisham
                </span>

                <span className="text-white/70 px-1">•</span>

                <span className="text-[#D4AF37] font-semibold">
                  Spiritual Remedies
                </span>
              </p>
            </div>

            {/* Heading - fixed mobile size */}
            <h1 className="text-[2.2rem] sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.08] tracking-tight text-white">
              Trusted Vedic Guidance
              <span className="block">
                for Life Decisions
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {data.subtext}
            </p>

            {/* CTA */}
            <div className="pt-2">
              <div className="w-full sm:w-auto">
                <CTA
                  type="whatsapp"
                  phone={phone}
                  label={data.ctaText || "Consult on WhatsApp"}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_: string, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${currentSlide === index
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}