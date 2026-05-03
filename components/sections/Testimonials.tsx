export default function Testimonials({ items }: any) {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Devotee Experiences
          </h2>
          <p className="text-gray-500 text-lg">
            Real experiences from those whose lives were transformed by authentic guidance.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 [&::-webkit-scrollbar]:hidden">
          {items.map((t: any, i: number) => {
            const isWhatsApp = t.type === "whatsapp";

            return (
              <div
                key={i}
                className={`min-w-[85%] snap-start rounded-3xl p-6 shadow-sm transition-all duration-300
                  ${isWhatsApp
                    ? "bg-white border border-green-100"
                    : "bg-white border border-orange-50"}
                `}
              >
                {/* Quote */}
                <div className="absolute top-6 right-6 text-5xl text-gray-100 font-serif opacity-40">
                  "
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-5 italic">
                  "{t.content}"
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>

                  {isWhatsApp ? (
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                      WhatsApp
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-md">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 ">
          {items.map((t: any, i: number) => {
            const isWhatsApp = t.type === "whatsapp";

            return (
              <div
                key={i}
                className={`relative rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                  ${isWhatsApp
                    ? "bg-white border border-green-100"
                    : "bg-white border border-orange-50"}
                `}
              >
                {/* Quote */}
                <div className="absolute top-6 right-6 text-6xl text-gray-100 font-serif opacity-50">
                  "
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>

                  {isWhatsApp ? (
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                      WhatsApp
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-md">
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