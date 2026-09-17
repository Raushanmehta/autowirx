import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

interface BlogCardProps {
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
    href: string;
}

export default function BlogCard({
    image,
    category,
    date,
    title,
    description,
    href,
}: BlogCardProps) {
    return (
        <div className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg shadow-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-full">
            <div>
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md">
                        {category}
                    </div>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium">
                        <FiCalendar className="text-blue-600" />
                        <span>{date}</span>
                    </div>
                    <h3 className="text-gray-900 font-bold text-xl tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3">
                        {description}
                    </p>

                </div>
            </div>
            <div className="relative z-10 px-6 pb-6 pt-0">
                <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-xs tracking-wider uppercase transition-colors">
                    <span>Read More</span>
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Bottom Right Decorative Graphics */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full z-0 pointer-events-none"></div>
            <div className="absolute -bottom-3 -right-3 grid grid-cols-4 gap-1.5 opacity-10 pointer-events-none z-0 group-hover:opacity-30 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-500">
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                ))}
            </div>

        </div>
    );
}