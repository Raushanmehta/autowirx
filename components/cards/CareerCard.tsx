import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaBriefcase, FaArrowRight, FaTools, FaHeadset, FaCode, FaBullhorn, FaUsers, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/utils/animations";

const iconMap: Record<string, any> = {
    FaTools,
    FaHeadset,
    FaCode,
    FaBullhorn,
    FaUsers,
    FaFileAlt
};

export interface JobOpening {
    id: number;
    slug: string;
    title: string;
    experience: string;
    location: string;
    type: string;
    description: string;
    icon: string;
}

export default function CareersCard({ job }: { job: JobOpening }) {
    return (
        <motion.div
            variants={fadeUpVariants}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-4 sm:p-5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-transparent to-blue-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col h-full space-y-2">
                {/* Card Top: Icon & Experience Badge */}
                <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                        {(() => {
                            const Icon = iconMap[job.icon] || FaTools;
                            return <Icon className="text-blue-600 text-lg" />;
                        })()}
                    </div>
                    <span className="px-3 py-2 rounded-full bg-sky-50 text-sky-600 font-semibold text-xs border border-sky-100">
                        {job.experience}
                    </span>
                </div>

                {/* Job Title */}
                <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                        {job.title}
                    </h3>

                    {/* Location & Type */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="text-blue-600" />
                            <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaBriefcase className="text-blue-600" />
                            <span>{job.type}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-sm text-gray-600 leading-relaxed pt-1">
                        {job.description}
                    </p>
                </div>

                {/* Apply Now Button */}
                <div className="pt-2 max-w-2xl">
                    <Link
                        href={`/careers/${job.slug}`}
                        className="inline-flex items-center justify-center gap-2 w-max px-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm py-3 shadow-md shadow-blue-500/20 transition-all duration-300"
                    >
                        <span>Apply Now</span>
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>

            </div>
        </motion.div>
    );
}