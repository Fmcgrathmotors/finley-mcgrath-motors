import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ComparisonLedger from "@/components/ComparisonLedger";
import ServiceCards from "@/components/ServiceCards";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ComparisonLedger />
        <ServiceCards />
        <Testimonials />
        <FAQAccordion />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
