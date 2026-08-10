"use client";

import { Check, ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, ParallaxImage } from "@/components/ui/animations";
import Link from "next/link";

const points = [
  "Patient-first approach",
  "Advanced sterilisation protocols",
  "Modern comfortable environment",
  "Transparent treatment process",
  "Specialist dental care"
];

export function WhyChooseUs() {
  return (
    <section className="bg-brand-navy text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          <Reveal delay={0.1}>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-gold mb-6 block">
              Why Choose Us
            </span>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium mb-12">
              Your Smile,<br />
              <span className="text-white/80">Our Commitment</span>
            </h2>
          </Reveal>
          
          <StaggerContainer delayChildren={0.3} staggerChildren={0.15} className="flex flex-col gap-6 mb-12 w-full">
            {points.map((point, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-brand-gold" />
                  </div>
                  <span className="text-[17px] font-light text-white/90">
                    {point}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.8}>
            <Link href="/appointment" className="bg-brand-gold text-brand-navy px-8 py-4 text-[15px] font-semibold transition-colors hover:bg-white rounded-[2px] tracking-wide flex items-center gap-3 group w-max">
              Book Your Appointment
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 h-[600px] lg:h-[750px] relative">
          <Reveal delay={0.4} direction="left" className="w-full h-full relative rounded-[2px] overflow-hidden bg-brand-ivory/10">
            <ParallaxImage 
              src="/images/treatment_room_1786365456966.jpg" 
              alt="Morgans Treatment Room"
              parallaxAmount={40}
            />
            <div className="absolute inset-0 bg-brand-navy/10 z-10" />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
