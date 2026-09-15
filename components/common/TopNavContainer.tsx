"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function TopNavContainer({
  topbar,
  navbar,
}: {
  topbar: React.ReactNode;
  navbar: React.ReactNode;
}) {
  const { scrollY } = useScroll();
  const topbarRef = useRef<HTMLDivElement>(null);
  const [topbarHeight, setTopbarHeight] = useState(45);

  useEffect(() => {
    const handleResize = () => {
      if (topbarRef.current) {
        setTopbarHeight(topbarRef.current.offsetHeight);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Translate up by scrollY, but clamp it at -topbarHeight so the Navbar sticks to the top
  const yRaw = useTransform(scrollY, [0, Math.max(topbarHeight, 1)], [0, -topbarHeight]);
  
  // Use the exact same spring physics as SmoothScroll.tsx so they move in perfect sync
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const ySpring = useSpring(yRaw, physics);

  return (
    <motion.div style={{ y: ySpring }} className="fixed top-0 left-0 w-full z-[100] flex flex-col shadow-sm">
      <div ref={topbarRef}>{topbar}</div>
      <div className="w-full bg-white">{navbar}</div>
    </motion.div>
  );
}
