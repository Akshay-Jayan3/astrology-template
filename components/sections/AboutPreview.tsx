import Image from "next/image";
import Link from "next/link";
import { Award, Users } from "lucide-react";

export default function AboutPreview({ data }: any) {
  return (
    <section className="relative px-6 sm:px-12 lg:px-24 py-24 bg-[#FAF7F2] overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#FFF4D6] to-transparent rounded-full blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white shadow-xl bg-white">
          <Image
            src={data.image || "/images/astrologer.jpg"}
            alt="Astrologer Profile"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E1B16] leading-tight">
              A Legacy of Trust & Guidance
            </h2>

            <p className="mt-4 text-2xl font-serif text-[#3B2E1F]">
              {data.astrologer || "Sreekumar J Pillai"}
            </p>
          </div>

          <div className="w-16 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />

          {/* Short Content Only */}
          <p className="text-lg text-[#4A443D] leading-relaxed">
            {data.en.short}
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#F1E3BF] shadow-sm">
              <Award className="w-5 h-5 text-[#c2410c]" />
              <span className="font-medium text-[#1E1B16]">
                {data.en.experience}
              </span>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#F1E3BF] shadow-sm">
              <Users className="w-5 h-5 text-[#c2410c]" />
              <span className="font-medium text-[#1E1B16]">
                {data.en.clients}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#c2410c] font-semibold hover:gap-3 transition-all duration-300"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}