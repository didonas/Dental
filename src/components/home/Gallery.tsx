"use client";

import { useState } from "react";
import { Reveal, ParallaxImage } from "@/components/ui/animations";
import { X, Maximize2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/images/clinic_interior_1786365439022.jpg",
  "/images/treatment_room_1786365456966.jpg",
  "/images/about_clinic_neutral_1786370182535.jpg",
  "/images/service_cosmetic_1786370221004.jpg" // 4th distinct image
];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="bg-white py-24 lg:py-32 relative">
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#051320]/95 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg}
              alt="Clinic Gallery Enlarge"
              className="max-w-full max-h-[90vh] object-contain rounded-[2px] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal>
            <span className="uppercase tracking-[0.2em] text-[12px] font-semibold text-brand-muted-gold mb-6 block">
              Our Environment
            </span>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium text-brand-navy">
              Designed for Comfort.<br />
              <span className="italic text-brand-navy/70">Built for Excellence.</span>
            </h2>
          </Reveal>
        </div>

        {/* Asymmetric Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Large Left Image */}
          <div className="md:col-span-8 h-[400px] md:h-[600px] cursor-zoom-in group overflow-hidden relative rounded-[2px]" onClick={() => setSelectedImg(images[0])}>
            <Reveal delay={0.1} className="w-full h-full">
              <ParallaxImage 
                src={images[0]} 
                alt="Clinic Interior"
                parallaxAmount={25}
                imageClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 size={24} />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Top Right Image */}
            <div className="h-[250px] md:h-[calc(300px-16px)] cursor-zoom-in group overflow-hidden relative rounded-[2px]" onClick={() => setSelectedImg(images[1])}>
              <Reveal delay={0.3} className="w-full h-full">
                <ParallaxImage 
                  src={images[1]} 
                  alt="Treatment Room"
                  parallaxAmount={15}
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </Reveal>
            </div>

            {/* Bottom Right Image */}
            <div className="h-[250px] md:h-[calc(300px-16px)] cursor-zoom-in group overflow-hidden relative rounded-[2px]" onClick={() => setSelectedImg(images[2])}>
              <Reveal delay={0.5} className="w-full h-full">
                <ParallaxImage 
                  src={images[2]} 
                  alt="Consultation Space"
                  parallaxAmount={15}
                  imageClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </Reveal>
            </div>

          </div>
        </div>

        {/* Second Row for 4th distinct image */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 mt-6 lg:mt-8">
          <div className="h-[300px] md:h-[400px] cursor-zoom-in group overflow-hidden relative rounded-[2px]" onClick={() => setSelectedImg(images[3])}>
            <Reveal delay={0.2} className="w-full h-full">
              <ParallaxImage 
                src={images[3]} 
                alt="Technology & Equipment"
                parallaxAmount={20}
                imageClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 size={24} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
