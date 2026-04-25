import data from "../../data/site.json";
import CTA from "../../components/ui/CTA";

export const metadata = {
  title: `Contact | ${data.site.name}`,
  description: "Seek personal astrology consultation and spiritual guidance.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] py-20 px-6 sm:px-12 lg:px-24 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-[#c2410c] font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Seek Personal Guidance
          </p>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1E1B16] leading-tight mb-6">
            Request a
            <span className="block text-[#c2410c]">
              Personal Consultation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#5F5A52] max-w-3xl mx-auto leading-relaxed">
            Share your concern and receive trusted Vedic guidance for
            marriage, career, finance, health, family matters, and spiritual
            remedies.
          </p>
        </div>

        {/* Full Width Enquiry Form */}
        <div className="bg-white rounded-[2rem] border border-[#F1E3BF] shadow-sm p-8 md:p-12 mb-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-serif font-bold text-[#1E1B16] mb-3">
              Share Your Concern
            </h2>

            <p className="text-[#6B6258] leading-relaxed max-w-2xl mx-auto">
              All consultations are private and handled with complete
              confidentiality.
            </p>
          </div>

          <form className="space-y-6">
            {/* Main Fields */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-[#E8D9B5] px-5 py-4 outline-none focus:border-[#c2410c] transition"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-2xl border border-[#E8D9B5] px-5 py-4 outline-none focus:border-[#c2410c] transition"
              />
            </div>

            <select className="w-full rounded-2xl border border-[#E8D9B5] px-5 py-4 outline-none focus:border-[#c2410c] transition text-[#6B6258]">
              <option>Select Area of Concern</option>
              <option>Marriage</option>
              <option>Career</option>
              <option>Finance</option>
              <option>Health</option>
              <option>Family</option>
              <option>Relationship</option>
              <option>Other</option>
            </select>

            <textarea
              rows={5}
              placeholder="Briefly describe your concern"
              className="w-full rounded-2xl border border-[#E8D9B5] px-5 py-4 outline-none focus:border-[#c2410c] transition resize-none"
            />

            {/* Optional Horoscope Fields */}
            <div className="pt-6 border-t border-[#F3E7CB]">
              <p className="text-sm text-[#7A6A58] mb-5 font-medium">
                Optional for Detailed Horoscope Reading
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Date of Birth"
                  className="w-full rounded-2xl border border-[#E8D9B5] px-5 py-4 outline-none focus:border-[#c2410c] transition"
                />

                <input
                  type="text"
                  placeholder="Time of Birth"
                  className="w-full rounded-2xl border border-[#E8D9B5] px-5 py-4 outline-none focus:border-[#c2410c] transition"
                />

                <input
                  type="text"
                  placeholder="Place of Birth"
                  className="w-full rounded-2xl border border-[#E8D9B5] px-5 py-4 outline-none focus:border-[#c2410c] transition"
                />

                <input
                  type="text"
                  placeholder="Nakshatra (Star)"
                  className="w-full rounded-2xl border border-[#E8D9B5] px-5 py-4 outline-none focus:border-[#c2410c] transition"
                />
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="px-10 py-4 rounded-2xl bg-[#c2410c] text-white font-medium text-lg hover:bg-[#9a3412] transition"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>

        {/* WhatsApp Card + Contact Info at Last */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* WhatsApp Card */}
          <div className="bg-[#1E1B16] rounded-[2rem] p-8 md:p-10 text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Need Faster Guidance?
            </h3>

            <p className="text-white/80 leading-relaxed mb-8">
              The fastest way to receive immediate support is through
              WhatsApp consultation.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-[#D4AF37] font-medium mb-6">
                Available on WhatsApp from 9 AM to 9 PM
              </p>

              <CTA
                type="whatsapp"
                phone={data.site.whatsapp}
                message="Hello, I would like to book a consultation."
                theme={data.theme}
                label="Consult on WhatsApp"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-[2rem] border border-[#F1E3BF] p-8 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#1E1B16] mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-[#5F5A52]">
              <p>
                <strong>Location:</strong> {data.site.location}
              </p>

              <p>
                <strong>Mobile:</strong> +91 9567763538, +91 7510743538
              </p>

              <p>
                <strong>Email:</strong> {data.site.email}
              </p>

              <p>
                <strong>Languages:</strong>{" "}
                {data.site.languages.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}