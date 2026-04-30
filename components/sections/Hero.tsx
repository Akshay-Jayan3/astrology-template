import Image from "next/image";
import CTA from "../ui/CTA";
import { Sparkles } from "lucide-react";

export default function Hero({ data, phone, theme }: any) {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#F9F6F1]">


      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange-100/40 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-50/50 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <div className="space-y-8 relative z-10">
          {/* Trust Note */}
          <div className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-orange-200 shadow-sm text-orange-800 text-sm font-medium tracking-wide">
            {data.trustNote || "Trusted by thousands globally"}
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
            {data.headline.split(" ").map((word: string, i: number) => (
              <span
                key={i}
                className={i % 3 === 2 ? "text-orange-700" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
            {data.subtext}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pt-4">
            <CTA
              type="whatsapp"
              phone={phone}
              label={data.ctaText}
              theme={theme}
            />
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative lg:h-[600px] flex justify-center items-center">

          {/* Image Card */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-700 ease-out z-10">

            {/* Fallback Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-amber-100 mix-blend-multiply" />

            {/* Image */}
            <Image
              src={data.spiritualImage || "/images/astrologer.jpg"}
              alt="Guidance"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent" />

            {/* Quote */}
            <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20">
              <p className="text-white font-serif text-base sm:text-lg font-medium leading-snug drop-shadow-md">
                "Astrology is not merely a profession; it is a Sacred Flame bestowed upon me."
              </p>
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="hidden lg:flex absolute top-1/2 -left-12 w-24 h-24 bg-white rounded-full shadow-xl items-center justify-center p-6 z-20 animate-[bounce_5s_infinite]">
            <Sparkles className="w-10 h-10 text-orange-400 stroke-[1.5]" />
          </div>
        </div>
      </div>
    </section>
  );
}