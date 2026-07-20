import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Security from "@/components/Security";
import Blogs from "@/components/Blogs";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="frame">
        <Hero />
        <Reveal>
          <ProofBar />
        </Reveal>
        <Reveal>
          <Offer />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <Comparison />
        </Reveal>
        <Reveal>
          <Security />
        </Reveal>
        <Reveal>
          <Blogs />
        </Reveal>
        <Reveal>
          <PreFooterCta />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
