"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "[123 Luxury Clinic Blvd, Medical District, London, UK]"
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    content: "[+44 (0) 20 1234 5678]"
  },
  {
    icon: Mail,
    title: "Email",
    content: "[contact@morgansdental.com]"
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "[Mon - Fri: 9:00 AM - 6:00 PM]\n[Sat: 10:00 AM - 2:00 PM]"
  }
];

export function Contact() {
  return (
    <section className="bg-brand-ivory text-brand-navy py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column - Contact Info */}
        <div className="w-full lg:w-5/12 flex flex-col items-start z-10">
          <Reveal delay={0.1}>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-muted-gold mb-6 block">
              Contact Us
            </span>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium mb-16">
              Get in Touch
            </h2>
          </Reveal>
          
          <StaggerContainer delayChildren={0.3} staggerChildren={0.15} className="flex flex-col gap-10 w-full mb-12">
            {contactInfo.map((info, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-brand-navy/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={20} className="text-brand-navy/70" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold tracking-wide uppercase mb-2">
                      {info.title}
                    </span>
                    <span className="text-[16px] font-light text-brand-navy/80 whitespace-pre-line leading-[1.6]">
                      {info.content}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.8} className="flex gap-4">
            <button className="border-b border-brand-navy pb-1 text-[13px] uppercase tracking-widest font-semibold hover:text-brand-gold hover:border-brand-gold transition-colors">
              Get Directions
            </button>
          </Reveal>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-7/12">
          <Reveal delay={0.4} direction="up" className="bg-white p-10 md:p-14 rounded-[2px] shadow-[0_20px_60px_rgba(7,26,42,0.04)]">
            <h3 className="font-serif text-[28px] font-medium mb-8">
              Send us a Message
            </h3>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-wider text-brand-navy/60 font-medium">First Name</label>
                  <input type="text" className="w-full bg-brand-navy/5 border border-transparent focus:border-brand-gold focus:bg-white transition-all duration-300 rounded-[2px] px-4 py-3 outline-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-wider text-brand-navy/60 font-medium">Last Name</label>
                  <input type="text" className="w-full bg-brand-navy/5 border border-transparent focus:border-brand-gold focus:bg-white transition-all duration-300 rounded-[2px] px-4 py-3 outline-none" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase tracking-wider text-brand-navy/60 font-medium">Email Address</label>
                <input type="email" className="w-full bg-brand-navy/5 border border-transparent focus:border-brand-gold focus:bg-white transition-all duration-300 rounded-[2px] px-4 py-3 outline-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase tracking-wider text-brand-navy/60 font-medium">How can we help?</label>
                <textarea rows={4} className="w-full bg-brand-navy/5 border border-transparent focus:border-brand-gold focus:bg-white transition-all duration-300 rounded-[2px] px-4 py-3 outline-none resize-none" />
              </div>

              <button className="bg-brand-navy text-white px-8 py-4 text-[15px] font-semibold transition-colors hover:bg-brand-gold rounded-[2px] tracking-wide mt-4 flex items-center justify-center gap-3 group w-full">
                Submit Request
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
