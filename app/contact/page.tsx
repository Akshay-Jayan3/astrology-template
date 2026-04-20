import data from "../../data/site.json";
import CTA from "../../components/ui/CTA";

export const metadata = {
  title: `Contact | ${data.site.name}`,
  description: "Get in touch for astrology consultation."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] flex flex-col items-center justify-center p-6 pb-24">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-900 text-center py-12 px-6">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Connect Now</h1>
          <p className="text-gray-300 text-lg">Reach out for guidance and immediate support.</p>
        </div>
        
        <div className="p-8 md:p-12 space-y-10">
          {/* Primary CTA */}
          <div className="space-y-4 text-center">
            <h2 className="text-xl font-semibold text-gray-900">The fastest way to get answers</h2>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <p className="text-green-800 mb-6 font-medium">We are typically available on WhatsApp from 9 AM to 9 PM.</p>
              <div className="flex justify-center">
                <CTA 
                  type="whatsapp" 
                  phone={data.site.whatsapp} 
                  message="Hello, I would like to book a consultation." 
                  theme={data.theme} 
                  label="Message on WhatsApp"
                />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 text-center text-gray-600 space-y-3">
            <p className="mb-2"><strong>Location:</strong> {data.site.location}</p>
            <p><strong>Mobile:</strong> +91 9567763538, 7510743538</p>
            <p><strong>Email:</strong> {data.site.email}</p>
            <p><strong>Languages:</strong> {data.site.languages.join(", ")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
