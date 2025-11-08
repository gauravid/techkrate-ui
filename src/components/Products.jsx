import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import MovalLogo from "../assets/image/MovalLogo.png";
import CARSLogo from "../assets/image/CARSLogo.jpg";
import MovalBG from "../assets/image/MovalBG.webp";
import CarsBG from "../assets/image/CarsBG.webp";

const ProductCard = ({ name, logo, description, background, to }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const enterAnimation = gsap.to(card, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
      paused: true
    });

    const handleEnter = () => enterAnimation.play();
    const handleLeave = () => enterAnimation.reverse();

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <Link 
      to={to}
      ref={cardRef}
      className="relative group overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] transition-all duration-200"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ 
          backgroundImage: `url(${background})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 text-white">
        {/* Top Section */}
        {name && (
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight font-Helix">
            {name}
          </h3>
        )}

        {/* Center Logo and Description Section */}
        <div className="w-full flex-grow flex flex-col items-center justify-center p-2">
          {/* Center Logo */}
          <div className="w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[280px] aspect-[2/1] rounded-2xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm lg:text-base text-center mt-2 sm:mt-3 lg:mt-4 max-w-xs sm:max-w-sm font-medium font-Helix leading-relaxed px-2">
            {description}
          </p>
        </div>
        
      </div>
    </Link>
  );
};

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(
      containerRef.current.children,
      { 
        y: 50,
        opacity: 0 
      },
      { 
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div className="w-full flex flex-col items-center pb-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center text-white font-Helix">
        Products
      </h1>
      <div 
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-5xl"
      >
        <ProductCard 
          name="" 
          logo={CARSLogo}
          background={CarsBG}
          to="/products/cars"
          description="A Hybrid platform for chartered engineers enabling consignment assessment, report generation & admin tasks on the move."
        />
        <ProductCard 
          name="" 
          logo={MovalLogo}
          background={MovalBG}
          to="/products/moval"
          description="An AI-powered cloud platform revolutionizing motor surveys through seamless automation & intelligent data analysis."
        />
      </div>
    </div>
  );
};

export default Products;