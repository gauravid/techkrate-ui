"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Footer from "../components/Footer";
import Features from "../components/features";

// 🖼️ Import local images
import feature1 from "../assets/image/feature1.png";
import feature2 from "../assets/image/feature2.png";
import feature3 from "../assets/image/feature3.png";
import comp from "../assets/image/comp.png"

gsap.registerPlugin(ScrollTrigger);

const Product1 = () => {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const logosRef = useRef(null);
  const ctaRef = useRef(null);

  const heroImg = "/src/assets/image/MovalBG.webp";
  const topRightLogo = "/src/assets/image/MovalLogo.png";

  // 🧩 Local feature images used here
  const features = [
    {
      image: feature1,
      title: "AI-powered Routing & Predictions",
      description:
        "Reduce travel time and fuel usage with a routing engine that learns from data. Predict congestion, delays, and reroute dynamically.",
    },
    {
      image: feature2,
      title: "Fleet Management & Observability",
      description:
        "Centralize vehicle telemetry and maintenance. Get complete visibility with real-time dashboards and cost analytics.",
    },
    {
      image: feature3,
      title: "Enterprise-grade Security",
      description:
        "Moval ensures encrypted communication, audit logs, and strict access control for total operational safety.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Hero animation
    gsap.fromTo(
      heroTextRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    // Logo fade-in
    gsap.fromTo(
      logosRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: logosRef.current,
          start: "top 90%",
        },
      }
    );

    // CTA animation
    gsap.fromTo(
      ctaRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      <div className="ml-0 lg:ml-[250px] transition-all duration-150">

        {/* top-right logo */}
        <div className="fixed right-6 top-6 z-40 hidden lg:block">
          <img
            src={topRightLogo}
            alt="Top-right logo"
            className="w-20 h-20 rounded-md shadow-md"
          />
        </div>

        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative h-[75vh] flex items-center justify-center overflow-hidden"
          aria-label="Hero"
        >
          
          <div className="absolute inset-0 bg-black/60" />
          <div
            ref={heroTextRef}
            className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center -translate-y-10"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Moval</span>{" "}
              <span className="text-blue-400">by Techkrate</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Intelligent mobility platform — fleet orchestration, AI-powered
              routing, and real-time insights for smarter transport operations.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/start"
                className="inline-block text-white/80 border border-white/10 py-3 px-6 rounded-full hover:bg-white/10 transition"
              >
                Start Free Trial
              </a>
              <a
                href="/product-demo"
                className="inline-block text-white/80 border border-white/10 py-3 px-6 rounded-full hover:bg-white/10 transition"
              >
                Request Demo
              </a>
            </div>
          </div>
        </section>

       {/* TRUSTED LOGO (single image) */}
      <section className="py-12 flex justify-center items-center">
        <img
          src={comp}
          alt="Trusted Companies"
          className="max-w-[80%] md:max-w-[60%] opacity-90"
        />
      </section>

        
        {/* WHY MOVAL SECTION */}
<Features />

{/* 🌍 Interactive 3D Globe Section */}


        {/* CTA SECTION */}
        <section ref={ctaRef} className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 p-12 text-center shadow-lg">
              <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to accelerate with Moval?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Start a pilot or schedule a demo — unlock smarter, greener, and
                more efficient mobility operations.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full"
                >
                  Talk to Sales
                </a>
                <a
                  href="/docs"
                  className="text-white/90 border border-white/20 py-3 px-6 rounded-full"
                >
                  View Docs
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer pageType="product" />
      </div>
    </div>
  );
};

export default Product1;
