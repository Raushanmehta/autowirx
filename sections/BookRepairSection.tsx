"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    FaMobileAlt,
    FaCalendarAlt,
    FaShieldAlt,
    FaUser,
    FaPhoneAlt,
    FaWrench,
    FaArrowRight
} from "react-icons/fa";

export default function BookRepairSection() {
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

    return (
        <section className="relative bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="mx-auto max-w-[1400px] space-y-16 sm:space-y-24">

                {/* ================= PART 1: QUICK REPAIR INFO BANNER ================= */}
                <div className="relative rounded-3xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-sky-100 p-8 sm:p-12 overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                                        Book A Repair
                                    </span>
                                    <span className="h-[2px] w-12 bg-sky-500" />
                                </div>
                                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                    Quick Repair in Just a <span className="text-blue-600">Few Clicks</span>
                                </h2>
                                <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
                                    Fill in your details and let our experts take care of the rest. Fast. Easy. Reliable.
                                </p>
                            </div>

                            {/* 3 Step Icons */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                                <div className="space-y-2">
                                    <div className="h-12 w-12 rounded-2xl bg-white shadow-md border border-sky-100 flex items-center justify-center text-blue-600">
                                        <FaMobileAlt className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm">1. Fill Details</h4>
                                    <p className="text-xs text-gray-500">Tell us about your device and issue.</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="h-12 w-12 rounded-2xl bg-white shadow-md border border-sky-100 flex items-center justify-center text-blue-600">
                                        <FaCalendarAlt className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm">2. Schedule</h4>
                                    <p className="text-xs text-gray-500">Choose your preferred date & time.</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="h-12 w-12 rounded-2xl bg-white shadow-md border border-sky-100 flex items-center justify-center text-blue-600">
                                        <FaShieldAlt className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm">3. Get It Fixed</h4>
                                    <p className="text-xs text-gray-500">Our experts will handle the rest.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
                            <Image
                                src="/images/repair-bench.jpg"
                                alt="Repair Expert at Workbench"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center opacity-85"
                            />
                        </div>

                    </div>
                </div>

                {/* ================= PART 2: SCHEDULE YOUR REPAIR FORM SECTION ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Info & Bullet Points */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                                    Book A Repair
                                </span>
                                <span className="h-[2px] w-12 bg-sky-500" />
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                Schedule Your <span className="text-blue-600">Repair Today</span>
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Provide a few details and we'll take care of the rest. It's quick, simple and secure.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <FaMobileAlt className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Easy Booking</h4>
                                    <p className="text-xs text-gray-500">In just a few steps</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <FaCalendarAlt className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Choose Date & Time</h4>
                                    <p className="text-xs text-gray-500">At your convenience</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <FaShieldAlt className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Trusted Service</h4>
                                    <p className="text-xs text-gray-500">By certified technicians</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Full Name */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <FaUser />
                                </span>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <FaPhoneAlt />
                                </span>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Select Device */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <FaMobileAlt />
                                </span>
                                <select
                                    name="device"
                                    value={formData.device}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Device</option>
                                    <option value="iphone">Apple iPhone</option>
                                    <option value="samsung">Samsung Galaxy</option>
                                    <option value="oneplus">OnePlus</option>
                                    <option value="xiaomi">Xiaomi / Redmi</option>
                                    <option value="other">Other Brand</option>
                                </select>
                                <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 text-xs">
                                    ▼
                                </span>
                            </div>

                            {/* Select Issue */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <FaWrench />
                                </span>
                                <select
                                    name="issue"
                                    value={formData.issue}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Issue</option>
                                    <option value="screen">Screen Replacement</option>
                                    <option value="battery">Battery Replacement</option>
                                    <option value="charging">Charging Port Repair</option>
                                    <option value="camera">Camera Repair</option>
                                    <option value="water">Water Damage Repair</option>
                                    <option value="other">Other Issue</option>
                                </select>
                                <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 text-xs">
                                    ▼
                                </span>
                            </div>

                            {/* Preferred Date */}
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                    <FaCalendarAlt />
                                </span>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-4 shadow-lg shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                            >
                                <span>Book a Repair</span>
                                <FaArrowRight className="text-xs" />
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}