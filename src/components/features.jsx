import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Utility
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Sample images (replace with your actual imports)
const feature1 = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80";
const feature2 = "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80";
const feature3 = "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80";
const feature4 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";

const features = [
  {
    id: 1,
    title: "LED Headlamp",
    description: "Experience superior visibility and style with precision LED lighting for your every ride.",
    image: feature1,
    backgroundImage: feature1,
  },
  {
    id: 2,
    title: "Enhanced Suspension",
    description: "Advanced comfort and control — built for city rides and adventure terrains alike.",
    image: feature2,
    backgroundImage: feature2,
  },
  {
    id: 3,
    title: "Digital Console",
    description: "Next-gen tech with real-time ride stats and Bluetooth integration, right on your dash.",
    image: feature3,
    backgroundImage: feature3,
  },
  {
    id: 4,
    title: "Smart Connectivity",
    description: "Seamlessly sync your device to track performance and receive smart alerts.",
    image: feature4,
    backgroundImage: feature4,
  },
];

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const slides = features;
  const total = slides.length;

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getPrevIndex = () => (currentIndex - 1 + total) % total;
  const getNextIndex = () => (currentIndex + 1) % total;

  const getVisibleSlides = () => [
    { id: "prev", slide: slides[getPrevIndex()] },
    { id: "current", slide: slides[currentIndex] },
    { id: "next", slide: slides[getNextIndex()] },
  ];

  const startTransition = useCallback(
    (newIndex, direction) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTransitionDirection(direction);
      setCurrentIndex(newIndex);

      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionDirection(null);
      }, 700);
    },
    [isTransitioning]
  );

  const handleNext = useCallback(() => {
    startTransition(getNextIndex(), "next");
  }, [startTransition, getNextIndex]);

  const handlePrev = useCallback(() => {
    startTransition(getPrevIndex(), "prev");
  }, [startTransition, getPrevIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const visibleSlides = getVisibleSlides();
  const currentSlide = slides[currentIndex];
  const nextSlide = slides[getNextIndex()];

  // Desktop Animation Classes
  const getBaseClasses = (pos) => {
    if (isMobile) return pos === "current" ? "scale-100 translate-x-0 opacity-100" : "scale-0 opacity-0";
    
    switch (pos) {
      case "current":
        return "scale-100 translate-x-0 translate-y-0";
      case "prev":
        return "scale-100 translate-x-[-30%] opacity-75";
      case "next":
        return "scale-100 translate-x-[20%] opacity-75";
      default:
        return "";
    }
  };

  const getNextTransition = (pos) => {
    if (isMobile) {
      return pos === "current" 
        ? "scale-0 translate-x-[-100%] opacity-0" 
        : pos === "next" 
        ? "scale-100 translate-x-0 opacity-100"
        : "scale-0 opacity-0";
    }
    
    switch (pos) {
      case "current":
        return "scale-[0.65] translate-x-[-100%] translate-y-[80%] opacity-50";
      case "prev":
        return "scale-[0.6] translate-x-[-150%] translate-y-[50%] opacity-0";
      case "next":
        return "scale-100 translate-x-[-50%] translate-y-[-50%]";
      default:
        return "";
    }
  };

  const getPrevTransition = (pos) => {
    if (isMobile) {
      return pos === "current" 
        ? "scale-0 translate-x-[100%] opacity-0" 
        : pos === "prev" 
        ? "scale-100 translate-x-0 opacity-100"
        : "scale-0 opacity-0";
    }
    
    switch (pos) {
      case "current":
        return "scale-[0.65] translate-x-[100%] translate-y-[-80%] opacity-50";
      case "prev":
        return "scale-100 translate-x-[-50%] translate-y-[-50%]";
      case "next":
        return "scale-[0.6] translate-x-[150%] translate-y-[-50%] opacity-0";
      default:
        return "";
    }
  };

  const getTransformClass = (pos) => {
    if (!isTransitioning) return getBaseClasses(pos);
    return transitionDirection === "next"
      ? getNextTransition(pos)
      : getPrevTransition(pos);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background transition */}
      <div className="absolute inset-0 z-0">
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out",
            isTransitioning ? "opacity-0" : "opacity-100"
          )}
          style={{ backgroundImage: `url('${currentSlide.backgroundImage}')` }}
        />
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out",
            isTransitioning ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url('${nextSlide.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Top Section - Title/Label */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-16 left-4 sm:left-6 md:left-8 text-white text-base sm:text-lg md:text-xl font-semibold z-20">
          Why MOVAL?
        </div>
        
        <div className="w-full max-w-7xl h-full relative flex items-center justify-center">
          {/* Left Thumbnail - Hidden on Mobile */}
          {!isMobile && (
            <div
              className={cn(
                "absolute bottom-[100px] left-0 z-10 transition-all duration-700 ease-out hidden md:block",
                getTransformClass("prev")
              )}
              onClick={handlePrev}
            >
              <div className="w-[100px] lg:w-[140px] h-[140px] lg:h-[200px] rounded-lg overflow-hidden border-2 border-white/30 hover:border-white/60 cursor-pointer transition-all">
                <img
                  src={visibleSlides[0].slide.image}
                  alt={visibleSlides[0].slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Main Card */}
          <div
            className={cn(
              "flex items-center justify-center z-20 transition-all duration-700 ease-out w-full",
              isMobile ? "relative" : "absolute inset-0",
              getTransformClass("current")
            )}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[500px] bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    isTransitioning ? "scale-110" : "scale-100"
                  )}
                />
              </div>

              {/* Title + Description */}
              <div className="p-4 sm:p-6 md:p-8 text-white">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 transition-all duration-700">
                  {currentSlide.title}
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed transition-all duration-700">
                  {currentSlide.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Thumbnail - Hidden on Mobile */}
          {!isMobile && (
            <div
              className={cn(
                "absolute top-[50px] right-0 z-10 transition-all duration-700 ease-out hidden md:block",
                getTransformClass("next")
              )}
              onClick={handleNext}
            >
              <div className="w-[100px] lg:w-[140px] h-[140px] lg:h-[200px] rounded-lg overflow-hidden border-2 border-white/30 hover:border-white/60 opacity-75 hover:opacity-100 transition-all cursor-pointer">
                <img
                  src={visibleSlides[2].slide.image}
                  alt={visibleSlides[2].slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Arrows */}
          <div className={cn(
            "absolute flex justify-between pointer-events-none z-30",
            isMobile 
              ? "inset-x-2 sm:inset-x-4 top-1/2 -translate-y-1/2" 
              : "inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2"
          )}>
            <button
              onClick={handlePrev}
              className={cn(
                "pointer-events-auto p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 transform hover:scale-110 hover:shadow-lg",
                isTransitioning && "pointer-events-none opacity-50"
              )}
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </button>

            <button
              onClick={handleNext}
              className={cn(
                "pointer-events-auto p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 transform hover:scale-110 hover:shadow-lg",
                isTransitioning && "pointer-events-none opacity-50"
              )}
              disabled={isTransitioning}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-1.5 sm:gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                let direction = null;
                if (index > currentIndex) direction = "next";
                if (index < currentIndex) direction = "prev";
                if (!isTransitioning && index !== currentIndex) {
                  startTransition(index, direction);
                }
              }}
              className={cn(
                "h-1.5 sm:h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-6 sm:w-8 bg-white"
                  : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}