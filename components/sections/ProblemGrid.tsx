import CTA from "../ui/CTA";

export default function ProblemGrid({ problems, phone, theme }: any) {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What are you going through?
          </h2>
          <p className="text-gray-500 text-lg">
            Choose your concern to receive tailored astrological guidance that addresses your specific life situation.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p: any) => (
            <div
              key={p.key}
              className="group relative bg-[#F9F6F1] rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-orange-100 flex flex-col h-full"
            >
              <div className="flex-grow">
                {/* Icon */}
                <div className="w-14 h-14 bg-white shadow-sm text-2xl rounded-2xl flex items-center justify-center mb-6 text-orange-600 transition-transform group-hover:scale-110">
                  {p.icon === 'heart' && "❤️"}
                  {p.icon === 'briefcase' && "💼"}
                  {p.icon === 'coin' && "💰"}
                  {p.icon === 'health' && "🌿"}
                  {!['heart', 'briefcase', 'coin', 'health'].includes(p.icon) && "✨"}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-orange-800 transition-colors">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {p.description}
                </p>
              </div>

              {/* CTA placed at bottom */}
              <div className="mt-auto">
                <CTA
                  type="whatsapp"
                  phone={phone}
                  message={p.prefill}
                  label="Seek Guidance →"
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