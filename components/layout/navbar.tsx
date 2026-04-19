"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import CTA from "../ui/CTA";

export default function Navbar({ data }: any) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-100 shadow-sm ${isMobileMenuOpen ? 'bg-[#F9F6F1]' : 'bg-white/80 backdrop-blur-xl'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between relative z-50">

                {/* Brand */}
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-2xl font-bold tracking-tight text-gray-900 hover:text-orange-800 transition-colors">
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
                <div className="flex items-center gap-4">
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
                        aria-label="Toggle Navigation"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full h-[calc(100dvh-5rem)] bg-[#F9F6F1] border-t border-gray-100 flex flex-col pt-8 overflow-y-auto shadow-2xl animate-in fade-in duration-200">
                    <div className="flex flex-col items-center justify-start space-y-10 px-6 pb-24">
                        {data.navbar?.links?.map((link: any) => (
                            <Link 
                               key={link.href} 
                               href={link.href} 
                               onClick={() => setIsMobileMenuOpen(false)}
                               className="text-3xl font-serif text-gray-900 hover:text-orange-700 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link 
                           href="/blog" 
                           onClick={() => setIsMobileMenuOpen(false)}
                           className="text-3xl font-serif text-gray-900 hover:text-orange-700 transition-colors relative"
                        >
                            Blog
                            <span className="absolute -top-3 -right-8 text-sm text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full font-bold">NEW</span>
                        </Link>
                        
                        <div className="pt-8 w-full flex justify-center border-t border-orange-200/50 mt-10">
                            <CTA
                                type="whatsapp"
                                phone={data.site.whatsapp}
                                label="Connect Now"
                                theme={data.theme}
                            />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}