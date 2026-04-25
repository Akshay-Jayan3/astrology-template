import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";

export default function Footer({ data }: any) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 pt-16 pb-24 md:pb-8">
      {/* pb-24 on mobile ensures the StickCTA down the bottom doesn't cover footer content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              {data.site.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {data.site.subtitle || "Providing clarity, peace, and direction through authentic astrological guidance for over a decade."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-2">
              {data.navbar?.links?.map((link: any) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-400 hover:underline underline-offset-4 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="hover:text-orange-400 hover:underline underline-offset-4 transition-colors">
                  Blog Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Connect With Us</h4>
            <div className="flex flex-col space-y-3">
              <a
                href={`https://wa.me/${data.site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-green-400 transition-colors w-fit group"
              >
                <MessageCircle className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" /> WhatsApp
              </a>
              {data.site.facebook && (
                <a
                  href={data.site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-blue-400 transition-colors w-fit group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-blue-400 transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> Facebook Page
                </a>
              )}
              {data.site.email && (
                <a
                  href={`mailto:${data.site.email}`}
                  className="inline-flex items-center gap-3 hover:text-orange-400 transition-colors w-fit group"
                >
                  <Mail className="w-5 h-5 text-gray-500 group-hover:text-orange-400 transition-colors" /> Email Us
                </a>
              )}
            </div>

            <div className="pt-4 text-sm text-gray-500">
              <p>Available: 9 AM - 9 PM</p>
              <p>Based in {data.site.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {data.site.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
