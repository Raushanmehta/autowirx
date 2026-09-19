"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus, FaClock, FaHeadset, FaComments, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, containerVariants } from "@/utils/animations";
import { AutoWirxFaqsData } from "@/data";

export default function FAQSection({ data }: { data: AutoWirxFaqsData }) {
    const [openId, setOpenId] = useState<string | null>("01"); // Default first item open

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case "FaClock": return <FaClock className="w-6 h-6" />;
            case "FaHeadset": return <FaHeadset className="w-6 h-6" />;
            case "FaComments": return <FaComments className="w-6 h-6" />;
            default: return <FaClock className="w-6 h-6" />;
        }
    };

    return (
        <section className="relative bg-white py-10 sm:py-14 md:py-16 lg:py-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="lg:col-span-5 space-y-6 lg:sticky ">

                        {/* Title & Description */}
                        <motion.div variants={fadeUpVariants} className="space-y-3">
                            <div className="flex items-center justify-start gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                                <span>{data.header.tag}</span>
                                <span className="w-6 h-0.5 bg-blue-500"></span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
                                {data.header.titleLine1} <span className="text-blue-600">{data.header.titleHighlight}</span>
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {data.header.description}
                            </p>
                        </motion.div>

                        {/* Repair Workbench Image */}
                        <motion.div variants={fadeUpVariants} className="relative h-72 w-full rounded-2xl overflow-hidden bg-gray-900 shadow-md">
                            <Image
                                src={data.image}
                                alt="Repair Workbench"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center opacity-85"
                            />
                        </motion.div>

                        {/* Still Have a Question Card */}
                        <motion.div variants={fadeUpVariants} className="bg-gray-50/80 rounded-3xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-sm">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {data.supportCard.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {data.supportCard.description}
                                </p>
                            </div>

                            <div>
                                <Link
                                    href={data.supportCard.buttonLink}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-8 py-3.5 shadow-lg shadow-blue-500/25 transition-all duration-300"
                                >
                                    <span>{data.supportCard.buttonText}</span>
                                    <FaArrowRight className="text-sm" />
                                </Link>
                            </div>

                            {/* Support Highlights */}
                            <div className="pt-4 border-t border-gray-200/60 space-y-2">
                                {data.supportCard.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center gap-5 text-gray-700">
                                        <div className="text-blue-600 text-lg shrink-0">
                                            {renderIcon(highlight.icon)}
                                        </div>
                                        <div>
                                            <span className="font-bold block text-md text-gray-900">{highlight.title}</span>
                                            <span className="text-gray-500 text-sm">{highlight.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        className="lg:col-span-7 space-y-4"
                    >
                        {data.faqs.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <motion.div
                                    variants={fadeUpVariants}
                                    key={faq.id}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20"
                                        : "bg-gray-50/60 hover:bg-gray-100/70 border-gray-100 text-gray-900"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full flex items-center justify-between p-5 sm:p-4 text-left focus:outline-none cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`text-sm sm:text-md font-bold ${isOpen ? "text-sky-200" : "text-blue-600"}`}>
                                                {faq.id}.
                                            </span>
                                            <span className="font-semibold text-sm sm:text-base">
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-blue-700 text-white" : "bg-gray-50 text-gray-700 shadow-sm"
                                            }`}>
                                            {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 pt-4 text-xs sm:text-sm text-gray-800 bg-gray-50 leading-relaxed ">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}