import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Technology } from "@/components/home/Technology";
import { Doctors } from "@/components/home/Doctors";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Gallery } from "@/components/home/Gallery";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy font-sans antialiased selection:bg-brand-gold/30 selection:text-white">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Technology />
      <Doctors />
      <WhyChooseUs />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
