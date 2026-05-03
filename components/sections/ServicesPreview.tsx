import Link from "next/link";

export default function ServicesPreview({ services }: any) {
  const previewServices = services.slice(0, 3);

  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Astrological Offerings & Remedies
          </h2>
          <p className="text-gray-500 text-lg">
            Divine remedies and Prashna tailored for your Karmic cycle
          </p>
        </div>

        {/* Grid / Carousel */}
        <div
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 md:overflow-visible [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {previewServices.map((s: any) => (
            <Link
              key={s.title}
              href={`/services#${s.problemKey}`} // 🔥 anchor navigation
              className="flex-none w-[85vw] sm:w-[350px] md:w-auto snap-center"
            >
              <div
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 flex flex-col border border-orange-900/5 group relative overflow-hidden cursor-pointer"
              >
                {/* Decorative gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6 group-hover:text-orange-900 transition-colors">
                  {s.title}
                </h3>

                {/* Problem ONLY */}
                <div className="relative pl-4 border-l-2 border-red-200 group-hover:border-red-400 transition-colors">
                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-red-600 mb-1">
                    Karmic Obstacle
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {s.problem}
                  </p>
                </div>

                {/* Learn More */}
                <div className="pt-6 mt-auto">
                  <p className="text-orange-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Learn More
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 transition-colors"
          >
            View All Services
            <span className="text-lg"></span>
          </Link>
        </div>

      </div>
    </section>
  );
}