"use client";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { site } from "../../data";
import { fadeUpVariants, containerVariants } from "@/utils/animations";

export default function CtaSection() {
    const data = site.ctaData;
    return (
        <section className="w-full bg-white pb-16 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative bg-[#212529] rounded-3xl overflow-hidden px-8 sm:px-12 lg:px-16 py-12 lg:py-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none hidden lg:block">
                        <motion.div 
                            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute right-[-10%] top-[-20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[80px]">
                        </motion.div>
                        <motion.svg
                            animate={{ y: ["-50%", "-55%", "-50%"], rotate: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute right-0 top-1/2 transform h-[120%] opacity-40"
                            width="500"
                            height="400"
                            viewBox="0 0 500 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 400 C150 300, 250 100, 500 50" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.8" fill="none" />
                            <path d="M0 350 C120 280, 200 120, 500 30" stroke="#60a5fa" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
                            <path d="M-50 300 C100 250, 180 150, 500 10" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.4" fill="none" />
                            <circle cx="350" cy="150" r="80" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 6" />
                            <circle cx="400" cy="100" r="150" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.2" />
                            <circle cx="280" cy="220" r="40" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.5" />
                            <circle cx="280" cy="220" r="4" fill="#3b82f6" />
                            <circle cx="350" cy="150" r="6" fill="#60a5fa" />
                            <circle cx="400" cy="100" r="3" fill="#93c5fd" />
                            <circle cx="158" cy="265" r="4" fill="#3b82f6" />
                        </motion.svg>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-8 z-10 text-center sm:text-left">
                        <motion.div variants={fadeUpVariants} className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 drop-shadow-xl hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={data.image.src}
                                    alt={data.image.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                                />
                        </motion.div>
                        <motion.div variants={fadeUpVariants} className="space-y-3">
                            <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                                <span>―</span>
                                <span>{data.header.subtitle}</span>
                                <span>―</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                                {data.header.titleLine1} <br />
                                {data.header.titleLine2}
                            </h2>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeUpVariants} className="z-10 shrink-0">
                        <Link
                            href={data.button.href}
                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 group">
                            <span>{data.button.text}</span>
                            <FiArrowRight className="text-blue-600 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}