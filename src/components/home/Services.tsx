"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X, Check, Clock, Calendar, Sparkles } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, ParallaxImage } from "@/components/ui/animations";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  image: string;
  keyBenefits: string[];
  treatmentSteps: { step: string; detail: string }[];
  idealFor: string;
  duration: string;
  appointmentSlug: string;
}

const services: ServiceItem[] = [
  {
    id: "implants",
    title: "Dental Implants",
    tagline: "PERMANENT RESTORATION",
    description: "Permanent, natural-looking tooth replacement solutions using advanced 3D planning.",
    fullOverview: "Dental implants provide a lifelong foundation for replacement teeth that look, feel, and function just like your natural teeth. Utilising 3D CBCT guided imaging, we place bio-compatible titanium or zirconia implants with sub-millimeter precision, preserving your facial structure and jawbone health.",
    image: "/images/service_implants_1786370208770.jpg",
    keyBenefits: [
      "Sub-millimeter 3D computer-guided placement",
      "Preserves natural jawbone & facial contours",
      "Bio-compatible, lifetime-lasting durability",
      "Bite & chew with complete natural strength"
    ],
    treatmentSteps: [
      { step: "01", detail: "3D CBCT scan & digital diagnostic planning" },
      { step: "02", detail: "Gentle minimally invasive guided implant placement" },
      { step: "03", detail: "Hand-crafted custom porcelain crown fitting" }
    ],
    idealFor: "Patients missing one or more teeth seeking a permanent, non-removable solution.",
    duration: "2 to 3 Visits",
    appointmentSlug: "implants"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    tagline: "AESTHETIC SMILE DESIGN",
    description: "Porcelain veneers, professional whitening, and complete smile makeovers.",
    fullOverview: "Our aesthetic smile design combines artistry with advanced dental science. From ultra-thin bespoke porcelain veneers to professional laser tooth whitening, every treatment is tailored to complement your facial symmetry, complexion, and individual smile goals.",
    image: "/images/environment/technology.jpg",
    keyBenefits: [
      "Custom hand-layered porcelain veneers",
      "Laser enamel whitening up to 8 shades brighter",
      "Digital smile simulation before treatment starts",
      "Minimally invasive enamel preservation"
    ],
    treatmentSteps: [
      { step: "01", detail: "Facial aesthetics analysis & digital mockup preview" },
      { step: "02", detail: "Microscopic enamel preparation & shade matching" },
      { step: "03", detail: "Bonding of ultra-durable porcelain ceramics" }
    ],
    idealFor: "Discolored, chipped, misaligned teeth, or patients desiring a confident, radiant smile.",
    duration: "1 to 2 Visits",
    appointmentSlug: "cosmetic"
  },
  {
    id: "ortho",
    title: "Orthodontics",
    tagline: "ALIGNMENT & HARMONY",
    description: "Clear aligners and modern braces for precise, comfortable tooth straightening.",
    fullOverview: "Straighten your smile discreetly and comfortably with our digital clear aligners and low-profile aesthetic braces. Using high-resolution intraoral scanning, we design an exact tooth movement plan without messy putty impressions.",
    image: "/images/service_ortho_1786370252582.jpg",
    keyBenefits: [
      "Near-invisible removable clear aligners",
      "3D digital impression — zero gag-reflex putty",
      "Predictable treatment tracking at every stage",
      "Corrects crowding, spacing, and bite alignment"
    ],
    treatmentSteps: [
      { step: "01", detail: "3D intraoral scan & virtual progression plan" },
      { step: "02", detail: "Custom precision aligner set delivery" },
      { step: "03", detail: "Periodic progress check-ins every 6-8 weeks" }
    ],
    idealFor: "Adults and teens seeking discreet, comfortable teeth straightening.",
    duration: "6 to 18 Months average",
    appointmentSlug: "orthodontics"
  },
  {
    id: "rootcanal",
    title: "Root Canal Treatment",
    tagline: "TOOTH PRESERVATION",
    description: "Painless microscopic endodontics to save and restore damaged teeth.",
    fullOverview: "Modern endodontics is completely gentle, comfortable, and pain-relieving. Utilising high-powered surgical operating microscopes and rotary nickel-titanium instrumentation, our endodontists eliminate internal infection and preserve your natural tooth for decades to come.",
    image: "/images/service_rootcanal_1786370266389.jpg",
    keyBenefits: [
      "Painless micro-surgical techniques & gentle local numbing",
      "High-magnification surgical operating microscopes",
      "Preserves your natural tooth structure for life",
      "Immediate relief from dental pain and temperature sensitivity"
    ],
    treatmentSteps: [
      { step: "01", detail: "Microscopic diagnostics & gentle local numbing" },
      { step: "02", detail: "Thorough 3D canal disinfection & sealing" },
      { step: "03", detail: "Reinforcing core & protective crown placement" }
    ],
    idealFor: "Severe toothache, deep decay, infection, or cracked teeth needing preservation.",
    duration: "1 Visit (Single-visit therapy)",
    appointmentSlug: "root-canal"
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    if (selectedService) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <>
      <section id="services" className="bg-brand-ivory text-brand-navy py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <Reveal>
              <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-muted-gold mb-6 block">
                Our Services
              </span>
              <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium max-w-2xl">
                Comprehensive Care<br />
                <span className="italic text-brand-navy/70">for Your Smile</span>
              </h2>
            </Reveal>
          </div>

          {/* Services Grid */}
          <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <div 
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer flex flex-col bg-white h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(7,26,42,0.12)] rounded-[2px] overflow-hidden border border-brand-navy/5"
                >
                  
                  {/* Image */}
                  <div className="w-full aspect-[4/3] relative overflow-hidden bg-brand-navy/5">
                    <ParallaxImage 
                      src={service.image} 
                      alt={service.title}
                      parallaxAmount={15}
                      imageClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-muted-gold mb-2 block">
                      {service.tagline}
                    </span>
                    <h3 className="font-serif text-[24px] font-medium mb-4 text-brand-navy group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-brand-navy/70 text-[15px] leading-[1.6] font-light mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="flex items-center gap-2 text-brand-muted-gold group-hover:text-brand-navy transition-colors mt-auto text-left"
                    >
                      <span className="text-[13px] font-semibold tracking-wider uppercase">Learn More</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#071A2A]/85 backdrop-blur-md p-4 sm:p-6 md:p-10 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 25 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white text-brand-navy rounded-[2px] shadow-2xl overflow-hidden my-auto border border-brand-navy/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-brand-navy/80 hover:bg-brand-navy text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {/* Modal Top Banner with Image */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-brand-navy">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-brand-gold mb-2 block">
                    {selectedService.tagline}
                  </span>
                  <h3 className="font-serif text-[32px] sm:text-[40px] text-white leading-tight font-medium">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
                {/* Overview Paragraph */}
                <div className="mb-8">
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider text-brand-muted-gold mb-3">
                    Treatment Overview
                  </h4>
                  <p className="text-[16px] text-brand-navy/80 leading-[1.7] font-light">
                    {selectedService.fullOverview}
                  </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="mb-8 p-6 bg-brand-ivory rounded-[2px]">
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider text-brand-navy mb-4 flex items-center gap-2">
                    <Sparkles size={16} className="text-brand-gold" />
                    Key Clinical Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedService.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-navy">
                          <Check size={12} strokeWidth={2.5} className="text-brand-navy" />
                        </div>
                        <span className="text-[14px] text-brand-navy/80 font-light leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3-Step Journey */}
                <div className="mb-8">
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider text-brand-muted-gold mb-4">
                    What to Expect
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedService.treatmentSteps.map((stepItem, idx) => (
                      <div key={idx} className="border border-brand-navy/10 p-4 rounded-[2px] flex flex-col">
                        <span className="font-serif text-[24px] text-brand-gold font-medium mb-1">
                          {stepItem.step}
                        </span>
                        <p className="text-[13px] text-brand-navy/70 font-light leading-relaxed">
                          {stepItem.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extra Specs (Timeline & Ideal For) */}
                <div className="flex flex-col sm:flex-row gap-4 border-t border-brand-navy/10 pt-6">
                  <div className="flex items-center gap-3 sm:w-1/2">
                    <div className="w-9 h-9 rounded-full bg-brand-ivory flex items-center justify-center text-brand-muted-gold flex-shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-navy/50 block">Typical Duration</span>
                      <span className="text-[14px] font-medium text-brand-navy">{selectedService.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:w-1/2">
                    <div className="w-9 h-9 rounded-full bg-brand-ivory flex items-center justify-center text-brand-muted-gold flex-shrink-0">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-navy/50 block">Suitability</span>
                      <span className="text-[14px] font-medium text-brand-navy">{selectedService.idealFor}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer CTA */}
              <div className="bg-brand-ivory px-6 sm:px-8 py-5 border-t border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="text-[13px] font-medium uppercase tracking-wider text-brand-navy/60 hover:text-brand-navy transition-colors order-2 sm:order-1"
                >
                  Close
                </button>
                <Link
                  href={`/appointment?treatment=${selectedService.appointmentSlug}`}
                  onClick={() => setSelectedService(null)}
                  className="bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy px-8 py-3.5 text-[14px] font-semibold transition-colors rounded-[2px] tracking-wide flex items-center justify-center gap-2 group w-full sm:w-auto order-1 sm:order-2"
                >
                  <span>Book Consultation for {selectedService.title}</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
