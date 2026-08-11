"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, ParallaxImage } from "@/components/ui/animations";

const services = [
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement solutions using advanced 3D planning.",
    image: "/images/service_implants_1786370208770.jpg"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Porcelain veneers, professional whitening, and complete smile makeovers.",
    image: "/images/environment/technology.jpg"
  },
  {
    title: "Orthodontics",
    description: "Clear aligners and modern braces for precise, comfortable tooth straightening.",
    image: "/images/service_ortho_1786370252582.jpg"
  },
  {
    title: "Root Canal Treatment",
    description: "Painless microscopic endodontics to save and restore damaged teeth.",
    image: "/images/service_rootcanal_1786370266389.jpg"
  }
];

export function Services() {
  return (
    <section id="services" className="bg-brand-ivory text-brand-navy py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <Reveal>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-muted-gold mb-6 block">
              Our Services
            </span>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium max-w-2xl">
              Comprehensive Care<br />
              <span className="italic text-brand-navy/70">for Your Smile</span>
            </h2>
          </Reveal>
        </div>

        {/* Services Grid */}
        <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <StaggerItem key={idx}>
              <div className="group cursor-pointer flex flex-col bg-white h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(7,26,42,0.1)] rounded-[2px] overflow-hidden">
                
                {/* Image */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-brand-navy/5">
                  <ParallaxImage 
                    src={service.image} 
                    alt={service.title}
                    parallaxAmount={15}
                    imageClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-[24px] font-medium mb-4 text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="text-brand-navy/70 text-[15px] leading-[1.6] font-light mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-brand-muted-gold group-hover:text-brand-navy transition-colors mt-auto">
                    <span className="text-[13px] font-medium tracking-wide uppercase">Learn More</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
