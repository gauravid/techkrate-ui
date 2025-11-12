// src/components/SmoothScroll.jsx
"use client";

import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Inner component that uses the Lenis instance
const LenisSync = () => {
  const lenis = useLenis(({ scroll }) => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    console.log('🔍 Lenis object:', lenis);
    
    if (lenis) {
      console.log('✅ Lenis initialized successfully!');
      
      const raf = (time) => {
        lenis.raf(time * 1000);
        ScrollTrigger.update();
      };
      
      gsap.ticker.add(raf);

      return () => {
        gsap.ticker.remove(raf);
      };
    } else {
      console.log('❌ Lenis is NOT initialized');
    }
  }, [lenis]);

  return null; // This component doesn't render anything
};

// Outer component that provides Lenis context
const SmoothScroll = ({ children }) => {
  console.log('🔵 SmoothScroll component rendered');

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, 
        duration: 2, 
        smoothTouch: false, // Changed to false - better for mobile
        smoothWheel: true ,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.2,    // Adjust scroll speed
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <LenisSync /> {/* Sync component inside ReactLenis */}
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;