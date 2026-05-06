import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
    eyebrow?: string;
    title: string;
    description?: string;
    backHref?: string;
    backLabel?: string;
}

export default function PageHeader({
    eyebrow,
    title,
    description,
    backHref = "/",
    backLabel = "Back to Home",
}: HeaderProps) {
    return (
        <section className="relative py-10 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden">

            {/* Soft Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#FFF3D4] to-transparent rounded-full blur-3xl opacity-60 -z-10" />

            <div className="max-w-5xl mx-auto">

                {/* Back Link */}
                <Link
                    href={backHref}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-700 transition-colors mb-8 text-sm font-medium"
                >
                    <ChevronLeft className="w-4 h-4" />
                    {backLabel}
                </Link>

                {/* Content */}
                <div className="max-w-3xl">

                    {eyebrow && (
                        <p className="text-[#c2410c] font-semibold tracking-[0.25em] uppercase text-xs mb-4">
                            {eyebrow}
                        </p>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1E1B16] leading-tight">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}