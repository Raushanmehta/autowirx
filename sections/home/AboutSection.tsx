"use client";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Settings, Award, Clock, Wrench, ArrowRight, ClockFading } from "lucide-react";
import { site } from "../../data";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "../../utils/animations";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlWrench } from "react-icons/sl";
import { FaMedal } from "react-icons/fa";

const IconMap: Record<string, React.ElementType> = {
    shield: ShieldCheck,
    settings: Settings,
    award: FaMedal,
    clock: ClockFading,
};

export default function AboutSection() {
    const data = site.aboutData;

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-white  py-10 sm:py-14 md:py-16 lg:py-16">
            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-blue-100/40 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-50/40 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 items-center gap-12 lg:gap-16 lg:grid-cols-2">
                    {/* Left column — copy */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase">
                            <span>{data.header.subtitle}</span>

                        </div>
                        <div className="w-10 h-0.5 bg-blue-600" />

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                            {data.header.titleLine1}{" "}
                            <span className="text-blue-600">{data.header.titleHighlight}</span>
                        </h2>
                        <p className="max-w-xl text-slate-600 text-sm sm:text-base ">
                            {data.header.description1}
                        </p>
                        <p className="max-w-xl text-slate-600 text-sm sm:text-base ">
                            {data.header.description2}
                        </p>

                        {/* Feature grid */}
                        <div className="grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-4 sm:gap-x-0 mt-8">
                            {data.features.map((feature, index) => {
                                const IconComp = IconMap[feature.icon] || ShieldCheck;
                                return (
                                    <motion.div 
                                        key={feature.title} 
                                        whileHover={{ y: -5 }}
                                        className={`group w-full space-y-3 px-2 sm:px-4 flex flex-col items-center cursor-pointer transition-all duration-300 ${index !== data.features.length - 1 ? 'sm:border-r sm:border-gray-200' : ''}`}
                                    >
                                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600 mx-auto transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm group-hover:shadow-blue-600/30 group-hover:shadow-lg">
                                            <IconComp size={40} strokeWidth={1.75} className="transform transition-transform duration-300 group-hover:scale-110" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 text-center transition-colors duration-300 group-hover:text-blue-600">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-slate-500 text-center">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="pt-2">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                <Link
                                    href={data.button.href}
                                    className="group inline-flex items-center gap-2 rounded-xl border-2 border-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-sm hover:shadow-lg hover:shadow-blue-600/30">
                                    <SlWrench className="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-12" strokeWidth={2} />
                                    <span>{data.button.text}</span>
                                    <FaArrowRightLong className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1} />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right column — image */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative w-full flex justify-center lg:justify-end"  >
                        <div className="relative w-full max-w-lg lg:max-w-[580px] xl:max-w-[420px] mr-4 sm:mr-6">
                            <div className="pointer-events-none absolute -left-16 top-8 grid grid-cols-6 gap-1.5 opacity-70 z-0">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="h-1.5 w-1.5 rounded-full bg-blue-500"
                                    />
                                ))}
                            </div>
                            <div className="pointer-events-none absolute -left-14 bottom-10 grid grid-cols-6 gap-1.5 opacity-70 z-0">
                                {Array.from({ length: 24 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="h-1.5 w-1.5 rounded-full bg-blue-500"
                                    />
                                ))}
                            </div>

                            {/* blue offset panel */}
                            <div className="absolute top-4 -right-4 left-4 sm:left-6 h-[480px] sm:h-[540px] lg:h-[580px] rounded-tl-[200px] rounded-bl-[200px] rounded-tr-3xl rounded-br-3xl bg-blue-600" />

                            {/* image card */}
                            <div className="relative h-[480px] sm:h-[540px] lg:h-[580px] w-full overflow-hidden rounded-tl-[200px] rounded-bl-[200px] rounded-tr-3xl rounded-br-3xl border-l-[12px] border-white shadow-2xl z-10 -translate-x-4 sm:-translate-x-6">
                                <Image
                                    src={data.image.src}
                                    alt={data.image.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}