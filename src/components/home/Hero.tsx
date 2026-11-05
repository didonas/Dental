"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Play, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function Hero() {
  const toothContainerRef = useRef<HTMLDivElement>(null);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const LENS_RADIUS = 120; // 240px diameter

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoModalOpen(false);
    };
    if (isVideoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  const updateCoordinates = useCallback((clientX: number, clientY: number) => {
    if (!toothContainerRef.current) return;
    const rect = toothContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setLensPos({ x, y });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateCoordinates(e.clientX, e.clientY);
    if (!isHovering) setIsHovering(true);
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    updateCoordinates(e.clientX, e.clientY);
    setIsHovering(true);
    setHasInteracted(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    if (!isHovering) setIsHovering(true);
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    setIsHovering(true);
    setHasInteracted(true);
  };

  return (
    <>
      <section id="home" className="relative w-full h-[100vh] min-h-[800px] overflow-hidden bg-brand-navy pt-24 select-none">
        <div className="max-w-[1440px] w-full mx-auto px-10 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10 h-full">
          {/* Left Content */}
          <div className="w-full md:w-[45%] flex flex-col items-start z-30 pointer-events-auto">
            
            <h1 className="font-serif text-[72px] lg:text-[88px] xl:text-[96px] leading-[0.96] text-white font-medium mb-8 tracking-tight">
              Excellence<br />
              in Every<br />
              <span className="text-brand-gold italic font-serif">Smile</span>
            </h1>
            
            <p className="text-white/80 text-[18px] leading-[1.6] max-w-sm mb-12 font-sans font-light">
              Advanced Dental Care with Compassion<br />
              and Cutting-edge Technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link href="/appointment" className="bg-brand-gold text-brand-navy px-8 py-4 text-[15px] font-semibold transition-colors hover:bg-white rounded-[2px] w-full sm:w-auto text-center tracking-wide block">
                Book Appointment
              </Link>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center transition-all group-hover:scale-110 bg-black/5">
                  <Play size={16} className="ml-1 fill-current" />
                </div>
                <span className="text-[14px] font-medium tracking-wide uppercase">Watch Our Story</span>
              </button>
            </div>

          </div>

          {/* Right Content - Tooth Visual with Magnifying Glass Inspector */}
          <div className="w-full md:w-[55%] h-full relative flex flex-col items-center justify-center z-10 pt-6">
            
            {/* Tooth Container with Hover Inspector */}
            <div 
              ref={toothContainerRef}
              className={`relative w-full max-w-[700px] h-[75%] md:h-[82%] z-20 flex items-center justify-center -ml-5 ${isHovering ? "cursor-none" : "cursor-crosshair"}`}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={() => setIsHovering(false)}
            >
              {/* Base Layer: Damaged Tooth */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/teeth_3d/frame_00.png"
                alt="Damaged Tooth Inspection"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl pointer-events-none select-none transition-transform duration-500 ease-out"
                draggable={false}
              />

              {/* Revealed Layer: Clean, White, Restored Tooth inside the Lens */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-150"
                style={{
                  opacity: isHovering ? 1 : 0,
                  clipPath: isHovering ? `circle(${LENS_RADIUS}px at ${lensPos.x}px ${lensPos.y}px)` : 'circle(0px at 0 0)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/teeth_3d/frame_00.png"
                  alt="Restored Enamel Preview"
                  className="absolute inset-0 w-full h-full object-contain brightness-[1.55] contrast-[1.12] saturate-[0.1] hue-rotate-[-10deg]"
                  draggable={false}
                />
              </div>

              {/* Magnifying Glass Lens Frame, Reflection, and Handle */}
              {isHovering && (
                <div
                  className="absolute pointer-events-none z-30 transition-transform duration-75 ease-out"
                  style={{
                    left: `${lensPos.x}px`,
                    top: `${lensPos.y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Outer Glass Rim */}
                  <div 
                    className="relative rounded-full border-[3.5px] border-brand-gold shadow-[0_15px_45px_rgba(0,0,0,0.65),0_0_30px_rgba(201,173,120,0.35)] flex items-center justify-center overflow-visible"
                    style={{
                      width: `${LENS_RADIUS * 2}px`,
                      height: `${LENS_RADIUS * 2}px`,
                    }}
                  >
                    {/* Inner Metallic Bezel Ring */}
                    <div className="absolute inset-1 rounded-full border border-white/40 pointer-events-none" />

                    {/* Diagonal Glass Sheen Highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none" />

                    {/* Upper-Left Light Flare */}
                    <div className="absolute top-5 left-7 w-12 h-5 rounded-full bg-white/30 blur-[1px] rotate-[-35deg] pointer-events-none" />

                    {/* Healthy Enamel Floating Badge */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#071A2A]/90 border border-brand-gold/60 text-brand-gold text-[10px] uppercase tracking-widest px-3 py-0.5 rounded-full backdrop-blur-md shadow-xl whitespace-nowrap font-medium pointer-events-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                      Healthy Enamel
                    </div>

                    {/* Magnifying Glass Handle */}
                    <div 
                      className="absolute -bottom-12 -right-12 w-16 h-3 bg-gradient-to-r from-brand-gold via-[#edd9b2] to-brand-gold rounded-full shadow-2xl origin-top-left rotate-45 border border-black/30 pointer-events-none flex items-center justify-end pr-1"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#071A2A]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Initial Helper Hint Badge */}
              {!hasInteracted && (
                <div className="absolute top-[28%] right-[8%] z-20 bg-[#071A2A]/85 border border-brand-gold/60 text-white text-[12px] tracking-wider px-4 py-2 rounded-full backdrop-blur-md shadow-2xl flex items-center gap-2 pointer-events-none animate-pulse">
                  <Sparkles size={14} className="text-brand-gold" />
                  <span>Hover over tooth to inspect restoration</span>
                </div>
              )}

            </div>

            {/* Presentation Platform */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[90%] aspect-[4/1] pointer-events-none flex flex-col items-center justify-center z-10 -ml-5">
              {/* Base shadow underneath */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[30%] bg-black/40 blur-[15px] rounded-[100%]" />
              {/* Clean presentation rings */}
              <div className="absolute w-[70%] h-full border border-brand-gold/20 rounded-[100%] scale-y-[0.25]" />
              <div className="absolute w-[90%] h-full border border-brand-gold/10 rounded-[100%] scale-y-[0.25]" />
            </div>

          </div>

        </div>

      </section>

      {/* Watch Our Story Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#071A2A]/90 backdrop-blur-md p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-black rounded-[4px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-brand-gold/30"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-white text-white hover:text-brand-navy flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
                aria-label="Close video"
              >
                <X size={20} />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  src="/videos/our-story.mp4"
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video Footer Caption */}
              <div className="bg-[#051320] px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <h4 className="font-serif text-[18px] text-white font-medium">
                    Our Story • Advanced Dental Care
                  </h4>
                  <p className="text-[13px] text-white/60 font-light">
                    Discover our commitment to painless, technology-driven treatments.
                  </p>
                </div>
                <Link
                  href="/appointment"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-brand-gold text-brand-navy px-5 py-2 text-[13px] font-semibold hover:bg-white transition-colors rounded-[2px] whitespace-nowrap"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
