"use client";

import { Reveal } from "@/components/ui/animations";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#030d14] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            
            {/* Brand */}
            <div className="flex flex-col">
              <h2 className="font-serif text-[28px] tracking-wide mb-6">
                MORGANS<span className="text-brand-gold">.</span>
              </h2>
              <p className="text-white/50 text-[14px] leading-[1.6] max-w-xs mb-8 font-light">
                Redefining modern dentistry with specialist expertise and compassionate patient care.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold transition-colors cursor-pointer">
                  In
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold transition-colors cursor-pointer">
                  Fb
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold transition-colors cursor-pointer">
                  Ig
                </div>
              </div>
            </div>

            {/* Links 1 */}
            <div className="flex flex-col">
              <h4 className="text-[14px] font-semibold tracking-widest uppercase mb-8 text-white/90">
                Clinic
              </h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">About Us</a></li>
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Our Team</a></li>
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Technology</a></li>
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Gallery</a></li>
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Contact</a></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div className="flex flex-col">
              <h4 className="text-[14px] font-semibold tracking-widest uppercase mb-8 text-white/90">
                Treatments
              </h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Dental Implants</a></li>
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Cosmetic Dentistry</a></li>
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Orthodontics</a></li>
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Root Canal</a></li>
                <li><a href="#" className="text-white/50 hover:text-brand-gold transition-colors text-[15px]">Maxillofacial</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col">
              <h4 className="text-[14px] font-semibold tracking-widest uppercase mb-8 text-white/90">
                Stay Updated
              </h4>
              <p className="text-white/50 text-[14px] leading-[1.6] mb-6 font-light">
                Subscribe to our newsletter for the latest updates and dental health tips.
              </p>
              <div className="flex w-full">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-l-[2px] px-4 py-3 outline-none text-[14px] focus:border-brand-gold transition-colors" 
                />
                <button className="bg-brand-gold text-brand-navy px-4 flex items-center justify-center rounded-r-[2px] hover:bg-white transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Bottom Bar */}
        <Reveal delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <p className="text-white/30 text-[13px]">
              &copy; {new Date().getFullYear()} Morgans Dental & Maxillofacial Centre. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-white transition-colors text-[13px]">Privacy Policy</a>
              <a href="#" className="text-white/30 hover:text-white transition-colors text-[13px]">Terms of Service</a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
