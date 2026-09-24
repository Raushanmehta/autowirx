"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "@/utils/animations";
import PageTopSection from "@/components/common/PageTopSection";
import { FaTools, FaHeadset, FaCode, FaBullhorn, FaUsers, FaFileAlt } from "react-icons/fa";
import CareersCard from "@/components/cards/CareerCard";
import siteData from "@/data/site.json";

export default function CareersPage() {
    const { header, jobs } = siteData.AutoWirx.sections.careers.variants.AutoWirxCareers1;

    return (
        <main>
            <PageTopSection title="Careers" />
            <section className="relative bg-gradient-to-b from-sky-50/40 via-white to-white py-10 sm:py-14 md:py-14 lg:py-14 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px]" />
                    <div className="absolute top-[30%] -right-[10%] w-[35%] h-[35%] rounded-full bg-sky-400/10 blur-[100px]" />
                    <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-300/10 blur-[120px]" />
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <motion.div variants={fadeUpVariants} className="relative flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-3 z-10">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold uppercase tracking-widest text-sky-600">
                                    {header.subtitle}
                                </span>
                                <span className="h-[2.5px] w-12 bg-sky-500" />
                            </div>
                            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                                {header.titleLine1} <span className="text-blue-600">{header.titleHighlight}</span>
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                                {header.description}
                            </p>
                        </div>

                        <div className="hidden md:block absolute -top-8 right-0 select-none opacity-[0.03] z-0">
                            <span className="text-9xl font-black font-serif tracking-tighter whitespace-nowrap">
                                {header.watermark}
                            </span>
                        </div>
                    </motion.div>
                    <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {jobs.map((job) => (
                            <CareersCard key={job.id} job={job} />
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </main>
    )
}