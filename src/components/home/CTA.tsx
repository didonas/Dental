"use client";

import { Reveal } from "@/components/ui/animations";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-brand-navy text-white py-32 lg:py-48 relative overflow-hidden">
      
      {/* Subtle Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle moving abstract shapes linked to scroll via fixed positioned pseudo elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] border border-white/5 rounded-full blur-[2px] pointer-events-none opacity-50" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] border border-brand-gold/5 rounded-full blur-[4px] pointer-events-none opacity-30" />

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
        
        <Reveal delay={0.1}>
          <h2 className="font-serif text-[56px] md:text-[80px] leading-[1.05] font-medium mb-8">
            Ready to Transform<br />
            <span className="italic text-brand-gold">Your Smile?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-white/70 text-[18px] md:text-[20px] leading-[1.6] font-light mb-12 max-w-lg">
            Schedule a consultation with our dental specialists.
          </p>
        </Reveal>

        <Reveal delay={0.5} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link href="/appointment" className="bg-brand-gold text-brand-navy px-10 py-5 text-[15px] font-semibold transition-colors hover:bg-white rounded-[2px] tracking-wide flex items-center justify-center gap-3 group w-full sm:w-auto">
            Book Appointment
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button className="bg-white/10 text-white px-10 py-5 text-[15px] font-semibold transition-colors hover:bg-white/20 border border-white/10 rounded-[2px] tracking-wide flex items-center justify-center gap-3 w-full sm:w-auto">
            <Phone size={18} />
            Call Clinic
          </button>
        </Reveal>

      </div>
    </section>
  );
}
