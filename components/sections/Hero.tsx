"use client";

import Image from "next/image";
import CTA from "../ui/CTA";
import { useEffect, useState } from "react";

export default function Hero({ data, phone, theme }: any) {
  const slides = data.spiritualImages

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Fullscreen Slider */}
      <div className="absolute inset-0">
        {slides.map((img: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={img}
              alt={`Hero Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>


      {/* Soft Golden Gradient for Spiritual Feel */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 w-full">
          <div className="max-w-3xl space-y-8">
            {/* Trust Note */}
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#D4AF37]/60 bg-black/20 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />

              <span className="text-sm font-medium tracking-wide">
                <span className="text-[#D4AF37] font-semibold">
                  Traditional Vedic Astrology
                </span>

                <span className="text-white/80 px-2">•</span>

                <span className="text-white">
                  Kerala Jyothisham
                </span>

                <span className="text-white/80 px-2">•</span>

                <span className="text-[#D4AF37] font-semibold">
                  Spiritual Remedies
                </span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif font-bold leading-[1.05] tracking-tight">
              <span className="text-white">
                Trusted Vedic Guidance
              </span>
              <br />
              <span className="text-white">
                for Life Decisions
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl">
              {data.subtext}
            </p>

            {/* CTA */}
            <div className="pt-4">
              <CTA
                type="whatsapp"
                phone={phone}
                label={data.ctaText || "Consult Now"}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_: string, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${currentSlide === index
              ? "w-10 h-2 bg-white"
              : "w-2 h-2 bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}