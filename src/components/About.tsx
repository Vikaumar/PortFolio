import { useEffect, useState, useRef } from "react";
import "./styles/About.css";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { count, ref };
};

const StatItem = ({ end, prefix = "", suffix = "", label }: { end: number; prefix?: string; suffix?: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2500);
  return (
    <div className="stat-item" ref={ref}>
      <h4>{prefix}{count}{suffix}</h4>
      <p>{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Full-Stack Developer and B.Tech (CSE) student at IIIT Kota, driven by a love for building products that solve real problems. From winning HackToCrack 2.0 (1st among 6,400+ teams) to grinding 650+ LeetCode problems, I thrive at the intersection of clean architecture and competitive problem-solving. I build with the MERN stack, Spring Boot, and Next.js — and I'm always shipping.
        </p>
        <div className="about-stats">
          <StatItem end={8} suffix="+" label="Projects Built" />
          <StatItem end={650} suffix="+" label="LeetCode Problems" />
          <StatItem end={1} prefix="#" label="HackToCrack 2.0" />
          <StatItem end={3} suffix="★" label="CodeChef" />
        </div>
      </div>
    </div>
  );
};

export default About;
