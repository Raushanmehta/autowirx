"use client";
import TestimonialCard from "@/components/cards/TestimonialCard";
import PageTopSection from "@/components/common/PageTopSection";
import { fadeUpVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { site } from "../../data";

export default function TestimonialsPage() {
    const data = site.testimonialsData;
    return (
        <main>
            <PageTopSection title="Testimonials" />
            <section className="w-full bg-slate-50 py-10 sm:py-14 md:py-14 lg:py-14 font-sans overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center max-w-2xl mx-auto space-y-3">
                        <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase">
                            <span>―</span>
                            <span>{data.header.subtitle}</span>
                            <span>―</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                            {data.header.titleLine1} <span className="text-blue-600">{data.header.titleHighlight}</span>
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {data.header.description}
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.items.map((item, i) => (
                            <TestimonialCard
                                key={i}
                                quote={item.quote}
                                name={item.name}
                                role={item.role}
                                avatar={item.avatar}
                                rating={item.rating}
                                isDark={item.isDark}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}