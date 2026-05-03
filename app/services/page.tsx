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
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Sacred Astrological Offerings & Remedies</h1>
          <p className="text-xl text-gray-600">
            Receive trusted astrological guidance and remedies for life’s challenges.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-12">
          {data.services.map((service: any, idx: number) => (
            <div key={idx} id={service.problemKey} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

              <div className="p-8 md:p-12">

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>

                {/* Problem */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-red-600 mb-2">
                    Karmic Obstacle
                  </h4>
                  <p className="text-gray-700 text-lg">
                    {service.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-green-700 mb-2">
                    Divine Remedy (Parihara)
                  </h4>
                  <p className="text-gray-700 text-lg">
                    {service.solution}
                  </p>
                </div>

                {/* Details */}
                <ul className="space-y-2 text-gray-600 mb-6">
                  {service.details.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                {/* Best For */}
                {service.bestFor && (
                  <p className="text-sm text-gray-500 mb-6">
                    <strong>Best for:</strong> {service.bestFor}
                  </p>
                )}

                {/* CTA */}
                <CTA
                  type="whatsapp"
                  phone={data.site.whatsapp}
                  message={service.prefill}
                  theme={data.theme}
                  label="Consult Now"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <StickyCTA phone={data.site.whatsapp} theme={data.theme} />
    </main>
  );
}
