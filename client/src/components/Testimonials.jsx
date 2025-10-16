import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const testimonials = [
  {
    quote:
      "With IRDA-compliant reporting, mobile app-based surveys, real-time damage marking, and seamless data reusability, Moval sets a new standard in efficiency and precision for data-driven claim management.",
    author: "N. Vishwanath",
    company: "IIISLA Fellow Member",
  },
  {
    quote:
      "Moval’s intuitive cloud platform and mobile app empower surveyors with state-of-the-art tools to execute precise inspections and deliver comprehensive reports effortlessly.",
    author: "Sandeep Saxena",
    company: "Surveyor & Loss Assessor",
  },
  {
    quote:
      "As a chartered engineer, CARS offers an intuitive, hybrid platform that simplifies report management, enhances staff coordination, and streamlines administrative tasks with its powerful mobile app integration.",
    author: "Naveen Arora",
    company: "ACE Consulting Pvt. Ltd.",
  },
  {
    quote:
      "Techkrate exemplifies technological innovation, delivering transformative solutions that drive efficiency, scalability, and digital evolution for modern enterprises.",
    author: "RNS Kushwaha",
    company: "IIISLA Fellow Member",
  },
  {
    quote:
      "Moval’s AI-driven modules seamlessly integrate precision and speed, revolutionizing motor survey processes with unparalleled claim analysis and automation.",
    author: "Manoj Sharma",
    company: "RMS Associates",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRefs = useRef([]);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const startInterval = (delay = 5000 - elapsedTime) => {
    startTimeRef.current = Date.now();

    progressRefs.current[currentIndex].style.transition = `width ${delay}ms linear`;
    progressRefs.current[currentIndex].style.width = "100%";

    intervalRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setElapsedTime(0);
    }, delay);
  };

  const pauseInterval = () => {
    clearTimeout(intervalRef.current);
    setElapsedTime((prev) => prev + (Date.now() - startTimeRef.current));

    const computedStyle = window.getComputedStyle(progressRefs.current[currentIndex]);
    const currentWidth = computedStyle.width;
    progressRefs.current[currentIndex].style.transition = "none";
    progressRefs.current[currentIndex].style.width = currentWidth;
  };

  useEffect(() => {
    progressRefs.current.forEach((bar, index) => {
      if (bar) {
        bar.style.transition = "none";
        bar.style.width = index === currentIndex ? "0%" : "0%";
      }
    });

    startInterval();

    return () => clearTimeout(intervalRef.current);
  }, [currentIndex]);

  return (
    <div className="w-full px-6 sm:px-12 md:px-20 lg:px-44 py-16 sm:py-24 md:py-32 bg-black">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">What our customers think</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-white">
            Delve into the experiences of our users who have leveraged our platform to optimize workflows and enhance precision. The following
            testimonials provide an overview of the substantial benefits our solutions have delivered.
          </p>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div key={index} className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <div ref={(el) => (progressRefs.current[index] = el)} className="h-full bg-white rounded-full" style={{ width: "0%" }} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative h-[200px] sm:h-[350px] md:h-[300px] bg-white text-black overflow-hidden"
          onMouseEnter={() => {
            setIsPaused(true);
            pauseInterval();
          }}
          onMouseLeave={() => {
            setIsPaused(false);
            startInterval();
          }}
          onTouchStart={() => {
            setIsPaused(true);
            pauseInterval();
          }}
          onTouchEnd={() => {
            setIsPaused(false);
            startInterval();
          }}
        >
          <div className="absolute inset-0 p-4 sm:p-6 md:p-8 transition-transform duration-500 ease-out">
            <div className="h-full flex flex-col justify-between">
              <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">&quot;{testimonials[currentIndex].quote}&quot;</p>
              <div>
                <p className="font-semibold text-sm sm:text-base md:text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-gray-900 text-xs sm:text-sm md:text-base">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ),
};
