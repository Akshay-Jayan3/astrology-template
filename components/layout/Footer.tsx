import Link from "next/link";

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
              Providing clarity, peace, and direction through authentic astrological guidance for over a decade.
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
                className="inline-flex items-center gap-2 hover:text-green-400 transition-colors w-fit"
              >
                <span>💬</span> WhatsApp
              </a>
              {data.site.facebook && (
                <a 
                  href={data.site.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors w-fit"
                >
                  <span>📘</span> Facebook Page
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
