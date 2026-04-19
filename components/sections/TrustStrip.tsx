export default function TrustStrip({ data }: any) {
  return (
    <section className="bg-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-gray-800">
          {data.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-14 h-14 bg-gray-800/50 rounded-2xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                {/* Fallback icons to not rely on missing assets */}
                {item.icon === 'clock' && "⏳"}
                {item.icon === 'users' && "🫂"}
                {item.icon === 'time' && "🕒"}
                {item.icon === 'language' && "🗣️"}
                {!['clock', 'users', 'time', 'language'].includes(item.icon) && "✨"}
              </div>

              <div className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight">
                {item.value}
              </div>

              <div className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-widest">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}