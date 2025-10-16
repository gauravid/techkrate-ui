"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import bgVid from "/bgVid.mp4";
import LalitBG from "../assets/image/LalitBG.webp";
import UtkarshBG from "../assets/image/UtkarshBG.webp";

gsap.registerPlugin(ScrollTrigger);

const CharterItem = ({ title, content }) => (
  <li className="group relative p-4 sm:p-6 bg-zinc-900/50 backdrop-blur-lg rounded-xl transition-all duration-500 hover:bg-zinc-900/80">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <h4 className="text-lg sm:text-xl font-Helix font-semibold mb-2 text-white">{title}</h4>
    <p className="text-sm sm:text-base text-zinc-400">{content}</p>
  </li>
);

const AboutUs = () => {
  const headerRef = useRef(null);
  const charterRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fadeInAnimation = (element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
        }
      );
    };

    fadeInAnimation(headerRef.current);
    fadeInAnimation(charterRef.current);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <video className="fixed top-0 left-0 w-screen h-screen object-cover opacity-40" autoPlay loop muted playsInline>
        <source src={bgVid} type="video/mp4" />
      </video>

      <div className="relative z-10 px-4 sm:px-6 md:px-16 py-10 sm:py-20 space-y-16 sm:space-y-32">
        {/* Header Section */}
        <div ref={headerRef} className="max-w-6xl mx-auto">
          <h1 className="font-Helix text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 mt-16 sm:mt-32 text-white">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-6 sm:mt-10 space-y-4 sm:space-y-6">
            Your gateway to simplifying the complex. We develop software and SaaS solutions that empower individuals and businesses to navigate and
            thrive in an increasingly digital world. Our approach transforms intricate problems into clear, actionable tools that work for everyone,
            regardless of expertise or experience.
            <br />
            <br />
            Imagine easily managing your business operations, scaling confidently, or solving daily challenges with absolute clarity. Whether you're a
            seasoned tech professional or a first-time user, Techkrate ensures that the experience is intuitive, powerful, and adaptable to your
            needs.
            <br />
            <br />
            We don't just build software; we create tools that bridge the gap between complexity and understanding. The future is complex—Techkrate
            makes it clear.
          </p>
        </div>

        {/* Our Charter Section */}
        <div ref={charterRef} className="text-center max-w-6xl mx-auto">
          <h1 className="font-Helix text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white">Our Charter</h1>
          <div className="space-y-6 sm:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
              At Techkrate, we are not merely building software; we are architecting the next generation of SaaS solutions that empower businesses to
              thrive in a hyper-digital economy.
            </p>
            <ul className="grid gap-4 sm:gap-6">
              <CharterItem
                title="Operational Simplification at Scale"
                content="We specialize in abstracting complexity from mission-critical workflows, delivering SaaS platforms that streamline operations and drive unparalleled efficiency across organizations of all sizes."
              />
              <CharterItem
                title="User-Centric Innovation Framework"
                content="Our development philosophy prioritizes intuitive UX design, robust API integrations, and modular functionality, ensuring our platforms align seamlessly with evolving business needs and user expectations."
              />
              <CharterItem
                title="Enterprise-Grade Reliability and Excellence"
                content="We uphold the highest standards of security, performance, and compliance, delivering resilient SaaS infrastructures that enterprises can trust to handle their most sensitive operations."
              />
              <CharterItem
                title="Vision-Driven Ecosystem Leadership"
                content="As a catalyst for transformation, we lead with a visionary approach—fostering ecosystems of innovation that empower businesses to redefine industry benchmarks and deliver exponential value."
              />
            </ul>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="space-y-12 sm:space-y-16">
          <h1 className="font-Helix text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-32 text-white text-center">Leading Techkrate</h1>

          {/* Lalit Singh Chauhan */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 bg-black rounded-2xl overflow-hidden max-h-[500px]">
            <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <h3 className="font-Helix text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white">Lalit Singh Chauhan</h3>
              <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-8">Chief Executive Officer</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-12">
                At Techkrate, we envision a future where complexity is no longer a barrier to innovation. Our mission is to empower businesses with
                transformative tools that enable them to navigate the digital era with confidence and clarity. This is not just about building
                software—it&apos;s about redefining the way the world works, connects, and grows.
              </p>
              <a
                href="https://www.linkedin.com/in/lalit-singh-chauhan-86b42425"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
            <div className="max-h-[500px] items-center">
              <img src={LalitBG || "/placeholder.svg"} alt="Lalit Singh Chauhan's portrait" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Utkarsh Chauhan */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch bg-black rounded-2xl overflow-hidden max-h-[500px]">
            <div className="order-2 lg:order-1 max-h-[500px] flex items-center">
              <img src={UtkarshBG || "/placeholder.svg"} alt="Utkarsh Chauhan's portrait" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <h3 className="font-Helix text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white">Utkarsh Chauhan</h3>
              <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-8">Chief Operating Officer</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-12">
                Operational excellence is the backbone of innovation, and at Techkrate, we ensure every process, platform, and solution is engineered
                for scalability, precision, and impact. Our commitment lies in bridging the gap between cutting-edge technology and seamless
                execution, empowering businesses to achieve their highest potential.
              </p>
              <a
                href="https://www.linkedin.com/in/utkarsh-chauhan-techkrate"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AboutUs;