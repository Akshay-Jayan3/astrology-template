import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F9F6F1] px-6 text-center relative overflow-hidden">
      {/* Subtle textured background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%231F2937' opacity='0.8' /%3E%3Ccircle cx='70' cy='45' r='1' fill='%231F2937' opacity='0.6' /%3E%3Cpath d='M20 20 L70 45' stroke='%231F2937' stroke-width='0.5' fill='none' opacity='0.3' /%3E%3C/svg%3E")`, 
          backgroundSize: '120px 120px' 
        }}
      />

      <div className="max-w-2xl mx-auto space-y-8 relative z-10">
        
        {/* 404 Visual */}
        <div className="relative">
          <h1 className="text-9xl font-serif font-black text-gray-900 opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">🔭</span>
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            The path is unclear
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-lg mx-auto">
            It seems the page you are looking for has been moved or doesn't exist in the current alignment.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link 
            href="/" 
            className="px-8 py-3.5 bg-orange-700 text-white font-medium rounded-xl hover:bg-orange-800 transition-colors shadow-sm"
          >
            Return to Home
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-3.5 bg-transparent border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </section>
  );
}
