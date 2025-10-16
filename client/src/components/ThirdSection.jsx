"use client";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Circle } from "lucide-react";
import BGImage from "../assets/image/bgImage.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const decorationRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const decoration = decorationRef.current;
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.fromTo(content.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.3 })
      .fromTo(decoration.children, { opacity: 0, scale: 0.9 }, { opacity: 0.1, scale: 1, duration: 1.5 }, "-=1")
      .fromTo(image, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, "-=1");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-between bg-black text-white min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div ref={decorationRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <Circle className="absolute top-0 left-0 w-96 h-96 text-white opacity-0 -translate-x-1/2 -translate-y-1/2" />
        <Circle className="absolute bottom-0 right-0 w-[40rem] h-[40rem] text-white opacity-0 translate-x-1/4 translate-y-1/4" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto mt-8 mb-3 text-center">
        <h2 className="font-Helix text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">About Us</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-5 text-gray-300 leading-relaxed">
          Techkrate is a SaaS and software development company. Our mission is to craft software solutions that simplify and enhance business
          operations worldwide.
        </p>
        <Link
          to="/About"
          className="group inline-flex items-center px-8 py-4 text-lg sm:text-xl font-semibold rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition duration-300 ease-in-out"
        >
          Discover More
          <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out" aria-hidden="true" />
        </Link>
      </div>

      <div ref={imageRef} className="relative z-10 w-full max-w-7xl mx-auto">
        <img
          src={BGImage || "/placeholder.svg"}
          alt="Techkrate workspace"
          className="w-full rounded-2xl shadow-2xl object-cover object-center max-h-[50vh] mx-auto"
        />
      </div>
    </section>
  );
}
