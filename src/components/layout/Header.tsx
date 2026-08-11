"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", active: true },
    { name: "About" },
    { name: "Services" },
    { name: "Technology" },
    { name: "Doctors" },
    { name: "Gallery" },
    { name: "Contact" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[100] py-6 w-full pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-10 md:px-12 flex items-center justify-between pointer-events-auto">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col gsap-header-text text-white relative z-[110]">
            <span className="font-serif text-[28px] leading-none tracking-wide font-medium">
              MORGANS
            </span>
            <span className="text-[7.5px] tracking-[0.25em] uppercase mt-1 opacity-70">
              Dental & Maxillofacial Centre
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={cn(
                  "text-[13px] font-medium transition-colors relative pb-1 gsap-header-text",
                  item.active ? "text-white" : "text-white/70 hover:opacity-100"
                )}
              >
                {item.name}
                {item.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-current opacity-100" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/appointment" className="hidden md:block bg-[#D3BC91] text-[#071A2A] px-6 py-2.5 text-[13px] font-medium transition-colors hover:bg-white rounded-[2px] relative z-[110]">
            Book Appointment
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white relative z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#071A2A] flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 mb-12">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[20px] font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Link 
              href="/appointment" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#D3BC91] text-[#071A2A] px-10 py-4 text-[16px] font-semibold transition-colors hover:bg-white rounded-[2px]"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
