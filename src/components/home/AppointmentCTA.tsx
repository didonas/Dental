"use client";

import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function AppointmentCTA() {
  return (
    <section className="bg-brand-navy-light relative overflow-hidden py-32 lg:py-48">
      {/* Background Subtle Tooth */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none mix-blend-screen scale-150 md:scale-100">
        <Image 
          src="/images/tooth_08.jpg"
          alt="Tooth Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
          Ready to Transform<br />Your Smile?
        </h2>
        
        <p className="text-white/70 text-xl max-w-2xl mx-auto mb-12 font-light">
          Schedule a consultation with our dental specialists.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <MagneticButton variant="primary" className="text-lg px-12 py-5">
            Book Appointment
          </MagneticButton>
          <MagneticButton variant="outline" className="text-lg px-12 py-5">
            Call Clinic
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
