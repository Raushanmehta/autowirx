"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "@/utils/animations";
import Link from "next/link";
import { FiGitCommit, FiClock, FiShield, FiMapPin, FiSmartphone, FiCpu, FiCheckCircle, FiMail, FiPhone, FiStar, FiSmile } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function TeamDetailPage({ member }: { member: any }) {
    if (!member) return <div className="py-20 text-center">Team member not found</div>;

    const getIcon = (iconName: string, size = 40) => {
        switch (iconName) {
            case 'smartphone': return <FiSmartphone size={size} />;
            case 'cpu': return <FiCpu size={size} />;
            case 'checkCircle': return <FiCheckCircle size={size} />;
            default: return <FiSmartphone size={size} />;
        }
    };
    return (
        <section className="w-full bg-slate-50 py-10 sm:py-14 md:py-16 lg:py-16 font-sans">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                {/* Top Profile Main Card */}
                <motion.div
                    variants={fadeUpVariants}
                    className="bg-white border border-gray-100 rounded-3xl p-4 sm:p-4 shadow-xl shadow-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left: Image */}
                    <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900 shadow-lg">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                        {/* Blue corner ribbon */}
                        <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 rounded-br-3xl"></div>
                    </div>

                    {/* Right: Info & Meta Details */}
                    <div className="lg:col-span-7 space-y-4">

                        <div className="space-y-1">
                            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                                {member.name}
                            </h1>
                            <p className="text-blue-600 font-bold text-sm sm:text-lg tracking-widest uppercase">
                                {member.role}
                            </p>
                            <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="h-1 bg-blue-600 mt-3"></motion.div>
                        </div>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {member.description}
                        </p>

                        {/* 2x2 Meta Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-gray-100">

                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <FiGitCommit size={28} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-semibold uppercase">Experience</p>
                                    <p className="text-sm font-bold text-gray-900">{member.experience}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <FiClock size={28} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-semibold uppercase">Availability</p>
                                    <p className="text-sm font-bold text-gray-900">{member.availability}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <FiShield size={28} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-semibold uppercase">Specialization</p>
                                    <p className="text-sm font-bold text-gray-900">{member.specialization}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <FiMapPin size={28} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-semibold uppercase">Location</p>
                                    <p className="text-sm font-bold text-gray-900">{member.location}</p>
                                </div>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {member.socialLinks?.map((link: any, idx: number) => {
                                let Icon = FaFacebookF; // default
                                if (link.icon === 'linkedin') Icon = FaLinkedinIn;
                                else if (link.icon === 'instagram') Icon = FaInstagram;
                                else if (link.icon === 'email') Icon = FiMail;
                                else if (link.icon === 'phone') Icon = FiPhone;

                                return (
                                    <Link
                                        key={idx}
                                        href={link.href}
                                        className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                                    >
                                        <Icon size={24} />
                                    </Link>
                                );
                            })}
                        </div>

                    </div>

                </motion.div>

                {/* Middle Row: About & Professional Expertise */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* About Box */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-gray-100 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                                About {member.name.split(' ')[0]}
                                <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="h-1 bg-blue-600 mt-3"></motion.div>
                            </h2>
                            {member.about?.paragraphs.map((p: string, i: number) => (
                                <p key={i} className="text-gray-600 text-md md:text-sm lg:text-base leading-relaxed">
                                    {p}
                                </p>
                            ))}
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                            {member.about?.stats.map((stat: any, i: number) => {
                                const StatIcon = i === 0 ? FiSmartphone : i === 1 ? FiStar : FiSmile;
                                return (
                                    <div key={i} className="flex items-center gap-3  p-3">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm shrink-0">
                                            <StatIcon size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-xl font-black text-gray-900 leading-none">{stat.count}</h3>
                                            <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase mt-1">{stat.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Professional Expertise Box */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-gray-100 space-y-2">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                                Professional Expertise
                            </h2>
                            <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} className="h-1 bg-blue-600 mt-3 mb-6"></motion.div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                            {member.expertise?.map((item: any, idx: number) => (
                                <div key={idx} className="bg-slate-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="w-14 h-14 rounded-xl text-blue-600 flex items-center justify-center shrink-0">
                                        {getIcon(item.icon)}
                                    </div>
                                    <div className="space-y-2 mt-1">
                                        <h3 className="text-gray-900 font-bold text-base">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Timeline Row */}
                <motion.div
                    variants={fadeUpVariants}
                    className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-6 shadow-xl shadow-gray-100 space-y-8">
                    <div>
                        <h2 className="text-2xl font-black text-gray-900">
                            Experience Highlights
                        </h2>
                        <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} className="h-1 bg-blue-600 mt-3 mb-6"></motion.div>
                    </div>

                    {/* Timeline Bar */}
                    <div className="relative pb-2">

                        {/* Connecting Dotted Line */}
                        <div className="absolute top-6 left-[16.66%] right-[16.66%] h-0.5 border-t-2 border-dashed border-blue-300 hidden sm:block z-0"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                            {member.timeline?.map((item: any, idx: number) => (
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

                </motion.div>

            </motion.div>
        </section>
    );
}