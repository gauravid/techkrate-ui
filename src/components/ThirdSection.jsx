

"use client";

import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Circle } from "lucide-react";
import CarsBg from "../assets/image/CarsBG.webp";

gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const decorationRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const decoration = decorationRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const link = linkRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.fromTo(heading, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
      .fromTo(paragraph, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.7")
      .fromTo(link, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(
        decoration.children,
        { opacity: 0, scale: 0.9 },
        { opacity: 0.1, scale: 1, duration: 1.5 },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-between bg-black text-white min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={CarsBg || "/placeholder.svg"}
          alt="Techkrate workspace"
          className="w-full h-full object-cover rounded object-center"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div ref={decorationRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <Circle className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 text-white opacity-0 -translate-x-1/2 -translate-y-1/2" />
        <Circle className="absolute bottom-0 right-0 w-80 h-80 sm:w-[35rem] sm:h-[35rem] md:w-[40rem] md:h-[40rem] text-white opacity-0 translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-20 flex-grow flex flex-col lg:flex-row items-center justify-between py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto w-full gap-8 lg:gap-16">
        
        {/* Heading Section */}
        <div className="flex flex-col items-start text-left w-full lg:w-1/2">
          <h2
            ref={headingRef}
            className="font-Helix text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
          >
            Building a Legacy of Excellence 
          </h2>
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="flex flex-col items-start text-left w-full lg:w-1/2">
          <p
            ref={paragraphRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-full lg:max-w-2xl"
          >
            Techkrate is a SaaS and software development company. Our mission is
            to craft software solutions that simplify and enhance business
            operations worldwide.
          </p>
          <Link
            ref={linkRef}
            to="/About"
            className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition duration-300 ease-in-out"
          >
            Discover More
            <ArrowRight
              className="ml-3 h-5 w-5 sm:h-6 sm:w-6 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
