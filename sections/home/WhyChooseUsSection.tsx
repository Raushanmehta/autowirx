"use client";

import React from "react";
import Image from "next/image";
import { FiShield, FiAward, FiClock, FiHeadphones, FiBriefcase, FiSmile, FiUsers } from "react-icons/fi";
import { AiFillLike } from "react-icons/ai";
import { site } from "../../data";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "../../utils/animations";

const IconMap: Record<string, React.ElementType> = {
    shield: FiShield,
    award: FiAward,
    clock: FiClock,
    headphones: FiHeadphones,
    briefcase: FiBriefcase,
    smile: FiSmile,
    users: FiUsers,
};

export default function WhyChooseUsSection() {
    const data = site.whyChooseUsData;

    return (
        <section className="relative w-full bg-white py-20 font-sans overflow-hidden">
            <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[40rem] h-[20rem] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-5 relative flex flex-col items-center">
                        <div className="absolute -top-10 -left-10 grid grid-cols-6 gap-3 z-0 pointer-events-none">
                            {Array.from({ length: 42 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            ))}
                        </div>
                        {/* Main Tall Image Frame */}
                        <motion.div
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative w-full h-[640px] rounded-3xl overflow-hidden z-10">
                            <Image
                                src={data.images.main}
                                alt="Main image"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-950/20"></div>
                        </motion.div>

                        <motion.div
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="absolute -bottom-20 right-0 sm:right-6 w-64 h-52 rounded-2xl overflow-hidden shadow-2xl border-6 border-white bg-slate-900 z-20">
                            <Image
                                src={data.images.secondary}
                                alt="Secondary image"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <div className="absolute -bottom-10 left-2 sm:-left-10 w-36 h-36 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center p-2 z-30">
                            <svg className="w-full h-full absolute animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                                <path
                                    id="textPath"
                                    d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                    fill="transparent"
                                />
                                <text className="text-[11.5px] font-bold uppercase tracking-[0.15em] fill-blue-600">
                                    <textPath href="#textPath" startOffset="0%">
                                        • QUALITY SERVICE • 100% TRUSTED
                                    </textPath>
                                </text>
                            </svg>
                            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg relative z-10">
                                <FiShield size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-6">
                        <motion.div
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="">
                            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase">
                                <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                                    <span className="w-6 h-0.5 bg-blue-500"></span>
                                    <span>{data.header.subtitle}</span>
                                    <span className="w-6 h-0.5 bg-blue-500"></span>
                                </div>
                                <div className="hidden sm:flex ml-auto relative items-center justify-center w-20 h-20 mr-6">
                                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-ping" style={{ animationDuration: '3s' }}></div>
                                    <div className="absolute inset-[-8px] rounded-full border border-blue-300/30 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.6s' }}></div>
                                    <div className="absolute inset-[-16px] rounded-full border border-blue-200/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1.2s' }}></div>
                                    <div className="absolute inset-[-24px] rounded-full border border-blue-100/10 animate-ping" style={{ animationDuration: '3s', animationDelay: '1.8s' }}></div>
                                    <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                        <AiFillLike size={30} className="animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                                {data.header.titleLine1} <br />
                                <span className="text-blue-600">{data.header.titleHighlight}</span>
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                                {data.header.description}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                            {data.features.map((item, index) => {
                                const Icon = IconMap[item.icon];
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeUpVariants}
                                        className="relative bg-slate-50/80 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-100 group z-10">
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none -z-10">
                                            <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-100/60 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                        </div>

                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-white text-blue-600 flex items-center justify-center border border-blue-100/60 group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-500 shadow-[0_4px_15px_rgba(0,87,238,0.1)] relative z-10">
                                                <Icon size={32} />
                                            </div>
                                            <h3 className="text-gray-900 font-bold text-base tracking-tight relative z-10">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-2 relative z-10">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className=" grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {data.stats.map((stat, index) => {
                                const Icon = IconMap[stat.icon];
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeUpVariants}
                                        className="flex items-center justify-center sm:justify-start gap-5 p-6 rounded-2xl">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 shrink-0">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                                                {stat.count}
                                            </h4>
                                            <p className="text-gray-500 text-xs sm:text-sm font-medium">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}