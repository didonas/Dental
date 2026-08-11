"use client";

import { useState, useRef, useEffect } from "react";
import { Reveal } from "@/components/ui/animations";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  return (
    <section className="bg-brand-ivory text-brand-navy py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal>
            <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.1] font-medium mb-4">
              Real Care.<br />
              <span className="italic text-brand-navy/70">Real Transformations.</span>
            </h2>
            <p className="text-brand-navy/60 text-[14px] uppercase tracking-wider">
              Drag to compare
            </p>
          </Reveal>
        </div>

        {/* Slider Container */}
        <Reveal delay={0.2} className="w-full">
          <div 
            ref={containerRef}
            className="relative w-full max-w-[900px] mx-auto aspect-[16/10] md:aspect-[16/9] bg-[#101010] rounded-[2px] overflow-hidden cursor-ew-resize select-none shadow-2xl group"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* After Image (Background - Cleaned) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/after_tooth.png" 
              alt="Healthy Smile After" 
              className="absolute inset-0 w-full h-full object-contain"
              draggable={false}
            />

            {/* Before Image (Clipped overlay - Original Damaged) */}
            <div 
              className="absolute inset-0 right-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/teeth_3d/frame_00.png" 
                alt="Damaged Smile Before" 
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
              />
            </div>

            {/* Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-12 h-12 rounded-full bg-white text-brand-navy flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <MoveHorizontal size={20} />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white text-[12px] uppercase tracking-widest px-4 py-2 rounded-full pointer-events-none">
              Before
            </div>
            <div className="absolute top-6 right-6 bg-white/90 text-brand-navy text-[12px] uppercase tracking-widest px-4 py-2 rounded-full pointer-events-none">
              After
            </div>

          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-8">
          <p className="text-[12px] text-brand-navy/40 uppercase tracking-widest text-center">
            * Results may vary between patients. Example case only.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
