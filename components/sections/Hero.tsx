import Image from "next/image";
import CTA from "../ui/CTA";

export default function Hero({ data, phone, theme }: any) {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#F9F6F1]">
      {/* Background subtle starry/light texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%231F2937' opacity='0.8' /%3E%3Ccircle cx='70' cy='45' r='1' fill='%231F2937' opacity='0.6' /%3E%3Ccircle cx='110' cy='30' r='2' fill='%231F2937' opacity='0.9' /%3E%3Ccircle cx='40' cy='100' r='1.2' fill='%231F2937' opacity='0.5' /%3E%3Ccircle cx='95' cy='105' r='1.5' fill='%231F2937' opacity='0.7' /%3E%3Cpath d='M20 20 L70 45 L110 30' stroke='%231F2937' stroke-width='0.5' fill='none' opacity='0.3' /%3E%3C/svg%3E")`, 
          backgroundSize: '120px 120px' 
        }}
      />

      {/* Background elegant pattern / gradient layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange-100/40 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-50/50 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8 relative z-10">
          <div className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-orange-200 shadow-sm text-orange-800 text-sm font-medium tracking-wide">
            {data.trustNote || "Trusted by thousands globally"}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] tracking-tight text-balance">
            {data.headline.split(' ').map((word: string, i: number) => (
              <span key={i} className={i % 3 === 2 ? "text-orange-700" : ""}>{word} </span>
            ))}
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
            {data.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center pt-4">
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
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-700 ease-out z-10">
            {/* Fallback pattern if image is missing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-amber-100 mix-blend-multiply" />
            
            {/* The Spiritual Image Overlaid with Gradient */}
            <Image
              src={data.spiritualImage || "/images/astrologer.jpg"}
              alt="Guidance"
              fill
              autoFocus={true}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover relative z-0 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent z-10" />
            
            {/* Overlay Text */}
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <p className="text-white font-serif text-2xl font-medium leading-snug drop-shadow-md">
                "Astrology is not just prediction, but guidance to help you move forward."
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 -left-12 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center p-6 z-20 animate-[bounce_5s_infinite]">
            <span className="text-4xl">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}