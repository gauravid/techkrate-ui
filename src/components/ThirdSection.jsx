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
      className="relative flex flex-col justify-between bg-black text-white min-h-screen overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={CarsBg || "/placeholder.svg"}
          alt="Techkrate workspace"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div ref={decorationRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <Circle className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 text-white opacity-0 -translate-x-1/2 -translate-y-1/2" />
        <Circle className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[35rem] lg:h-[35rem] xl:w-[40rem] xl:h-[40rem] text-white opacity-0 translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-20 flex-grow flex flex-col lg:flex-row items-center justify-between py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 max-w-7xl mx-auto w-full gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        
        {/* Heading Section */}
        <div className="flex flex-col items-start text-left w-full lg:w-1/2">
          <h2
            ref={headingRef}
            className="font-Helix text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight tracking-tight"
          >
            Building a Legacy of Excellence 
          </h2>
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="flex flex-col items-start text-left w-full lg:w-1/2">
          <p
            ref={paragraphRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 text-gray-300 max-w-full lg:max-w-2xl leading-relaxed"
          >
            Techkrate is a SaaS and software development company. Our mission is
            to craft software solutions that simplify and enhance business
            operations worldwide.
          </p>
          <Link
            ref={linkRef}
            to="/About"
            className="group inline-flex items-center px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition duration-300 ease-in-out"
          >
            Discover More
            <ArrowRight
              className="ml-2 sm:ml-2.5 md:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}