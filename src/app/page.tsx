import Footer from "@/components/Footer/Footer";
import CTA from "@/components/Sections/CTA";
import Features from "@/components/Sections/Features";
import Hero from "@/components/Sections/Hero";
import HowItWorks from "@/components/Sections/HowItWorks";
import Swapper from "@/components/Swapper/Swapper";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full mx-auto">
        <main>
          <Hero />
          <Swapper />
          <Features />
          <CTA />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </>
  );
}
