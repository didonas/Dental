"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 w-full">
      <div className="max-w-[1440px] mx-auto px-10 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col gsap-header-text text-white">
          <span className="font-serif text-[28px] leading-none tracking-wide font-medium">
            MORGANS
          </span>
          <span className="text-[7.5px] tracking-[0.25em] uppercase mt-1 opacity-70">
            Dental & Maxillofacial Centre
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: "Home", active: true },
            { name: "About" },
            { name: "Services" },
            { name: "Technology" },
            { name: "Doctors" },
            { name: "Gallery" },
            { name: "Contact" },
          ].map((item) => (
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

        {/* CTA Button */}
        <button className="hidden md:block bg-[#D3BC91] text-[#071A2A] px-6 py-2.5 text-[13px] font-medium transition-colors hover:bg-white rounded-sm">
          Book Appointment
        </button>

      </div>
    </header>
  );
}
