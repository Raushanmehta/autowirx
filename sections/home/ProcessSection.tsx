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
        <section className="relative w-full bg-gradient-to-b from-blue-50/40 via-white to-white py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden">
            {/* Subtle Background Graphics */}


            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
                {/* Section Heading */}
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-4xl mx-auto space-y-3 mb-10">
                    <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>{data.header.subtitle}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 relative">
                    {data.steps.map((step, index) => {
                        const Icon = IconMap[step.icon];
                        return (
                            <motion.div key={index} variants={fadeUpVariants} className="relative">
                                <ProcessCard
                                    stepNumber={step.stepNumber}
                                    icon={<Icon size={40} />}
                                    title={step.title}
                                    description={step.description}
                                />
                                {index < data.steps.length - 1 && (
                                    <div className="hidden lg:flex items-center absolute top-1/2 -right-16 w-16 transform -translate-y-1/2 z-10">
                                        <div className="flex-1 flow-bg"></div>
                                        <FiArrowRight size={24} className="text-blue-400 -ml-2" />
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