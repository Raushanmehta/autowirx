"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/utils/animations";
import { AutoWirxBrandsWeRepairData } from "@/data";

export default function BrandsSection({ data }: { data: AutoWirxBrandsWeRepairData }) {
    const { header, brands } = data;

    return (
        <section className="w-full bg-white py-10 sm:py-14 md:py-14 lg:py-14 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase"
                    >
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>{header.tag}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight"
                    >
                        {header.title} <span className="text-blue-600">{header.highlightTitle}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                        {header.description}
                    </motion.p>
                </div>

                {/* Brands Grid (2 rows of 6 items on desktop) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
                >
                    {brands.map((brand, index) => (
                        <motion.div
                            variants={fadeUpVariants}
                            key={index}
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                            className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center h-40 sm:h-48 transition-colors duration-300 hover:border-blue-100 group cursor-pointer"
                        >
                            {/* Brand Logo / Visual Representation */}
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={brand.imagePath}
                                    alt={`${brand.name} logo`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                    className="object-contain mix-blend-multiply"
                                />
                            </div>

                            {/* Brand Name Label */}
                            <p className="text-gray-500 font-semibold text-xs sm:text-sm">
                                {brand.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}