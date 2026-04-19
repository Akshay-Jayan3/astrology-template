import data from "../../data/site.json";
import CTA from "../../components/ui/CTA";
import StickyCTA from "../../components/sections/StickyCTA";
import CTASection from "../../components/sections/CTASection";

export const metadata = {
  title: `Our Services | ${data.site.name}`,
  description: "Astrology services and consultations for marriage, career, health, and finance."
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] pb-24">
      {/* Header */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Astrology Validated Guidance</h1>
          <p className="text-xl text-gray-600">
            Find clarity in moments of confusion. Choose the area of your life where you need the most urgent guidance.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-12">
          {data.services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="p-8 md:p-12 flex-1">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{service.title}</h2>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold text-red-600 mb-1">The Problem</h4>
                    <p className="text-gray-700 text-lg">{service.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold text-green-700 mb-1">The Solution</h4>
                    <p className="text-gray-700 text-lg">{service.solution}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTA 
                    type="whatsapp" 
                    phone={data.site.whatsapp} 
                    message={service.prefill} 
                    theme={data.theme} 
                    label="Ask About This"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection phone={data.site.whatsapp} theme={data.theme} type="whatsapp" />
      <StickyCTA phone={data.site.whatsapp} theme={data.theme} />
    </main>
  );
}
