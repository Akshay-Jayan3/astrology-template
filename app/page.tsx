
import data from "../data/site.json";
import Hero from "../components/sections/Hero";
import ProblemGrid from "../components/sections/ProblemGrid";
import TrustStrip from "../components/sections/TrustStrip";
import AboutPreview from "../components/sections/AboutPreview";
import ServicesPreview from "../components/sections/ServicesPreview";
import Testimonials from "../components/sections/Testimonials";
import HowItWorks from "../components/sections/HowItWorks";
import CTASection from "../components/sections/CTASection";
import StickyCTA from "../components/sections/StickyCTA";

export default function Home() {
  return <main>
    <Hero data={{ ...data.hero, facebookUrl: data.site.facebook }} phone={data.site.whatsapp} theme={data.theme} />
    {/* <ProblemGrid problems={data.problems} phone={data.site.whatsapp} theme={data.theme} /> */}
    <TrustStrip data={data.trust} theme={data.theme} />
    <AboutPreview data={data.about} theme={data.theme} />
    <ServicesPreview services={data.services} phone={data.site.whatsapp} theme={data.theme} />
    <Testimonials items={data.testimonials} theme={data.theme} />
    <HowItWorks steps={data.howItWorks} theme={data.theme} />
    <CTASection phone={data.site.whatsapp} theme={data.theme} type="whatsapp" />
    <StickyCTA phone={data.site.whatsapp} theme={data.theme} />
  </main>
}
