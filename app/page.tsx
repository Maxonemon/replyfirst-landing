import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import ScrollFX from "@/components/ScrollFX";
import StickyCTA from "@/components/StickyCTA";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Hero from "@/components/sections/Hero";
import MathSection from "@/components/sections/MathSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Proof from "@/components/sections/Proof";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      {/* #page background is tweened Ink <-> Paper by ThemeSwitcher */}
      <main id="page" className="relative bg-ink">
        <Hero />
        <MathSection />
        <HowItWorks />
        <Proof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <ThemeSwitcher />
      <ScrollFX />
    </>
  );
}
