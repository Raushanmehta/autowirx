"use client";

import React, { useState } from "react";
import {
    FaCheckSquare,
    FaLock,
    FaArrowRight,
    FaFileUpload
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "@/utils/animations";

export default function CareerDetailSection({ job, detailSection }: { job?: any, detailSection?: any }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        resume: null as File | null,
        coverLetter: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Job Application Submitted:", formData);
        alert("Job application submitted successfully!");
    };

    return (
        <section className="relative bg-white py-10 sm:py-14 md:py-16 lg:py-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <motion.div variants={fadeUpVariants} className="lg:col-span-7 space-y-6">

                        {/* Job Overview */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                                    {detailSection?.jobOverviewTitle || "JOB OVERVIEW"}
                                </span>
                                <span className="h-[2px] w-12 bg-sky-500" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                {job?.title || "Mobile Repair Technician"}
                            </h2>
                            <p className="text-md sm:text-md text-gray-600 leading-relaxed">
                                {job?.description || "We are looking for a skilled and detail-oriented Mobile Repair Technician to join our service team. You will be responsible for diagnosing and repairing a wide range of mobile devices, including smartphones and tablets, while ensuring excellent customer service and high-quality repairs."}
                            </p>
                        </div>

                        {/* Key Responsibilities */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-gray-900">
                                {detailSection?.responsibilitiesTitle || "Key Responsibilities"}
                            </h3>
                            <div className="space-y-2.5 text-md sm:text-md text-gray-600">
                                {(job?.responsibilities || []).map((item: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <FaCheckSquare className="text-blue-600 mt-0.5 shrink-0 text-md" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-gray-900">
                                {detailSection?.requirementsTitle || "Requirements"}
                            </h3>
                            <div className="space-y-2.5 text-md sm:text-md text-gray-600">
                                {(job?.requirements || []).map((item: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <FaCheckSquare className="text-blue-600 mt-0.5 shrink-0 text-md" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Preferred Skills */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-gray-900">
                                {detailSection?.preferredSkillsTitle || "Preferred Skills"}
                            </h3>
                            <div className="space-y-2.5 text-md sm:text-md text-gray-600">
                                {(job?.preferredSkills || []).map((item: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <FaCheckSquare className="text-blue-600 mt-0.5 shrink-0 text-md" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    <motion.div variants={fadeUpVariants} className="lg:col-span-5 bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-4 sm:p-6 space-y-6 lg:sticky lg:top-10">
                        <div className="space-y-1">
                            <h3 className=" text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                {detailSection?.applicationForm?.title || "Apply for This Position"}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {detailSection?.applicationForm?.description || "Fill out the form below and our team will get back to you soon."}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Full Name */}
                            <div className="space-y-1">
                                <label className="block text-sm font-bold text-gray-700">
                                    {detailSection?.applicationForm?.fullNameLabel || "Full Name"} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-1">
                                <label className="block text-sm font-bold text-gray-700">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-1">
                                <label className="block text-sm font-bold text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Relevant Experience */}
                            <div className="space-y-1">
                                <label className="block text-sm font-bold text-gray-700">
                                    Relevant Experience <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all cursor-pointer"
                                >
                                    <option value="" disabled>Select experience</option>
                                    <option value="0-1">0 - 1 Years</option>
                                    <option value="1-3">1 - 3 Years</option>
                                    <option value="3-5">3 - 5 Years</option>
                                    <option value="5+">5+ Years</option>
                                </select>
                            </div>

                            {/* Upload Resume */}
                            <div className="space-y-1">
                                <label className="block text-sm font-bold text-gray-700">
                                    Upload Resume <span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center justify-between px-4 py-3 rounded-md border border-gray-200 bg-gray-50/50">
                                    <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-200/80 hover:bg-gray-200 text-gray-800 font-semibold text-xs transition-colors">
                                        <FaFileUpload />
                                        <span>Choose a file</span>
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            required
                                            className="hidden"
                                        />
                                    </label>
                                    <span className="text-sm text-gray-400 truncate max-w-[150px]">
                                        {formData.resume ? formData.resume.name : "No file chosen"}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 pt-0.5">
                                    PDF, DOC or DOCX (Max 5MB)
                                </p>
                            </div>

                            {/* Cover Letter */}
                            <div className="space-y-1">
                                <label className="block text-sm font-bold text-gray-700">
                                    Cover Letter <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <textarea
                                    name="coverLetter"
                                    rows={3}
                                    placeholder="Tell us why you're a great fit..."
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 bg-gray-50/50 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-4 shadow-lg shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                            >
                                <span>{detailSection?.applicationForm?.buttonText || "Submit Application"}</span>
                                <FaArrowRight className="text-sm" />
                            </button>

                            {/* Security Note */}
                            <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500 pt-1">
                                <FaLock className="text-gray-400 text-sm" />
                                <span>{detailSection?.applicationForm?.securityNote || "Your information is secure with us."}</span>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}