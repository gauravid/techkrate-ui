import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ArrowRight, ChevronDown } from "lucide-react";
import bgVid from "/bgVid.mp4";
import ThirdSection from "./ThirdSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroSection = () => {
  const containerRef = useRef(null);
  const textContainersRef = useRef([]);
  const heroTextRefs = useRef([]);
  const subHeadingRefs = useRef([]);
  const buttonRef = useRef([]);
  const dotsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      title: "Turning Complexity Into Clarity",
      subHeading:
        "We distil complex challenges into clear solutions, empowering organizations to advance precisely and purposefully.",
      link: "/about",
    },
    {
      title: "Redefining Motor Claims Processing",
      subHeading:
        "Moval revolutionizes motor claims handling by integrating advanced technology with industry-specific workflows.",
      link: "/about",
    },
    {
      title: "AI-Driven Assessment Intelligence",
      subHeading:
        "Moval excels at extracting complex data from estimate PDF files, while also generating an Initial Loss Assessment through damage detection.",
      link: "/about",
    },
    {
      title: "Regulatory-Compliant Survey Reports",
      subHeading:
        "Moval ensures survey reports strictly adhere to IRDA guidelines, maintaining compliance and professionalism.",
      link: "/about",
    },
    {
      title: "Centralized Control & Mobile Approvals",
      subHeading:
        "Moval provides robust tools for multi-office management, enabling admins to give necessary workflow-related approvals.",
      link: "/about",
    },
  ];

  const [totalSlides] = useState(slides.length);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Detect mobile devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (index) => {
    gsap.to(buttonRef.current[index], {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  useEffect(() => {
    const textContainers = textContainersRef.current;

    // ✅ Mobile: Simple vertical scroll with fade-in
    if (isMobile) {
      heroTextRefs.current.forEach((heroTextRef, index) => {
        if (!heroTextRef) return;
        
        gsap.from(heroTextRef, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContainersRef.current[index],
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(subHeadingRefs.current[index], {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContainersRef.current[index],
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        });
      });
      return;
    }

    // ✅ Desktop: Horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalSlides - 1),
        end: `+=${window.innerWidth * (totalSlides - 1)}`,
        anticipatePin: 1,
        onUpdate: (self) => {
          const newSlide = Math.round(self.progress * (totalSlides - 1));
          setCurrentSlide(newSlide);
        },
      },
    });

    tl.to(textContainers, {
      xPercent: -100 * (totalSlides - 1),
      ease: "none",
    });

    heroTextRefs.current.forEach((heroTextRef, index) => {
      if (!heroTextRef) return;
      
      const words = heroTextRef.innerText.split(" ");
      heroTextRef.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block"><span class="inline-block">${word}</span></span>`
        )
        .join(" ");

      const splitWords = heroTextRef.querySelectorAll("span > span");

      gsap.from(splitWords, {
        duration: 1,
        y: "100%",
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: textContainersRef.current[index],
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        subHeadingRefs.current[index],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContainersRef.current[index],
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalSlides, isMobile]);

  const scrollToSlide = (index) => {
    if (isMobile) {
      // Mobile: Smooth scroll to element
      const element = textContainersRef.current[index];
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentSlide(index);
    } else {
      // Desktop: GSAP scroll
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: window.innerWidth * index,
          offsetY: 0,
        },
        ease: "power3.inOut",
      });
      setCurrentSlide(index);
    }
  };

  const scrollToThirdSection = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: "#next-section",
      ease: "power3.inOut",
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`overflow-hidden relative font-Helix ${
          isMobile ? 'min-h-screen' : 'h-screen'
        }`}
      >
        {/* Background Image */}
        <img
          src="/src/assets/image/AboutBG.png"
          alt="About background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        
        {/* ✅ Background Video - Hidden on mobile for performance */}
        {!isMobile && (
          <video
            className="absolute top-0 right-0 w-auto h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
            preload="none"
            poster="/src/assets/image/AboutBG.png"
          >
            <source src={bgVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        
        {/* ✅ Responsive flex direction */}
        <div className={`relative z-20 h-full flex font-Helix ${
          isMobile ? 'flex-col' : ''
        }`}>
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (textContainersRef.current[index] = el)}
              className={`${
                isMobile 
                  ? 'min-h-screen w-full' 
                  : 'min-w-full h-full'
              } flex flex-col justify-center`}
            >
              {/* ✅ Responsive padding */}
              <div className="text-left w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:pt-16 lg:pt-12">
                <div className="overflow-hidden">
                  {/* ✅ Responsive font sizes */}
                  <h2
                    ref={(el) => (heroTextRefs.current[index] = el)}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight lg:leading-tight mb-3 sm:mb-4 md:mb-6 text-white"
                  >
                    {slide.title}
                  </h2>
                </div>
                {/* ✅ Responsive subheading */}
                <p
                  ref={(el) => (subHeadingRefs.current[index] = el)}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-[#9C9C9C] max-w-3xl mb-4 sm:mb-6"
                >
                  {slide.subHeading}
                </p>
                {/* ✅ Responsive button */}
                <Link
                  to={slide.link}
                  ref={(el) => (buttonRef.current[index] = el)}
                  onClick={() => handleClick(index)}
                  className="connect-btn inline-block bg-white rounded-full text-black transition-all duration-150 hover:bg-black group overflow-hidden hover:border-white hover:text-white border-2 mt-3 sm:mt-5"
                >
                  <div className="flex items-center px-4 sm:px-5 py-2.5 sm:py-3 justify-center">
                    <span className="group-hover:text-white transition-all duration-300 inline-block text-sm sm:text-base">
                      Discover More
                    </span>
                    <ArrowRight
                      className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Responsive Pagination Dots */}
        <div
          ref={dotsRef}
          className={`absolute ${
            isMobile 
              ? 'bottom-20 sm:bottom-24' 
              : 'bottom-6 sm:bottom-8'
          } left-1/2 transform -translate-x-1/2 flex space-x-2 z-30`}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white cursor-pointer transition-all duration-300 ${
                index === currentSlide ? "opacity-100 scale-125" : "opacity-50"
              }`}
              onClick={() => scrollToSlide(index)}
            ></div>
          ))}
        </div>

        {/* ✅ Responsive Scroll Down Button */}
        <button
          onClick={scrollToThirdSection}
          className={`absolute ${
            isMobile 
              ? 'bottom-6 sm:bottom-8 right-4 sm:right-6 p-2.5 sm:p-3' 
              : 'bottom-8 md:bottom-10 right-6 md:right-8 p-3'
          } z-30 bg-white/90 text-black rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300 group`}
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover:translate-y-1 transition-transform duration-300 ease-in-out" />
        </button>
      </div>

      <div id="next-section" className="h-screen bg-gray-900">
        <ThirdSection />
      </div>
    </>
  );
};

export default HeroSection;