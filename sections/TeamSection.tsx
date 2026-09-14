"use client"

import TeamCard from "@/components/cards/TeamCard";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "../utils/animations";


export default function TeamSection() {
    const teamMembers = [
        {
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
            name: "Armaan Khan",
            role: "FOUNDER & TECHNICAL HEAD",
            bio: "Leads our team with a vision to deliver reliable and high-quality mobile repair solutions for everyone.",
            socials: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                facebook: "https://facebook.com",
            },
        },
        {
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
            name: "Sara Ali",
            role: "CUSTOMER SUPPORT MANAGER",
            bio: "Ensures every customer gets the right support, clear information and a smooth repair experience.",
            socials: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                facebook: "https://facebook.com",
            },
        },
        {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
            name: "Rohit Verma",
            role: "SENIOR REPAIR TECHNICIAN",
            bio: "Specializes in complex repairs with precision and care, ensuring your device is in safe hands.",
            socials: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                facebook: "https://facebook.com",
            },
        },
        {
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
            name: "Kunal Mehta",
            role: "OPERATIONS MANAGER",
            bio: "Keeps our services running smoothly and ensures the highest standards in every repair process.",
            socials: {
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com",
                facebook: "https://facebook.com",
            },
        },
    ];

    return (
        <section className="relative w-full bg-white  py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden">

            {/* Background Decorative Dot Grids */}
            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="absolute top-12 left-6 grid grid-cols-4 gap-2 opacity-60 pointer-events-none">
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                ))}
            </motion.div>

            <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="absolute bottom-12 right-6 grid grid-cols-4 gap-2 opacity-60 pointer-events-none">
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                ))}
            </motion.div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">

                {/* Section Header */}
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-2xl mx-auto space-y-3 mb-8">
                    <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>OUR TEAM</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                        Meet Our <span className="text-blue-600">Expert Team</span>
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Our skilled and dedicated professionals work together to deliver the best mobile repair experience. With expertise, passion and a customer-first approach, our team is always ready to help you.
                    </p>
                </motion.div>

                {/* Team Grid Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} variants={fadeUpVariants} className="relative">
                            <TeamCard
                                image={member.image}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                socials={member.socials}
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}