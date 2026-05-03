export default function HowItWorks({ steps }: any) {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            The Path to Divine Insight
          </h2>
          <p className="text-gray-500 text-lg">
            A sacred journey to unlock your karmic destiny and receive Guruji's guidance.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 -z-10" />

          {steps.map((step: any, i: number) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-orange-100"
            >
              {/* Step Number Badge */}
              <div className="w-14 h-14 mx-auto lg:mx-0 bg-white border-4 border-orange-50 text-orange-600 font-serif font-bold text-xl rounded-full flex items-center justify-center mb-6 shadow-sm">
                0{i + 1}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center lg:text-left">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center lg:text-left leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}