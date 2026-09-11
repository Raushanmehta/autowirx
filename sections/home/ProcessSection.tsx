"use client";

import ProcessCard from "@/components/cards/ProcessCard";
import { FiClipboard, FiFileText, FiSettings, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { site } from "../../data";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "../../utils/animations";

const IconMap: Record<string, React.ElementType> = {
    clipboard: FiClipboard,
    fileText: FiFileText,
    settings: FiSettings,
    checkCircle: FiCheckCircle,
};

export default function ProcessSection() {
    const data = site.processData;

    return (
        <section className="relative w-full bg-gradient-to-b from-blue-50/40 via-white to-white py-16 sm:py-20 lg:py-24 font-sans overflow-hidden">
            {/* Subtle Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-indigo-50/40 rounded-full blur-3xl opacity-60"></div>
                {/* Lightweight bottom gradient */}
                <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[40rem] h-[20rem] bg-blue-100/40 rounded-full blur-[100px] opacity-70"></div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
                {/* Section Heading */}
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-2xl mx-auto space-y-3 mb-20">
                    <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>{data.header.subtitle}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                        {data.header.titleLine1}<span className="text-blue-600">{data.header.titleHighlight}</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {data.header.description}
                    </p>
                </motion.div>
                {/* Steps Grid with Connecting Arrows */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
                    {data.steps.map((step, index) => {
                        const Icon = IconMap[step.icon];
                        return (
                            <motion.div key={index} variants={fadeUpVariants} className="relative">
                                <ProcessCard
                                    stepNumber={step.stepNumber}
                                    icon={<Icon size={32} />}
                                    title={step.title}
                                    description={step.description}
                                />
                                {index < data.steps.length - 1 && (
                                    <div className="hidden lg:flex items-center absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 text-blue-400">
                                        <FiArrowRight size={22} className="animate-pulse" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}