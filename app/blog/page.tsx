import data from "../../data/site.json";
import Link from "next/link";
import CTASection from "../../components/sections/CTASection";
import StickyCTA from "../../components/sections/StickyCTA";

export const metadata = {
  title: `Astrology Insights & Blog | ${data.site.name}`,
  description: "Read our latest articles on Vedic astrology, marriage timing, career guidance, and remedies."
};

const DUMMY_POSTS = [
  {
    slug: "understanding-marriage-delays",
    title: "Understanding Astrological Reasons for Marriage Delays",
    excerpt: "Learn how the placement of Saturn, Mars or Jupiter can impact your marriage timing and which remedies actually work.",
    date: "April 18, 2026",
    category: "Marriage"
  },
  {
    slug: "career-changes-and-dasha",
    title: "When is the right time to change your job? A Dasha perspective",
    excerpt: "Your planetary periods (Dashas) reflect times of stability and transition. Discover how to align your career moves with your chart.",
    date: "April 15, 2026",
    category: "Career"
  },
  {
    slug: "daily-remedies-for-peace",
    title: "Simple Daily Remedies for Mental Peace & Financial Growth",
    excerpt: "Small consistent actions tailored to your zodiac sign that can invite prosperity and remove daily obstacles.",
    date: "April 10, 2026",
    category: "Guidance"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F1] pb-24">
      {/* Header */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Insights & Guidance</h1>
          <p className="text-xl text-gray-600">
            Articles to help you understand how astrology shapes life's journey.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {DUMMY_POSTS.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-3xl p-8 shadow-sm border border-transparent hover:border-orange-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 text-sm font-medium mb-4">
                <span className="text-orange-600 uppercase tracking-wider">{post.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0 relative">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {post.excerpt}
              </p>
              <div className="text-orange-700 font-medium group-hover:underline">
                Read Article →
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection phone={data.site.whatsapp} theme={data.theme} type="whatsapp" />
      <StickyCTA phone={data.site.whatsapp} theme={data.theme} />
    </main>
  );
}
