"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Layers, Bot, Cloud, BarChart3, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const services = [
    {
      title: "Strategy & Advisory",
      description:
        "Offering tailored strategies and scalable solutions to optimize processes and align with enterprise goals.",
      icon: <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />,
    },
    {
      title: "System Integration",
      description:
        "Ensuring seamless integration and modernization of systems for enhanced interoperability and efficiency.",
      icon: <Layers className="h-6 w-6 sm:h-8 sm:w-8" />,
    },
    {
      title: "AI-Driven Automation",
      description:
        "Implementing advanced AI technologies to automate workflows, reduce redundancies, and scale operations.",
      icon: <Bot className="h-6 w-6 sm:h-8 sm:w-8" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Providing secure, scalable cloud infrastructure with high availability for mission-critical applications.",
      icon: <Cloud className="h-6 w-6 sm:h-8 sm:w-8" />,
    },
    {
      title: "Data Analytics",
      description:
        "Converting complex data into actionable insights, enabling data-driven decisions and measurable outcomes.",
      icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
    },
    {
      title: "Enterprise Software Development",
      description:
        "Delivering customized, scalable software solutions to drive innovation and digital transformation.",
      icon: <Terminal className="h-6 w-6 sm:h-8 sm:w-8" />,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardRefs.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animation
      const cardBg = card.querySelector('.card-bg');
      const tl = gsap.timeline({ paused: true });

      tl.to(cardBg, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });

      tl.to(
        card,
        {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.3"
      );

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 text-center">
          Elevate Your Operations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative bg-white bg-opacity-5 rounded-lg p-4 sm:p-6 overflow-hidden group transition-transform duration-300 ease-in-out"
            >
              <div className="card-bg absolute inset-0 bg-white opacity-0 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="p-2 sm:p-3 rounded-full border-2 border-white group-hover:border-black transition-colors duration-300">
                  {React.cloneElement(service.icon, {
                    className: "text-white group-hover:text-black transition-colors duration-300",
                  })}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-center text-white group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 text-center group-hover:text-gray-800 transition-colors duration-300">
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

