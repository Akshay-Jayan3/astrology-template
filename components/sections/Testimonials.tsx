"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials({ items }: any) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -760 : 760,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-6 sm:px-12 lg:px-24 py-10 md:py-16 bg-[#F9F6F1] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-100/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-[#c2410c] font-medium uppercase tracking-[0.25em] text-xs mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-5 leading-tight">
            Devotee Experiences
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            Real experiences from people who found clarity and guidance through consultation.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur border border-gray-200 shadow-lg items-center justify-center hover:bg-orange-50 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur border border-gray-200 shadow-lg items-center justify-center hover:bg-orange-50 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((t: any, i: number) => (
              <div
                key={i}
                className="group relative flex-none w-[92%] md:w-[720px] rounded-[2rem] bg-white backdrop-blur-xl border border-white p-6 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 snap-start"
              >

                {/* Quote */}
                <div className="text-7xl text-orange-500 font-serif leading-none mb-2 relative z-10">
                  “
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
                    {t.content}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-5 border-t border-gray-100 relative z-10">
                  <p className="font-semibold text-gray-900 text-lg">
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden justify-center gap-3 mt-8">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}