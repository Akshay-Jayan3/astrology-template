"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import CTA from "../ui/CTA";
import Image from "next/image";

export default function Navbar({ data }: any) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* HEADER */}
            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b shadow-lg border-gray-100">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-16 flex items-center justify-between">

                    {/* Brand */}
                    <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-serif text-2xl font-bold text-gray-900"
                    >
                        {data.site.name}
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                        {data.navbar?.links?.map((link: any) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-orange-700 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/articles"
                            className="hover:text-orange-700 transition-colors relative"
                        >
                            Articles
                            <span className="absolute -top-3 -right-4 bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                                NEW
                            </span>
                        </Link>
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-4">

                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <CTA
                                type="whatsapp"
                                phone={data.site.whatsapp}
                                label="Chat"
                                theme={data.theme}
                            />
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                        >
                            <span
                                className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* FULL SCREEN MOBILE MENU */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Background */}
                <div className="absolute inset-0 bg-[#F9F6F1]">

                    {/* Lamps background */}
                    <div className="absolute inset-0 opacity-[0.08]">
                        <Image
                            src="/images/lamps-bg.webp"
                            alt="temple lamps"
                            fill
                            className="object-cover blur-sm scale-105"
                        />
                    </div>

                    {/* Soft overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center px-6 text-center space-y-10">

                    {/* Links */}
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

                    {/* Blog */}
                    <Link
                        href="/blog"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-serif text-gray-900 hover:text-orange-700 transition-colors"
                    >
                        Blog
                    </Link>

                    {/* CTA */}
                    <div className="pt-6">
                        <CTA
                            type="whatsapp"
                            phone={data.site.whatsapp}
                            label="Connect on WhatsApp"
                            theme={data.theme}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}