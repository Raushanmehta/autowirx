"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWrench } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FiSmartphone, FiShield, FiAward, FiClock, FiCheckCircle, } from "react-icons/fi";
import { Roboto } from "next/font/google";
import { containerVariants, fadeUpVariants, badgeVariants } from "../../utils/animations";
import { site } from "../../data";
import { FaMedal } from "react-icons/fa";
import { ClockFading } from "lucide-react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const IconMap: Record<string, React.ElementType> = {
  shield: FiShield,
  award: FaMedal,
  clock: ClockFading,
  checkCircle: FiCheckCircle,
  workspaceTrusted: VscWorkspaceTrusted,
};

export default function HeroSection() {
  const data = site.heroData;

  return (
    <section className="relative w-full overflow-hidden flex items-center min-h-[90dvh] lg:min-h-[90vh]">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute inset-0">
          <svg
            className="absolute top-0 right-0 w-full h-full"
            viewBox="0 0 1440 780"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Layered Concentric Accent Stroke */}
            <motion.path
              d="M 1130 -6 
                 L 760 450 
                 Q 715 520 760 590 
                 L 1020 860"
              stroke="#98b6edff"
              strokeWidth="2.5"
              strokeOpacity="0.4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0, }}
              animate={{ pathLength: 1, opacity: 0.4, }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut", }}
            />
            {/* Main Royal Blue Shape */}
            <motion.path
              d="M 1160 0 
                 L 800 450 
                 Q 745 520 800 590 
                 L 1050 850 
                 L 1480 850 
                 L 1440 0 
                 Z"
              fill="#0057ee"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Top-Right Dot Grid */}
            <motion.g
              initial={{ opacity: 0, y: -15, }}
              animate={{ opacity: 0.38, y: 0, }}
              transition={{ duration: 0.8, delay: 0.8, }}>
              {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => (
                  <circle
                    key={`dot-tr-${row}-${col}`}
                    cx={1315 + col * 18}
                    cy={75 + row * 22}
                    r="2.5"
                    fill="#ffffff"
                  />
                ))
              )}
            </motion.g>

            {/* Bottom-Right Rounded Shape */}
            <motion.rect
              x="1260"
              y="530"
              width="190"
              height="170"
              rx="26"
              fill="none"
              stroke="rgba(255, 255, 255, 0.28)"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0.8, }}
              animate={{ opacity: 1, scale: 1, }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut", }}
            />
            {/* Inner Concentric Contour */}
            <motion.rect
              x="1280"
              y="552"
              width="150"
              height="126"
              rx="16"
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.5"
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{ duration: 0.8, delay: 1, }}
            />
            {/* Bottom-Right Dots */}
            <motion.g
              initial={{ opacity: 0, }}
              animate={{ opacity: 0.22, }}
              transition={{ duration: 0.8, delay: 1, }}>
              {Array.from({ length: 3 }).map((_, r) =>
                Array.from({ length: 4 }).map((_, c) => (
                  <circle
                    key={`dot-br-${r}-${c}`}
                    cx={1310 + c * 18}
                    cy={590 + r * 20}
                    r="2"
                    fill="#ffffff"
                  />
                ))
              )}
            </motion.g>
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:hidden absolute inset-0 w-full h-full z-0 overflow-hidden"
          style={{
            backgroundImage: "url('https://i.pinimg.com/1200x/50/02/93/5002932cc68a3b514dce6a299fd7c96e.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#0057ee]/25 backdrop-blur-[1px]"></div>

          {/* Mobile Dot Grid */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 grid grid-cols-5 gap-2.5 opacity-40">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 md:py-14 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

          <motion.div
            variants={containerVariants}
            className="lg:col-span-6 space-y-6 pt-2 lg:pt-4">
            {/* Tagline */}
            <motion.p
              variants={fadeUpVariants}
              className="text-white lg:text-[#0057ee] font-semibold text-sm sm:text-lg tracking-wide">
              {data.tagline}
            </motion.p>
            {/* Main Heading */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-[66px] xl:text-[70px] font-semibold text-white lg:text-[#0f172a] tracking-tight leading-[1.12] sm:leading-[1.08]">
              {data.heading.line1} <br />
              {data.heading.line2}
              <motion.span
                className="text-white lg:text-[#0057ee] inline-block"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", }}>
                {data.heading.highlight}
              </motion.span>
            </motion.h1>
            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className={`text-white lg:text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed pt-1 ${roboto.className}`}>
              {data.description}
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              {/* Primary Button */}
              <motion.div
                whileHover={{ scale: 1.04, y: -3, }}
                whileTap={{ scale: 0.97, }}>
                <Link
                  href={data.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0057ee] hover:bg-[#0047c7] text-white font-semibold px-7 sm:px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-colors">
                  <motion.span
                    whileHover={{ rotate: -15, }}
                    transition={{ type: "spring", stiffness: 300, }}>
                    <FaWrench className="text-base text-white -rotate-45" />
                  </motion.span>
                  <span>{data.primaryCta.label}</span>
                </Link>
              </motion.div>

              {/* Secondary Button */}
              <motion.div
                whileHover={{ scale: 1.04, y: -3, }}
                whileTap={{ scale: 0.97, }}>
                <Link
                  href={data.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-blue-50/60 text-[#0057ee] border-2 border-[#0057ee]/80 font-semibold px-7 sm:px-8 py-3.5 rounded-xl transition-colors shadow-sm">
                  <motion.span
                    whileHover={{ x: 4, }}
                    transition={{ type: "spring", stiffness: 400, }}>
                    <FiSmartphone className="text-lg text-[#0057ee]" />
                  </motion.span>
                  <span>{data.secondaryCta.label}</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="pt-2 sm:pt-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-4 sm:gap-6 lg:gap-6">
              {data.trustBadges.map((item, index) => {
                const Icon = IconMap[item.icon];

                return (
                  <motion.div
                    key={item.title}
                    variants={badgeVariants}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    {/* Icon */}
                    <motion.div
                      className="shrink-0 text-white lg:text-[#0057ee]"
                      whileHover={{
                        rotate: 8,
                        scale: 1.12,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <Icon className="w-7 h-7 sm:w-10 sm:h-10" />
                    </motion.div>

                    {/* Text */}
                    <div className="leading-tight">
                      <h4 className="font-bold text-white lg:text-gray-900 text-sm sm:text-base">
                        {item.title}
                      </h4>

                      <p className="text-white/80 lg:text-gray-500 text-[11px] sm:text-xs">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Divider */}
                    {index !== data.trustBadges.length - 1 && (
                      <div className="hidden sm:block h-9 w-px bg-gray-200 ml-2 sm:ml-3" />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="hidden lg:flex order-first lg:order-last lg:col-span-6 relative justify-center lg:justify-start pt-4 lg:pt-0"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                x: 50,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[540px] lg:max-w-none mx-auto lg:mx-0 mt-8 lg:-mt-6"
            >
              {/* Floating Phone */}
              <motion.div
                className="relative">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  width={800}
                  height={625}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,30,90,0.22)]"
                />
              </motion.div>

              {/* Subtle Glow */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: [0.15, 0.25, 0.15],
                  scale: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-10 bg-blue-400/20 blur-3xl rounded-full -z-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}