import Image from "next/image";
import CTA from "../ui/CTA";

export default function CTASection({ phone, theme }: any) {
  return (
    <section className="relative px-6 sm:px-12 py-10 md:py-16 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/solar-system.webp"
        alt="Spiritual astrology background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
        {/* Small Heading */}
        <p className="text-[#D4AF37] font-medium tracking-[0.25em] uppercase text-sm">
          Traditional Vedic Guidance
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
          Don’t Let Uncertainty
          <span className="block text-[#D4AF37]">
            Hold You Back
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
          Receive trusted guidance for marriage, career, finance, health,
          family matters, and spiritual remedies. Let clarity and divine
          wisdom guide your next step.
        </p>

        {/* Trust Line */}
        <p className="text-sm md:text-base text-white/70">
          Private Consultations • Personal Guidance • Complete Confidentiality
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <CTA
            type="whatsapp"
            phone={phone}
            label="Consult on WhatsApp"
            theme={{
              ...theme,
              primary: "#c2410c",
              textOnPrimary: "#ffffff",
            }}
          />
        </div>
      </div>
    </section>
  );
}