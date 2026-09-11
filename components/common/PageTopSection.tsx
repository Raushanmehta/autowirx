"use client";
import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { site } from "../../data";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "../../utils/animations";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageTopSectionProps {
    title: string;
    breadcrumbs?: BreadcrumbItem[];
    backgroundImage?: string;
}

export default function PageTopSection({
    title,
    breadcrumbs,
    backgroundImage,
}: PageTopSectionProps) {
    const data = site.pageHeaderData;

    const finalBackgroundImage = backgroundImage || data.defaultBgImage;
    const finalBreadcrumbs = breadcrumbs || [
        { label: data.homeLabel, href: "/" },
        { label: title },
    ];
    return (
        <section className="relative w-full h-72 sm:h-72 lg:h-80 bg-slate-900 overflow-hidden flex items-center justify-center font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center z-0 mix-blend-luminosity"
                style={{ backgroundImage: `url(${finalBackgroundImage})` }}
            ></motion.div>
            {/* Blue Gradient Lighting Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-slate-950/80 z-10"></div>

            {/* Decorative Wave / Curve Lines on the Right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none opacity-20 z-10 hidden sm:block">
                <svg
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full"
                    width="600"
                    height="400"
                    viewBox="0 0 600 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <path
                            key={i}
                            d={`M${100 + i * 30} 400 C${300 + i * 20} 250, ${200 + i * 15} 150, 600 ${i * 40}`}
                            stroke="#60a5fa"
                            strokeWidth="1"
                            fill="none"
                        />
                    ))}
                </svg>
            </div>

            {/* Diagonal Angular Blue Shape on Left */}
            <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-blue-600/30 transform -skew-x-12 z-10 pointer-events-none blur-sm"></div>

            {/* Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-20 text-center px-4 sm:px-6 lg:px-8 space-y-3">

                {/* Main Dynamic Title */}
                <motion.h1
                    variants={fadeUpVariants}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md">
                    {title}
                </motion.h1>

                {/* Dynamic Breadcrumbs */}
                <motion.nav
                    variants={fadeUpVariants}
                    className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium text-blue-200">
                    {finalBreadcrumbs.map((item, index) => {
                        const isLast = index === finalBreadcrumbs.length - 1;
                        return (
                            <React.Fragment key={index}>
                                {index > 0 && <FiChevronRight className="text-blue-400 text-xs" />}
                                {item.href && !isLast ? (
                                    <Link
                                        href={item.href}
                                        className="hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-white font-semibold">{item.label}</span>
                                )}
                            </React.Fragment>
                        );
                    })}
                </motion.nav>
            </motion.div>
        </section>
    );
}