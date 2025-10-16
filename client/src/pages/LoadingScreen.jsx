import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function LoadingScreen() {
  const loadingScreenRef = useRef(null);

  useEffect(() => {
    if (loadingScreenRef.current) {
      const animation = gsap.timeline();
      animation.fromTo(
        loadingScreenRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      );
    }
  }, []);

  return (
    <div ref={loadingScreenRef} className="loading-screen">
      {/* Loading content */}
    </div>
  );
}

export default LoadingScreen;
