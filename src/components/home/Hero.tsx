"use client";

import { useRef, useEffect, useState } from "react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TOTAL_FRAMES = 30;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const platformRef = useRef<HTMLDivElement>(null);

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(2, "0");
      img.src = `/images/teeth_3d/frame_${paddedIndex}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  useGSAP(() => {
    if (!containerRef.current || !canvasRef.current || !imagesLoaded) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 1200;

    const images = imagesRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const proxy = { frame: 0 };
      gsap.to(proxy, {
        frame: TOTAL_FRAMES - 1,
        duration: 1,
        delay: 1,
        roundProps: "frame",
        onUpdate: () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(images[proxy.frame], 0, 0, canvas.width, canvas.height);
        }
      });
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // Slightly shorter scroll so it doesn't drag on forever
          scrub: 1,
          pin: true,
        },
      });

      const frameProxy = { frame: 0 };
      tl.to(frameProxy, {
        frame: TOTAL_FRAMES - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
        onUpdate: () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(images[frameProxy.frame], 0, 0, canvas.width, canvas.height);
        }
      }, 0);

      tl.to(platformRef.current, { 
        opacity: 0.7, 
        scale: 1.02, 
        filter: "brightness(1.5) sepia(0.5)", 
        duration: 1 
      }, 0);
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", 
          scrub: 1,
          pin: true,
        },
      });

      const frameProxy = { frame: 0 };
      tl.to(frameProxy, {
        frame: TOTAL_FRAMES - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
        onUpdate: () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(images[frameProxy.frame], 0, 0, canvas.width, canvas.height);
        }
      }, 0);
    });

  }, { scope: containerRef, dependencies: [imagesLoaded] });

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] min-h-[800px] overflow-hidden bg-brand-navy pt-24">
      
      {/* Background glow effects to match reference slightly */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1440px] w-full mx-auto px-10 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10 h-full">
        
        {/* Left Content */}
        <div className="w-full md:w-[45%] flex flex-col items-start z-20">
          
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
            <button className="bg-brand-gold text-brand-navy px-8 py-4 text-[15px] font-semibold transition-colors hover:bg-white rounded-[2px] w-full sm:w-auto text-center tracking-wide">
              Book Appointment
            </button>
            <button className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors group">
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center transition-colors bg-black/5">
                <Play size={16} className="ml-1 fill-current" />
              </div>
              <span className="text-[14px] font-medium tracking-wide uppercase">Watch Our Story</span>
            </button>
          </div>

        </div>

        {/* Right Content - Tooth Visual */}
        <div className="w-full md:w-[50%] h-full relative flex flex-col items-center justify-center z-10 pt-10">
          
          {/* Tooth Canvas Scrubber */}
          <div className="relative w-full h-[85%] z-20 flex items-center justify-center -ml-10 mt-10">
            <canvas
              ref={canvasRef}
              className="w-full max-w-[800px] h-auto object-contain scale-[1.15] drop-shadow-2xl"
            />
          </div>

          {/* Presentation Platform */}
          <div ref={platformRef} className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[110%] aspect-[4/1] pointer-events-none flex flex-col items-center justify-center z-10 -ml-5">
            <div className="absolute w-[90%] h-full bg-gradient-to-b from-[#0D263B] to-transparent rounded-[100%] scale-y-[0.3] opacity-80 blur-[2px]" />
            <div className="absolute w-[70%] h-full border border-brand-gold/40 rounded-[100%] scale-y-[0.3]" />
            <div className="absolute w-[90%] h-full border border-brand-gold/20 rounded-[100%] scale-y-[0.3]" />
            <div className="absolute w-[110%] h-full border border-brand-gold/10 rounded-[100%] scale-y-[0.3]" />
            <div className="absolute w-[40%] h-full bg-brand-gold/20 rounded-[100%] scale-y-[0.3] blur-[40px]" />
          </div>

        </div>

      </div>

    </section>
  );
}
