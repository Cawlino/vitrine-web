import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Background2D = () => {
  const bgRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Breathing animation on circles (runs on all viewports)
    gsap.to(circle1Ref.current, {
      scale: 1.2,
      opacity: 0.5,
      duration: 8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(circle2Ref.current, {
      scale: 0.9,
      opacity: 0.8,
      duration: 10,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    mm.add("(min-width: 768px)", () => {
      // Parallax and dissolve based on scroll — desktop only
      gsap.to(circle1Ref.current, {
        yPercent: 50,
        scale: 1.5,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });

      gsap.to(circle2Ref.current, {
        yPercent: -50,
        xPercent: 30,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5
        }
      });

      gsap.to(textRef.current, {
        xPercent: -50,
        opacity: 0.15,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 2
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={bgRef} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
      {/* Grain texture overlay */}
      <div className="grain-overlay absolute inset-0 z-10 opacity-[0.04] pointer-events-none" />

      {/* Large text with edge dissolve mask */}
      <div 
        ref={textRef} 
        className="absolute top-[30%] left-[5%] flex items-center gap-8 text-[15vw] font-bold text-slate-200/50 whitespace-nowrap tracking-tighter select-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        VITRINE WEB
      </div>

      {/* Blurry gradient circles */}
      <div 
        ref={circle1Ref}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
      ></div>
      <div 
        ref={circle2Ref}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"
      ></div>
    </div>
  );
};
