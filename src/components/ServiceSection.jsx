"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  Bot, BarChart3,  Handshake, Network,  CloudCog, CodeSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
  const wrapperRef = useRef(null);

  const services = [
    {
      title: "Strategy & Advisory",
      description:
        "Offering tailored strategies and scalable solutions to optimize processes and align with enterprise goals.",
      icon: <Handshake className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
    },
    {
      title: "System Integration",
      description:
        "Ensuring seamless integration and modernization of systems for enhanced interoperability and efficiency.",
      icon: <Network className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
    },
    {
      title: "AI-Driven Automation",
      description:
        "Implementing advanced AI technologies to automate workflows, reduce redundancies, and scale operations.",
      icon: <Bot className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Providing secure, scalable cloud infrastructure with high availability for mission-critical applications.",
      icon: <CloudCog className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
    },
    {
      title: "Data Analytics",
      description:
        "Converting complex data into actionable insights, enabling data-driven decisions and measurable outcomes.",
      icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
    },
    {
      title: "Enterprise Software Development",
      description:
        "Delivering customized, scalable software solutions to drive innovation and digital transformation.",
      icon: <CodeSquare className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />,
    },
  ];

  useEffect(() => {
    const title = titleRef.current;
    const cards = cardRefs.current;
    const wrapper = wrapperRef.current;

    // Title animation
    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Horizontal scrolling
    const horizontalScrollTween = gsap.to(wrapper, {
      x: () => -(wrapper.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });

    // Hover animation for cards
    cards.forEach((card) => {
      if (!card) return;
      
      const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3, ease: "power2.inOut" } });

      tl.to(card, {
        backgroundColor: "rgba(255, 255, 255, 1)",
        scale: 1.05,
      })
      .to(card.querySelector("h3"), { color: "#000000" }, "<")
      .to(card.querySelector("p"), { color: "#4B5563" }, "<")
      .to(card.querySelector("svg"), { color: "#000000" }, "<")
      .to(card.querySelector(".icon-border"), { borderColor: "#000000" }, "<");
      
      const handleEnter = () => tl.play();
      const handleLeave = () => tl.reverse();
      
      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);
    });

    // Cleanup
    return () => {
      horizontalScrollTween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-14 lg:mb-16 text-center"
        >
          Elevate Your Operations
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          ref={wrapperRef}
          className="flex flex-nowrap gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 w-max"
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative bg-white bg-opacity-5 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8
                w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] 
                h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] flex-shrink-0"
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <div className="p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full border-2 hover:shadow-[0_0_40px_rgba(20,92,207,0.35)] border-white transition-colors duration-300 icon-border">
                  {React.cloneElement(service.icon, {
                    className:
                      "text-white transition-colors duration-300",
                  })}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center text-white transition-colors duration-300 px-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center transition-colors duration-300 px-2 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;