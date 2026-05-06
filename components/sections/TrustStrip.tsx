import {
  Clock,
  Users,
  Calendar,
  Languages,
  Sparkles,
} from "lucide-react";

export default function TrustStrip({ data }: any) {
  return (
    <section className="bg-[#FAF7F2] py-10 md:py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {data.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6 py-8 rounded-3xl bg-white border border-[#F1E3BF] shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 bg-[#FFF7E8] rounded-2xl flex items-center justify-center mb-6 text-[#c2410c]">
                {item.icon === "clock" && (
                  <Clock className="w-7 h-7 stroke-[1.5]" />
                )}
                {item.icon === "users" && (
                  <Users className="w-7 h-7 stroke-[1.5]" />
                )}
                {item.icon === "time" && (
                  <Calendar className="w-7 h-7 stroke-[1.5]" />
                )}
                {item.icon === "language" && (
                  <Languages className="w-7 h-7 stroke-[1.5]" />
                )}
                {!["clock", "users", "time", "language"].includes(
                  item.icon
                ) && <Sparkles className="w-7 h-7 stroke-[1.5]" />}
              </div>

              {/* Value */}
              <div className="text-xl md:text-2xl font-bold text-[#1E1B16] mb-2 tracking-tight">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-[#7A6A58] uppercase tracking-[0.18em]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}