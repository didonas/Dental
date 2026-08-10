"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, ParallaxImage } from "@/components/ui/animations";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 10, suffix: "K+", label: "Happy Patients" },
  { value: 25, suffix: "+", label: "Advanced Treatments" },
  { value: 5, suffix: "★", label: "Patient Rating" },
];

export function About() {
  return (
    <section className="bg-brand-navy text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          <Reveal delay={0.1}>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-gold mb-6 block">
              Who We Are
            </span>
          </Reveal>
          
          <StaggerContainer delayChildren={0.2} staggerChildren={0.15}>
            <StaggerItem>
              <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium mb-8">
                Redefining Dental<br />
                <span className="text-white/80">Care with Excellence</span>
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-white/70 text-[18px] leading-[1.8] max-w-lg mb-10 font-light">
                At Morgans Dental & Maxillofacial Centre, modern dentistry meets specialist expertise and compassionate patient care.
              </p>
            </StaggerItem>

            <StaggerItem>
              <button className="flex items-center gap-3 text-brand-gold hover:text-white transition-colors group mb-16 pb-2 border-b border-brand-gold/30 hover:border-white">
                <span className="text-[15px] font-medium tracking-wide uppercase">Learn More About Us</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </StaggerItem>
          </StaggerContainer>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-10 border-t border-white/10">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={0.4 + (idx * 0.1)}>
                <div className="flex flex-col">
                  <span className="font-serif text-[40px] md:text-[48px] text-brand-gold leading-none mb-3">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[13px] text-white/60 tracking-wide uppercase font-medium">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 h-[600px] lg:h-[750px] relative">
          <Reveal delay={0.3} className="w-full h-full relative rounded-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-brand-navy/20 z-10" />
            <ParallaxImage 
              src="/images/about_clinic_neutral_1786370182535.jpg"
              alt="Morgans Clinic Interior"
              parallaxAmount={40}
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
