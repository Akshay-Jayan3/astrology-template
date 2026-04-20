import data from "../../data/site.json";
import Image from "next/image";
import CTA from "../../components/ui/CTA";
import StickyCTA from "../../components/sections/StickyCTA";

export const metadata = {
  title: `About ${data.site.name} | Vedic Astrologer`,
  description: data.about.short
};

export default function AboutPage() {
  return (
    <main className="pb-24">
      {/* Hero Section */}
      <section className="bg-[#F9F6F1] py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">About {data.site.name}</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {data.about.short}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 text-gray-800 leading-relaxed text-lg">
            <div className="space-y-4">
              {data.about.long.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mt-8">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Lineage & Tradition</h3>
              <p className="text-gray-700">{data.about.lineage}</p>
            </div>
            
            <div className="pt-6">
              <h3 className="font-serif text-2xl font-semibold font-gray-900 mb-4">Get Guidance</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTA type="whatsapp" phone={data.site.whatsapp} theme={data.theme} />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            {/* Fallback image if data.about.image is missing or causes 404. We'll use next/image with a placeholder or fallback. To be reliable here, a simple div fallback if not provided or just rendering it. Assuming image exists based on json. */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <Image 
              src={data.about.image || "/images/astrologer.jpg"} 
              alt={data.site.name}
              fill
              className="object-cover relative z-10"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Stats/Trust */}
      <section className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {data.trust.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-serif font-bold mb-2" style={{ color: data.theme.primary }}>
                {item.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      <StickyCTA phone={data.site.whatsapp} theme={data.theme} />
    </main>
  );
}
