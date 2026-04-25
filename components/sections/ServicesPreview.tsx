import CTA from "../ui/CTA";

export default function ServicesPreview({ services, phone, theme }: any) {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Astrological Offerings & Pujas
          </h2>
          <p className="text-gray-500 text-lg">
            Divine remedies and Prashna tailored for your Karmic cycle
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((s: any) => (
            <div
              key={s.title}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                {s.title}
              </h3>

              <div className="space-y-6 flex-grow">
                {/* Problem */}
                <div className="relative pl-4 border-l-2 border-red-200">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-red-600 mb-1">Karmic Obstacle</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {s.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="relative pl-4 border-l-2 border-green-200">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-green-700 mb-1">Divine Remedy (Parihara)</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {s.solution}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <CTA
                  type="whatsapp"
                  phone={phone}
                  message={s.prefill}
                  label="Seek Blessings"
                  theme={theme}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}