import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface RepairServiceCardProps {
    image: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
}

export default function RepairServiceCard({
    image,
    icon,
    title,
    description,
    href,
}: RepairServiceCardProps) {
    return (
        <Link
            href={href || "#"}
            className="group block bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-100 flex flex-col sm:flex-row transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
            {/* Left Image */}
            <div className="w-full sm:w-2/5 relative h-48 sm:h-auto min-h-[160px] rounded-2xl overflow-hidden bg-slate-900 shadow-md shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Right Details */}
            <div className="w-full sm:w-3/5 flex flex-col p-4 justify-between">
                <div className="space-y-2">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-inner">
                        {icon}
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1">
                        <h3 className="text-gray-900 font-bold text-xl tracking-tight">
                            {title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Learn More Footer Row */}
                <div className="flex items-center justify-between ">
                    <div className="inline-flex items-center gap-1.5 text-blue-600 group-hover:text-blue-700 font-bold text-xs tracking-wider uppercase transition-colors">
                        <span>Learn More</span>
                    </div>

                    <div
                        className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:bg-blue-700 transition-colors"
                    >
                        <FiArrowRight size={14} />
                    </div>
                </div>
            </div>
        </Link>
    );
}