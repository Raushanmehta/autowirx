"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Settings, Clock, Users } from "lucide-react";
import { site } from "../data";
import { containerVariants, fadeUpVariants } from "../utils/animations";

const IconMap: Record<string, React.ElementType> = {
    shieldCheck: ShieldCheck,
    settings: Settings,
    clock: Clock,
    users: Users,
};

export default function AboutMissionSection() {
    const data = site.aboutMissionData;

    return (
        <section className="relative w-full bg-white py-10 sm:py-14 md:py-16 lg:py-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-12 items-center">

                    {/* Left Column: Images and Graphics */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="relative w-full max-w-2xl mx-auto xl:mx-0">

                        {/* Blue Shape Background */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="absolute left-0 top-16 bottom-16 w-[80%] sm:w-[75%] bg-[#0057ee] rounded-3xl [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%,0_5%)] z-0"
                        />

                        {/* Dot Pattern Top Left */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="absolute left-0 sm:left-2 top-4 grid grid-cols-5 gap-2 z-10">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-white/60 sm:bg-[#0057ee]/30 rounded-full" />
                            ))}
                        </motion.div>

                        {/* Main Image */}
                        <motion.div variants={fadeUpVariants} className="relative z-10 ml-6 sm:ml-12 lg:ml-16 rounded-3xl overflow-hidden drop-shadow-2xl bg-white [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%,0_05%)]">
                            <Image
                                src={data.image.src}
                                alt={data.image.alt}
                                width={800}
                                height={700}
                                className="w-full h-[450px] sm:h-[550px] object-cover"
                            />
                        </motion.div>

                        {/* Floating Card */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="absolute -bottom-8 -left-2 sm:-left-4 lg:-left-8 z-20 bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white max-w-[280px]">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-[#0057ee]">
                                    {React.createElement(IconMap[data.trustCard.icon] || ShieldCheck, { size: 26, strokeWidth: 2.2 })}
                                </div>
                                <div>
                                    <p className="text-[11px] sm:text-xs font-bold text-gray-700 mb-0.5">{data.trustCard.preTitle}</p>
                                    <h4 className="text-2xl sm:text-3xl font-black text-[#0057ee] leading-none mb-1">{data.trustCard.title}</h4>
                                    <p className="text-[11px] sm:text-xs font-medium text-gray-500">{data.trustCard.subtitle}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-200 to-transparent mb-5" />
                            <p className="text-sm font-bold text-gray-800 leading-snug" dangerouslySetInnerHTML={{ __html: data.trustCard.footer }} />
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="xl:pl-8 relative">
                        {/* Section Header */}
                        <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-6">
                            <h3 className="text-[#0057ee] font-bold text-sm tracking-widest uppercase">{data.header.subtitle}</h3>
                            <div className="w-10 h-0.5 bg-[#0057ee]/40" />
                        </motion.div>

                        <motion.h2 variants={fadeUpVariants} className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-3">
                            {data.header.titleLine1} <br className="hidden sm:block" />
                            {data.header.titlePrefix} <span className="text-[#0057ee]">{data.header.titleHighlight}</span>
                        </motion.h2>

                        <motion.p variants={fadeUpVariants} className="text-slate-600 text-base sm:text-md leading-relaxed mb-6 max-w-3xl">
                            {data.header.description}
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div variants={fadeUpVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-8 gap-x-4 mb-6">
                            {data.features.map((item, idx) => {
                                const IconComp = IconMap[item.icon] || ShieldCheck;
                                return (
                                    <div key={idx} className="flex flex-col items-center text-center px-2">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-50 to-white text-blue-600 flex items-center justify-center mb-5 sm:mb-6 border border-blue-100/60 shadow-[0_4px_15px_rgba(0,87,238,0.1)] transition-transform duration-300 hover:scale-110">
                                            <IconComp size={30} strokeWidth={1.5} className="sm:w-9 sm:h-9" />
                                        </div>
                                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[160px] mx-auto">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Mission */}
                        <motion.div variants={fadeUpVariants} className="relative">
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-[#0057ee] font-bold text-sm tracking-widest uppercase">{data.mission.subtitle}</h3>
                                <div className="w-10 h-0.5 bg-[#0057ee]/40" />
                            </div>
                            <p className="text-xl sm:text-lg font-semibold text-slate-900 leading-snug max-w-xl">
                                {data.mission.description}
                            </p>

                            {/* Dot Pattern Bottom Right */}
                            <div className="absolute right-0 -bottom-10 grid grid-cols-6 gap-2 opacity-20 pointer-events-none hidden sm:grid">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 bg-[#0057ee] rounded-full" />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}