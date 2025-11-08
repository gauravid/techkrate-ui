import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function LoadingScreen() {
  const loadingScreenRef = useRef(null);
  const spinnerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (loadingScreenRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      // Fade in screen
      tl.fromTo(
        loadingScreenRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      )
        // Scale spinner
        .fromTo(
          spinnerRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8 },
          "-=0.3"
        )
        // Fade in text
        .fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );

      // Auto fade out after 2.5s
      tl.to(loadingScreenRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 2,
        onComplete: () => {
          loadingScreenRef.current.style.display = "none";
        },
      });
    }
  }, []);

  return (
    <div
      ref={loadingScreenRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
    >
      {/* Spinner */}
      <div
        ref={spinnerRef}
        className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin mb-4"
      ></div>

      {/* Text */}
      <p ref={textRef} className="text-lg tracking-widest font-semibold">
        Loading...
      </p>
    </div>
  );
}

export default LoadingScreen;
