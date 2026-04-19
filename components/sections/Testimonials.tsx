export default function Testimonials({ items }: any) {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Words of Trust
          </h2>
          <p className="text-gray-500 text-lg">
            Real experiences from people who found clarity and direction through our guidance.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((t: any, i: number) => {
            const isWhatsApp = t.type === "whatsapp";

            return (
              <div
                key={i}
                className={`
                  relative rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                  ${isWhatsApp
                    ? "bg-white border border-green-100"
                    : "bg-white border border-orange-50"}
                `}
              >
                {/* Visual Quote Mark */}
                <div className="absolute top-6 right-6 text-6xl text-gray-100 font-serif leading-none opacity-50 pointer-events-none">
                  "
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed relative z-10 mb-6 font-medium italic">
                  "{t.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto relative z-10">
                  <p className="font-semibold text-gray-900">
                    {t.name}
                  </p>
                  
                  {isWhatsApp && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded-md">
                      WhatsApp
                    </span>
                  )}
                  {!isWhatsApp && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded-md">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}