"use client"

import TeamCard from "@/components/cards/TeamCard";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "../utils/animations";

export default function TeamSection({ data }: { data: any }) {
    const teamMembers = data?.members || [];

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
                        <span>{data?.header?.subtitle || "OUR TEAM"}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                        {data?.header?.titleLine1 || "Meet Our"} <span className="text-blue-600">{data?.header?.titleHighlight || "Expert Team"}</span>
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {data?.header?.description || "Our skilled and dedicated professionals work together to deliver the best mobile repair experience. With expertise, passion and a customer-first approach, our team is always ready to help you."}
                    </p>
                </motion.div>

                {/* Team Grid Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
                    {teamMembers.map((member: any, index: number) => (
                        <motion.div key={index} variants={fadeUpVariants} className="relative">
                            <TeamCard
                                image={member.image}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                socialLinks={member.socialLinks}
                                slug={member.slug}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}