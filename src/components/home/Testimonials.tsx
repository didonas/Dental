"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "[Patient Name Placeholder]",
    text: "[Placeholder Testimonial Text. This text should represent a realistic experience of a patient at the clinic, detailing their procedure and satisfaction with the results.]",
    procedure: "Dental Implants"
  },
  {
    name: "[Patient Name Placeholder]",
    text: "[Placeholder Testimonial Text. This text should represent a realistic experience of a patient at the clinic, detailing their procedure and satisfaction with the results.]",
    procedure: "Cosmetic Makeover"
  },
  {
    name: "[Patient Name Placeholder]",
    text: "[Placeholder Testimonial Text. This text should represent a realistic experience of a patient at the clinic, detailing their procedure and satisfaction with the results.]",
    procedure: "Orthodontics"
  }
];

export function Testimonials() {
  return (
    <section className="bg-brand-ivory text-brand-navy py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <Reveal>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-muted-gold mb-6 block">
              Testimonials
            </span>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium mb-4">
              Stories Behind<br />
              <span className="italic text-brand-navy/70">Every Smile.</span>
            </h2>
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer delayChildren={0.2} staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white p-10 rounded-[2px] flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-500 shadow-[0_10px_30px_rgba(7,26,42,0.03)] hover:shadow-[0_20px_40px_rgba(7,26,42,0.08)]">
                
                <Quote size={40} className="text-brand-ivory absolute top-8 right-8 rotate-180" />
                
                <div className="flex items-center gap-1 mb-6 text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="text-brand-navy/70 text-[16px] leading-[1.7] font-light mb-10 flex-grow italic">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="mt-auto">
                  <h4 className="font-serif text-[18px] font-medium text-brand-navy mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[12px] text-brand-muted-gold uppercase tracking-wider font-semibold">
                    {testimonial.procedure}
                  </p>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
