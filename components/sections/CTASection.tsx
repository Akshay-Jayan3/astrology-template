import CTA from "../ui/CTA";

export default function CTASection({ phone, theme, type }: any) {
  return (
    <section className="px-6 sm:px-12 py-24 bg-slate-900 relative overflow-hidden">
      {/* Starry Sky / Constellation Texture */}
      <div 
        className="absolute inset-0 opacity-[0.07] mix-blend-screen pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23ffffff' opacity='0.8' /%3E%3Ccircle cx='60' cy='35' r='1' fill='%23ffffff' opacity='0.6' /%3E%3Ccircle cx='100' cy='20' r='2' fill='%23ffffff' opacity='0.9' /%3E%3Ccircle cx='30' cy='90' r='1.2' fill='%23ffffff' opacity='0.5' /%3E%3Ccircle cx='85' cy='95' r='1.5' fill='%23ffffff' opacity='0.7' /%3E%3Ccircle cx='110' cy='60' r='0.8' fill='%23ffffff' opacity='0.4' /%3E%3Cpath d='M15 15 L60 35 L100 20' stroke='%23ffffff' stroke-width='0.5' fill='none' opacity='0.3' /%3E%3Cpath d='M60 35 L30 90 L85 95 Z' stroke='%23ffffff' stroke-width='0.5' fill='none' opacity='0.2' /%3E%3C/svg%3E")`, 
          backgroundSize: '120px 120px' 
        }}
      />

      {/* Blurred Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
          Don't let uncertainty hold you back
        </h2>
        
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
          Get the clarity you need to move forward in life. Talk to us directly and find guidance for your specific situation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <CTA
            type="whatsapp"
            phone={phone}
            label="Chat on WhatsApp"
            theme={{...theme, primary: "#FFFFFF", textOnPrimary: "#0F172A"}} // Dark slate text on white
          />
        </div>
      </div>
    </section>
  );
}