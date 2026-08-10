"use client";

import { Activity, Shield, Heart, Fingerprint } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const benefits = [
  {
    title: "Advanced Technology",
    description: "State-of-the-art equipment for precise treatment",
    icon: Activity
  },
  {
    title: "Expert Specialists",
    description: "Experienced professionals you can trust",
    icon: Shield
  },
  {
    title: "Comfortable Care",
    description: "Patient-focused treatment in a calming space",
    icon: Heart
  },
  {
    title: "Personalised Treatment",
    description: "Solutions tailored for every individual smile",
    icon: Fingerprint
  }
];

export function Benefits() {
  return (
    <section className="bg-brand-navy border-t border-white/5 pb-12 relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Reveal delay={0.2} direction="up" className="bg-white/5 border border-white/10 rounded-[2px] backdrop-blur-md -mt-16 relative z-30 shadow-2xl overflow-hidden p-8 md:p-12">
          <StaggerContainer delayChildren={0.4} staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:divide-x divide-white/10">
            {benefits.map((benefit, idx) => (
              <StaggerItem key={idx}>
                <div className="flex flex-col items-start lg:px-8 group h-full">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-serif text-[20px] font-medium mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-[14px] leading-[1.6] font-light">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Reveal>
      </div>
    </section>
  );
}
