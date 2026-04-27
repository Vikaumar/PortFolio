import { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const updateProgress = () => {
      if (!progressRef.current) return;
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
      gsap.to(progressRef.current, { width: `${progress}%`, duration: 0.1 });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress(); // init
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        background: "linear-gradient(90deg, #14b8a6, #5eead4)",
        boxShadow: "0 0 12px rgba(94, 234, 212, 0.8)",
        zIndex: 10000,
        width: "0%",
        pointerEvents: "none"
      }}
      ref={progressRef}
    />
  );
};

export default ScrollProgress;
