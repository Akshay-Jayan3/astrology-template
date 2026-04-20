import Image from "next/image";
import Link from "next/link";
import { Award, Users } from "lucide-react";

export default function AboutPreview({ data }: any) {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-24 bg-white relative overflow-hidden">
      {/* Decorative calm background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F9F6F1] rounded-bl-full -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE WITH PREMIUM FRAME */}
        <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-xl group border-[8px] border-[#F9F6F1]">
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors duration-500 z-10 pointer-events-none" />
          
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          <Image
            src={data.image || "/images/astrologer.jpg"}
            alt="Astrologer Profile"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white max-w-sm">
              <p className="text-orange-800 font-serif font-medium text-lg leading-snug">
                "{data.lineage}"
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8">
          <div>
            <h4 className="text-orange-600 font-semibold tracking-wider uppercase text-sm mb-3">About The Advisor</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              A Legacy of Trust <br/> & Guidance
            </h2>
            <p className="mt-4 text-2xl font-serif text-gray-800">{data.astrologer || "Sreekumar J Pillai"}</p>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-200 rounded-full" />

          <p className="text-xl text-gray-800 font-medium">
            {data.short}
          </p>

          <div className="space-y-4">
            {data.long.split('\n\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="text-gray-600 text-lg leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 bg-orange-50 px-5 py-3 rounded-2xl border border-orange-100">
              <span className="text-orange-600">
                <Award className="w-6 h-6" />
              </span>
              <span className="text-gray-900 font-medium">{data.experience}</span>
            </div>
            <div className="flex items-center gap-3 bg-[#F9F6F1] px-5 py-3 rounded-2xl border border-gray-200">
              <span className="text-gray-600">
                <Users className="w-6 h-6" />
              </span>
              <span className="text-gray-900 font-medium">{data.clients}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
             <Link href="/about" className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors">
               Read Full Story
               <span className="text-xl">→</span>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}