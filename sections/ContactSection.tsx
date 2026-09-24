"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "@/utils/animations";
import { FaLock, FaArrowRight, FaHeadset, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const iconMap: Record<string, any> = {
    FaHeadset,
    FaWhatsapp,
    FaEnvelope,
    FaPhoneAlt
};

export interface ContactMethod {
    id: string;
    title: string;
    description: string;
    icon: string;
    iconBgColor: string;
    iconBorderColor: string;
    iconColor: string;
    linkText: string;
    linkHref: string;
    linkColor: string;
    linkHoverColor: string;
}

export interface FormSectionData {
    title: string;
    description: string;
    buttonText: string;
    securityNote: string;
}

export interface LocationSectionData {
    title: string;
    description: string;
    mapIframeSrc: string;
    addressTitle: string;
    addressSubtitle: string;
    getDirectionsText: string;
    getDirectionsLink: string;
}

export interface MethodsHeaderData {
    subtitle: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
}

export interface ContactSectionProps {
    data: {
        contactMethods: ContactMethod[];
        formSection: FormSectionData;
        locationSection: LocationSectionData;
        methodsSectionHeader: MethodsHeaderData;
    }
}

export default function ContactSection({ data }: ContactSectionProps) {
    const { contactMethods, formSection, locationSection, methodsSectionHeader } = data;
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact Form Submitted:", formData);
        alert("Message sent successfully!");
    };

    return (
        <section className="relative bg-white py-10 sm:py-14 md:py-14 lg:py-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                    <motion.div variants={fadeUpVariants} className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-4 sm:p-8 space-y-4">

                        <div className="space-y-2">
                            <h2 className=" text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                                {formSection.title}
                            </h2>
                            <div className="h-[2px] w-12 bg-sky-500" />
                            <p className="text-sm sm:text-sm text-gray-500">
                                {formSection.description}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-2">
                            {/* Row 1: Full Name & Email Address */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-700">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-700">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Phone Number & Subject */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-700">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all cursor-pointer"
                                    >
                                        <option value="" disabled>Select a subject</option>
                                        <option value="repair">Device Repair Inquiry</option>
                                        <option value="pricing">Pricing & Quotes</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 3: Your Message */}
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-gray-700">
                                    Your Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    maxLength={500}
                                    placeholder="Tell us how we can help you..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                                />
                                <div className="text-right text-sm text-gray-400">
                                    {formData.message.length}/500
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-4 shadow-lg shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                            >
                                <span>{formSection.buttonText}</span>
                                <FaArrowRight className="text-xs" />
                            </button>

                            {/* Security Note */}
                            <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500 pt-2">
                                <FaLock className="text-gray-400 text-sm" />
                                <span>{formSection.securityNote}</span>
                            </div>

                        </form>
                    </motion.div>

                    <motion.div variants={fadeUpVariants} className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 space-y-4">

                        <div className="space-y-2">
                            <h3 className=" text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                                {locationSection.title}
                            </h3>
                            <div className="h-[2px] w-12 bg-sky-500" />
                            <p className="text-xs sm:text-sm text-gray-500">
                                {locationSection.description}
                            </p>
                        </div>

                        {/* Interactive Map Visual Mockup */}
                        <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-sky-100 border border-gray-200 shadow-inner">
                            <iframe
                                src={locationSection.mapIframeSrc}
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Address & Get Directions Footer */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 mt-2 bg-gray-50 border border-gray-100 rounded-xl">
                            <div className="flex items-start gap-3">
                                <div className="h-12 w-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <MdLocationPin className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs sm:text-sm text-gray-900">{locationSection.addressTitle}</h4>
                                    <p className="text-xs text-gray-500">{locationSection.addressSubtitle}</p>
                                </div>
                            </div>

                            <Link
                                href={locationSection.getDirectionsLink}
                                target="_blank"
                                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-blue-600 font-semibold text-xs transition-colors shrink-0"
                            >
                                <span>{locationSection.getDirectionsText}</span>
                                <FaArrowRight className="text-sm" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="pt-10 border-gray-100 space-y-8"
                >

                    {/* Header */}
                    <motion.div variants={fadeUpVariants} className="text-center space-y-3 max-w-xl mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <span className="w-6 h-0.5 bg-blue-500" />
                            <span className="text-sm font-bold uppercase tracking-widest text-sky-600">
                                {methodsSectionHeader.subtitle}
                            </span>
                            <span className="w-6 h-0.5 bg-blue-500" />
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                            {methodsSectionHeader.titleLine1} <span className="text-blue-600">{methodsSectionHeader.titleHighlight}</span>
                        </h2>

                        <p className="text-sm text-gray-600">
                            {methodsSectionHeader.description}
                        </p>
                    </motion.div>

                    {/* 4 Cards Grid */}
                    <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {contactMethods.map((method, index) => {
                            const Icon = iconMap[method.icon] || FaHeadset;
                            return (
                                <motion.div
                                    key={method.id}
                                    variants={fadeUpVariants}
                                    className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-2 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer"
                                >
                                    <div className="space-y-2">
                                        <div className={`h-16 w-16 rounded-full ${method.iconBgColor} border ${method.iconBorderColor} flex items-center justify-center ${method.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-[10deg] group-hover:shadow-lg`}>
                                            <Icon className="text-3xl transition-transform duration-300 group-hover:scale-110" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-bold text-gray-900">{method.title}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {method.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href={method.linkHref}
                                            className={`inline-flex items-center gap-2 text-sm font-bold ${method.linkColor} ${method.linkHoverColor} transition-colors`}
                                        >
                                            <span>{method.linkText}</span>
                                            <FaArrowRight className="text-sm" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}