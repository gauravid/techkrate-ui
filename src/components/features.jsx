import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1. LOCAL IMAGE IMPORTS
import feature1 from "../assets/image/feature1.png";
import feature2 from "../assets/image/feature2.png";
import feature3 from "../assets/image/feature3.png";
import feature4 from "../assets/image/feature4.png";

// Utility (no external imports)
const cn = (...classes) => classes.filter(Boolean).join(" ");

// 2. LOCAL DATA ARRAY
const features = [
  {
    id: 1,
    title: "LED Headlamp",
    description:
      "Experience superior visibility and style with precision LED lighting for your every ride.",
    image: feature1,
    backgroundImage: feature1,
  },
  {
    id: 2,
    title: "Enhanced Suspension",
    description:
      "Advanced comfort and control — built for city rides and adventure terrains alike.",
    image: feature2,
    backgroundImage: feature2,
  },
  {
    id: 3,
    title: "Digital Console",
    description:
      "Next-gen tech with real-time ride stats and Bluetooth integration, right on your dash.",
    image: feature3,
    backgroundImage: feature3,
  },
  {
    id: 4,
    title: "Smart Connectivity",
    description:
      "Seamlessly sync your device to track performance and receive smart alerts.",
    image: feature4,
    backgroundImage: feature4,
  },
];

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(null);

  const slides = features;
  const total = slides.length;

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

  // ---- Animation Classes ----
  const getBaseClasses = (pos) => {
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

  // ---- Component Layout ----
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
      <div className="relative z-10 h-full v-[100px] flex flex-col items-center justify-center px-4 md:px-8">
        {/* Top Section - Title/Label */}
        <div className="absolute top-8 md:top-16 left-8 text-white text-lg md:text-xl font-semibold z-20">
          Why MOVAL?
        </div>
        <div className="w-full max-w-7xl h-full relative">
          {/* Left Thumbnail */}
          <div
            className={cn(
              "absolute bottom-[100px] left-0 z-10 transition-all duration-700 ease-out",
              getTransformClass("prev")
            )}
            onClick={handlePrev}
          >
            <div className="w-[140px] h-[200px] rounded-lg overflow-hidden border-2 border-white/30 hover:border-white/60 cursor-pointer transition-all">
              <img
                src={visibleSlides[0].slide.image}
                alt={visibleSlides[0].slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Card */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center z-20 transition-all duration-700 ease-out",
              getTransformClass("current")
            )}
          >
            <div className="relative w-[500px] max-w-[90%] bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    isTransitioning ? "scale-110" : "scale-100"
                  )}
                />
              </div>

              {/* Title + Description only */}
              <div className="p-8 text-white">
                <h2 className="text-2xl font-bold mb-2 transition-all duration-700">
                  {currentSlide.title}
                </h2>
                <p className="text-base text-white/80 leading-relaxed transition-all duration-700">
                  {currentSlide.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Thumbnail */}
          <div
            className={cn(
              "absolute top-[50px] right-0 z-10 transition-all duration-700 ease-out",
              getTransformClass("next")
            )}
            onClick={handleNext}
          >
            <div className="w-[140px] h-[200px] rounded-lg overflow-hidden border-2 border-white/30 hover:border-white/60 opacity-75 hover:opacity-100 transition-all cursor-pointer">
              <img
                src={visibleSlides[2].slide.image}
                alt={visibleSlides[2].slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30">
            <button
              onClick={handlePrev}
              className={cn(
                "pointer-events-auto p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 transform hover:scale-110 hover:shadow-lg",
                isTransitioning && "pointer-events-none opacity-50"
              )}
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={handleNext}
              className={cn(
                "pointer-events-auto p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 transform hover:scale-110 hover:shadow-lg",
                isTransitioning && "pointer-events-none opacity-50"
              )}
              disabled={isTransitioning}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-30">
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
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
