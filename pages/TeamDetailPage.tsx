import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FiGitCommit,
    FiClock,
    FiShield,
    FiMapPin,
    FiSmartphone,
    FiCpu,
    FiCheckCircle,
    FiMail,
    FiPhone
} from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function TeamDetailPage() {
    const expertise = [
        {
            icon: <FiSmartphone size={28} />,
            title: "Advanced Diagnostics",
            description: "Quick & accurate issue detection",
        },
        {
            icon: <FiSmartphone size={28} />,
            title: "Screen Repair",
            description: "Cracked screen specialist",
        },
        {
            icon: <FiCpu size={28} />,
            title: "Motherboard Repair",
            description: "Complex board level solutions",
        },
        {
            icon: <FiCheckCircle size={28} />,
            title: "Quality Testing",
            description: "Multi-point testing for perfection",
        },
    ];

    const timeline = [
        {
            step: "01",
            year: "2019",
            text: "Started his journey as a mobile repair technician and quickly mastered the basics of hardware and diagnostics.",
        },
        {
            step: "02",
            year: "2021",
            text: "Specialized in complex repairs and motherboard micro-soldering, earning recognition for precision.",
        },
        {
            step: "03",
            year: "2023",
            text: "Joined Auto Wirx as Senior Repair Technician and has been delivering outstanding results ever since.",
        },
    ];

    return (
        <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Top Profile Main Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left: Image */}
                    <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900 shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                            alt="Rohit Verma"
                            fill
                            className="object-cover"
                        />
                        {/* Blue corner ribbon */}
                        <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 rounded-br-3xl"></div>
                    </div>

                    {/* Right: Info & Meta Details */}
                    <div className="lg:col-span-7 space-y-6">

                        <div className="space-y-1">
                            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                                Rohit Verma
                            </h1>
                            <p className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase">
                                Senior Repair Technician
                            </p>
                        </div>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            With a passion for precision and a commitment to quality, Rohit specializes in advanced mobile repairs. He ensures every device is restored to perfect working condition with care and expertise.
                        </p>

                        {/* 2x2 Meta Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-gray-100">

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <FiGitCommit size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-semibold uppercase">Experience</p>
                                    <p className="text-sm font-bold text-gray-900">5+ Years</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <FiClock size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-semibold uppercase">Availability</p>
                                    <p className="text-sm font-bold text-gray-900">Mon – Sat (10:00 AM – 7:00 PM)</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <FiShield size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-semibold uppercase">Specialization</p>
                                    <p className="text-sm font-bold text-gray-900">Complex Repairs & Motherboard Fixes</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <FiMapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-semibold uppercase">Location</p>
                                    <p className="text-sm font-bold text-gray-900">Auto Wirx Service Center, New York, USA</p>
                                </div>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <FaLinkedinIn size={14} />, href: "https://linkedin.com" },
                                { icon: <FaInstagram size={14} />, href: "https://instagram.com" },
                                { icon: <FiMail size={15} />, href: "mailto:rohit@autowirx.com" },
                                { icon: <FiPhone size={14} />, href: "tel:+11234567890" },
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>

                    </div>

                </div>

                {/* Middle Row: About Rohit & Professional Expertise */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* About Rohit Box */}
                    <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-black text-gray-900 tracking-tight">
                                About Rohit
                            </h2>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                Rohit is a highly skilled repair technician with over 5 years of hands-on experience in mobile device repair. He is known for his attention to detail, problem-solving skills, and dedication to delivering the highest quality repairs.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                From cracked screens to complex motherboard issues, Rohit has successfully repaired thousands of devices, ensuring customers get reliable and long-lasting solutions.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-center">
                            <div>
                                <h3 className="text-lg font-black text-blue-600">5,000+</h3>
                                <p className="text-[10px] text-gray-400 font-semibold uppercase">Devices Repaired</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-blue-600">98%</h3>
                                <p className="text-[10px] text-gray-400 font-semibold uppercase">Repair Accuracy</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-blue-600">4.9/5</h3>
                                <p className="text-[10px] text-gray-400 font-semibold uppercase">Customer Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Expertise Box */}
                    <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100 space-y-6">
                        <div>
                            <div className="w-8 h-0.5 bg-blue-600 mb-2"></div>
                            <h2 className="text-xl font-black text-gray-900 tracking-tight">
                                Professional Expertise
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {expertise.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-gray-900 font-bold text-sm">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Experience Highlights Timeline */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-100 space-y-8">
                    <div>
                        <div className="w-8 h-0.5 bg-blue-600 mb-2"></div>
                        <h2 className="text-xl font-black text-gray-900 tracking-tight">
                            Experience Highlights
                        </h2>
                    </div>

                    {/* Timeline Bar */}
                    <div className="relative pt-6 pb-2">

                        {/* Connecting Dotted Line */}
                        <div className="absolute top-12 left-12 right-12 h-0.5 border-t-2 border-dashed border-blue-300 hidden sm:block z-0"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                            {timeline.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-blue-600/40 border-4 border-white">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-blue-600 font-black text-base">{item.year}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1 max-w-xs">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}