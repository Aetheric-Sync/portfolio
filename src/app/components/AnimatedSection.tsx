"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
}

export default function AnimatedSection({ children, className = "", delay = 0, direction }: AnimatedSectionProps) {
  const ref = useRef(null);
  const controls = useAnimation();

  // direction is now a prop

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        controls.start("visible");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Initial check after mount only
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      controls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let hiddenVariant = { opacity: 0, y: 40, scale: 0.98 };
  if (direction === 'left') hiddenVariant = { opacity: 0, x: -80, scale: 0.98 };
  if (direction === 'right') hiddenVariant = { opacity: 0, x: 80, scale: 0.98 };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: hiddenVariant,
        visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.7, delay } },
      }}
    >
      {children}
    </motion.section>
  );
}
