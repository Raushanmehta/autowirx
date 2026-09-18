"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import { containerVariants, fadeUpVariants } from "@/utils/animations";

export default function BookRepairSection({ data }: { data: any }) {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        device: "",
        issue: "",
        date: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Repair Booking Submitted:", formData);
        alert("Repair booking submitted successfully!");
    };

    const renderIcon = (iconName: string) => {
        const IconComponent = (Icons as any)[iconName] || Icons.FaWrench;
        return <IconComponent className="text-xl" />;
    };

    if (!data) return null;

    const { banner, formSection } = data;

    return (
        <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Left side banner */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="relative rounded-2xl border border-sky-100 overflow-hidden shadow-sm bg-white">
                    {/* Background Image on Right */}
                    <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 h-full z-0 hidden sm:block">
                        <Image
                            src={banner.image}
                            alt={banner.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7 space-y-6">
                            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
                                <motion.div variants={fadeUpVariants} className="flex items-center gap-3">
                                    <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                                        {banner.tagline}
                                    </span>
                                    <span className="h-[2px] w-6 bg-sky-500" />
                                </motion.div>
                                <motion.h2 variants={fadeUpVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                    {banner.titleLine1} <span className="text-blue-600">{banner.titleHighlight}</span>
                                </motion.h2>
                                <motion.p variants={fadeUpVariants} className="text-sm sm:text-base text-gray-700 max-w-xl leading-relaxed">
                                    {banner.description}
                                </motion.p>
                            </motion.div>

                            {/* 3 Step Icons */}
                            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {banner.steps.map((step: any, idx: number) => (
                                    <motion.div key={idx} variants={fadeUpVariants} className="space-y-2">
                                        <div className="h-14 w-14 rounded-full bg-white shadow-md border border-sky-100 flex items-center justify-center text-blue-600">
                                            {renderIcon(step.icon)}
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-md">{step.title}</h4>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side / Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Info & Bullet Points */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="space-y-3">
                            <motion.div variants={fadeUpVariants} className="flex items-center gap-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                                    {formSection.tagline}
                                </span>
                                <span className="h-[2px] w-12 bg-sky-500" />
                            </motion.div>
                            <motion.h2 variants={fadeUpVariants} className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                {formSection.titleLine1} <span className="text-blue-600">{formSection.titleHighlight}</span>
                            </motion.h2>
                            <motion.p variants={fadeUpVariants} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {formSection.description}
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            {formSection.features.map((feature: any, idx: number) => (
                                <motion.div key={idx} variants={fadeUpVariants} className="flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-blue-600 shrink-0">
                                        {renderIcon(feature.icon)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                                        <p className="text-sm text-gray-500">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-6"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <Icons.FaUser />
                                </span>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <Icons.FaPhoneAlt />
                                </span>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Select Device */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <Icons.FaMobileAlt />
                                </span>
                                <select
                                    name="device"
                                    value={formData.device}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-10 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Device</option>
                                    {formSection.devices.map((device: any, idx: number) => (
                                        <option key={idx} value={device.value}>{device.label}</option>
                                    ))}
                                </select>
                                <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 text-xs">
                                    ▼
                                </span>
                            </div>

                            {/* Select Issue */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <Icons.FaWrench />
                                </span>
                                <select
                                    name="issue"
                                    value={formData.issue}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-10 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Issue</option>
                                    {formSection.issues.map((issue: any, idx: number) => (
                                        <option key={idx} value={issue.value}>{issue.label}</option>
                                    ))}
                                </select>
                                <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 text-xs">
                                    ▼
                                </span>
                            </div>

                            {/* Preferred Date */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <Icons.FaCalendarAlt />
                                </span>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-3 shadow-lg shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                            >
                                <span>Book a Repair</span>
                                <Icons.FaArrowRight className="text-sm" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}