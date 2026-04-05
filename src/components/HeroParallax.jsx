import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroParallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const dotsY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="hero">
      <motion.div className="hero-layer hero-grid" style={{ y: gridY }} />
      <motion.div className="hero-layer hero-glow" style={{ y: glowY }} />
      <motion.div className="hero-layer hero-dots" style={{ y: dotsY }} />

      <motion.div className="hero-content" style={{ y: titleY }}>
        <span className="eyebrow">React + Motion + Firebase</span>
        <h1>Animated parallax app starter</h1>
        <p>
          A clean custom app foundation with layered motion, route transitions,
          and a Firebase-ready dashboard.
        </p>

        <div className="hero-actions">
          <Link to="/dashboard" className="button-link">
            Open Dashboard
          </Link>
          <a href="#offers" className="ghost-button">
            View Sections
          </a>
        </div>
      </motion.div>

      <motion.div className="floating-card card-a" style={{ y: glowY }}>
        <div className="card-label">Motion</div>
        <strong>Scroll-linked layers</strong>
        <p>Smooth parallax movement built into the hero section.</p>
      </motion.div>

      <motion.div className="floating-card card-b" style={{ y: dotsY }}>
        <div className="card-label">Firebase</div>
        <strong>Auth-ready dashboard</strong>
        <p>Hook your project keys in and turn this into a real app.</p>
      </motion.div>
    </section>
  );
}
