"use client";

import Link from "next/link";
import { useState } from "react";
import CTA from "../ui/CTA";

export default function Navbar({ data }: any) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between">

                {/* Brand */}
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-2xl font-bold tracking-tight text-gray-900 hover:text-orange-800 transition-colors z-50">
                    {data.site.name}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    {data.navbar?.links?.map((link: any) => (
                        <Link 
                           key={link.href} 
                           href={link.href} 
                           className="hover:text-orange-700 hover:underline underline-offset-4 decoration-2 decoration-orange-300 transition-all"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link 
                       href="/blog" 
                       className="hover:text-orange-700 hover:underline underline-offset-4 decoration-2 decoration-orange-300 transition-all relative"
                    >
                        Blog
                        <span className="absolute -top-3 -right-4 bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
                    </Link>
                </nav>

                {/* Desktop CTA & Mobile Toggle */}
                <div className="flex items-center gap-4 z-50">
                    <div className="hidden md:block">
                        <CTA
                            type="whatsapp"
                            phone={data.site.whatsapp}
                            label="Talk to Us"
                            theme={data.theme}
                        />
                    </div>
                    
                    {/* Hamburger Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                    {data.navbar?.links?.map((link: any) => (
                        <Link 
                           key={link.href} 
                           href={link.href} 
                           onClick={() => setIsMobileMenuOpen(false)}
                           className="text-2xl font-serif text-gray-900 hover:text-orange-700 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link 
                       href="/blog" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="text-2xl font-serif text-gray-900 hover:text-orange-700 transition-colors relative"
                    >
                        Blog
                        <span className="ml-2 text-sm text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full align-middle">NEW</span>
                    </Link>
                    
                    <div className="pt-8">
                        <CTA
                            type="whatsapp"
                            phone={data.site.whatsapp}
                            label="Talk to Us"
                            theme={data.theme}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}