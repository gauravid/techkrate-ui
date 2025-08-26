
// "use client";

// import { Link } from "react-router-dom";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowRight, Circle } from "lucide-react";
// import BGImage from "../assets/image/bgImage.jpg";
// import LalitBG from "../assets/image/LalitBG.webp";



// gsap.registerPlugin(ScrollTrigger);

// export default function ThirdSection() {
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);
//   const decorationRef = useRef(null);
//   const headingRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const linkRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const content = contentRef.current;
//     const decoration = decorationRef.current;
//     const heading = headingRef.current;
//     const paragraph = paragraphRef.current;
//     const link = linkRef.current;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top 70%",
//         end: "bottom 30%",
//         toggleActions: "play none none reverse",
//       },
//       defaults: { ease: "power3.out", duration: 1 },
//     });

//     // Animate content elements
//     tl.fromTo(heading, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
//       .fromTo(paragraph, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.7")
//       .fromTo(link, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.5")
//       .fromTo(
//         decoration.children,
//         { opacity: 0, scale: 0.9 },
//         { opacity: 0.1, scale: 1, duration: 1.5 },
//         "<"
//       );

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative flex flex-col justify-between bg-black text-white min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
//     >
//       {/* Background Image Container */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={BGImage || "/placeholder.svg"}
//           alt="Techkrate workspace"
//           className="w-full h-full object-cover object-center"
//         />
//         {/* Optional overlay for better text readability */}
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//       </div>

//       <div ref={decorationRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
//         <Circle className="absolute top-0 left-0 w-96 h-96 text-white opacity-0 -translate-x-1/2 -translate-y-1/2" />
//         <Circle className="absolute bottom-0 right-0 w-[40rem] h-[40rem] text-white opacity-0 translate-x-1/4 translate-y-1/4" />
//       </div>

//       <div className="relative z-20 flex-grow flex items-center justify-between py-12 lg:py-24 max-w-7xl mx-auto w-full">
//         {/* "About Us" content on the left */}
//         <div className="flex flex-col items-start text-left">
//           <h2
//             ref={headingRef}
//             className="font-Helix items-start text-7xl sm:text-8xl md:text-9xl font-bold leading-none tracking-tight"
//           >
//             Building a Legacy of Excellence 
//           </h2>
//         </div>

//         {/* Description and button on the right */}
//         <div ref={contentRef} className="flex flex-col items-end text-right ">
//           <p
//             ref={paragraphRef}
//             className="text-lg sm:text-xl md:text-2xl mb-8 text-left text-gray-300 max-w-2xl"
//           >
//             Techkrate is a SaaS and software development company. Our mission is
//             to craft software solutions that simplify and enhance business
//             operations worldwide.
//           </p>
//           <Link
//             ref={linkRef}
//             to="/About"
//             className="group  inline-flex item-center px-8 py-4 text-lg sm:text-xl font-semibold rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition duration-300 ease-in-out"
//           >
//             Discover More
//             <ArrowRight
//               className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
//               aria-hidden="true"
//             />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Circle } from "lucide-react";
import BGImage from "../assets/image/bgImage.jpg";
import LalitBG from "../assets/image/LalitBG.webp";



gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const decorationRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const decoration = decorationRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const link = linkRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out", duration: 1 },
    });

    // Animate content elements
    tl.fromTo(heading, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
      .fromTo(paragraph, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.7")
      .fromTo(link, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(
        decoration.children,
        { opacity: 0, scale: 0.9 },
        { opacity: 0.1, scale: 1, duration: 1.5 },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-between bg-black text-white min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={BGImage || "/placeholder.svg"}
          alt="Techkrate workspace"
          className="w-full h-full object-cover object-center"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div ref={decorationRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <Circle className="absolute top-0 left-0 w-96 h-96 text-white opacity-0 -translate-x-1/2 -translate-y-1/2" />
        <Circle className="absolute bottom-0 right-0 w-[40rem] h-[40rem] text-white opacity-0 translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-20 flex-grow flex items-center justify-between py-12 lg:py-24 max-w-7xl mx-auto w-full">
        {/* "About Us" content on the left */}
        <div className="flex flex-col items-start text-left">
          <h2
            ref={headingRef}
            className="font-Helix items-start text-7xl sm:text-8xl md:text-9xl font-bold leading-none tracking-tight"
          >
            Building a Legacy of Excellence 
          </h2>
        </div>

        {/* Description and button on the right */}
        <div ref={contentRef} className="flex flex-col items-start text-left ">
          <p
            ref={paragraphRef}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl"
          >
            Techkrate is a SaaS and software development company. Our mission is
            to craft software solutions that simplify and enhance business
            operations worldwide.
          </p>
          <Link
            ref={linkRef}
            to="/About"
            className="group inline-flex item-center px-8 py-4 text-lg sm:text-xl font-semibold rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition duration-300 ease-in-out"
          >
            Discover More
            <ArrowRight
              className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

