import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
}
export default function ServiceCard({
    icon,
    title,
    description,
    href,
}: ServiceCardProps) {
    return (
        <Link href={href || "#"} className="block h-full cursor-pointer group">
            <motion.div
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-7 flex flex-col justify-between transition-colors duration-300 hover:bg-white/[0.06] hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(0,87,238,0.15)] h-full relative overflow-hidden">
                {/* Subtle Glass Highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                    {/* Circular Glowing Icon Wrapper */}
                    <motion.div
                        whileHover={{ rotate: 10, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-20 h-20 mx-auto rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,87,238,0.2)]">
                        {icon}
                    </motion.div>

                    {/* Title & Description */}
                    <div className="text-center space-y-2">
                        <h3 className="text-white font-bold text-xl tracking-wide">
                            {title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Learn More Link */}
                <div className="pt-6 text-center relative z-10">
                    <div
                        className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-400 font-semibold text-xs tracking-wider uppercase transition-colors group-hover:underline">
                        <span>Learn More</span>
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}