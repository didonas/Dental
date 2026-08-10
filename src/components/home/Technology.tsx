"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { Monitor, ScanFace, ShieldCheck, Target } from "lucide-react";

const techList = [
  {
    title: "Digital Diagnostics",
    description: "High-resolution digital intraoral scanners for comfortable, impression-free diagnostics.",
    icon: Monitor
  },
  {
    title: "3D Dental Imaging",
    description: "CBCT scanning for precise bone analysis and flawless implant planning.",
    icon: ScanFace
  },
  {
    title: "Modern Sterilisation",
    description: "Hospital-grade autoclaves and strict protocols ensuring absolute patient safety.",
    icon: ShieldCheck
  },
  {
    title: "Precision Treatment Planning",
    description: "Computer-guided workflows for predictable, aesthetically perfect results.",
    icon: Target
  }
];

export function Technology() {
  return (
    <section className="bg-[#051320] text-white py-24 lg:py-32 relative overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <Reveal>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-gold mb-6 block">
              Innovation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium">
              Advanced Dentistry.<br />
              <span className="text-white/60">Driven by Technology.</span>
            </h2>
          </Reveal>
        </div>

        {/* Technology Grid */}
        <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {techList.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="flex flex-col items-start p-8 rounded-[2px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 h-full">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-8">
                  <item.icon size={20} className="text-brand-gold" />
                </div>
                <h3 className="font-serif text-[22px] font-medium mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-[1.6] font-light">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
