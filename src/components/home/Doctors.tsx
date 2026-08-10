"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, ParallaxImage } from "@/components/ui/animations";

const doctors = [
  {
    name: "[Dr. Name Placeholder]",
    role: "Lead Maxillofacial Surgeon",
    image: "/images/doctor_placeholder_1786365535621.jpg"
  },
  {
    name: "[Dr. Name Placeholder]",
    role: "Specialist Orthodontist",
    image: "/images/doctor_placeholder_1786365535621.jpg"
  },
  {
    name: "[Dr. Name Placeholder]",
    role: "Cosmetic Dentist",
    image: "/images/doctor_placeholder_1786365535621.jpg"
  },
  {
    name: "[Dr. Name Placeholder]",
    role: "Endodontist",
    image: "/images/doctor_placeholder_1786365535621.jpg"
  }
];

export function Doctors() {
  return (
    <section className="bg-white text-brand-navy py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <Reveal>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-muted-gold mb-6 block">
              Meet Our Specialists
            </span>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium max-w-2xl">
              Experts Dedicated<br />
              <span className="italic text-brand-navy/70">to Your Smile</span>
            </h2>
          </Reveal>
        </div>

        {/* Doctors Grid */}
        <StaggerContainer delayChildren={0.2} staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, idx) => (
            <StaggerItem key={idx}>
              <div className="group cursor-pointer flex flex-col items-center">
                
                {/* Image */}
                <div className="w-full aspect-[3/4] relative overflow-hidden bg-brand-ivory mb-6 rounded-[2px]">
                  <ParallaxImage 
                    src={doctor.image} 
                    alt={doctor.name}
                    parallaxAmount={20}
                    imageClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                </div>

                {/* Content */}
                <div className="text-center w-full">
                  <h3 className="font-serif text-[22px] font-medium mb-2 text-brand-navy">
                    {doctor.name}
                  </h3>
                  <p className="text-brand-navy/60 text-[14px] font-light mb-4">
                    {doctor.role}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-brand-gold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[12px] font-medium tracking-wide uppercase">View Profile</span>
                    <ArrowRight size={14} />
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
