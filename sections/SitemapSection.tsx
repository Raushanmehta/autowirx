"use client"
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/utils/animations";

interface SitemapColumn {
    title: string;
    links: { name: string; href: string }[];
}

export default function SitemapSection({ data }: { data?: any }) {

    return (
        <section className="relative bg-white py-10 sm:py-14 md:py-16 lg:py-16 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                <motion.div variants={fadeUpVariants} className="text-center space-y-3 max-w-xl mx-auto">
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-[2.5px] w-10 bg-sky-500" />
                        <span className="text-sm font-bold uppercase tracking-widest text-sky-600">
                            {data?.header?.badge || "SITEMAP"}
                        </span>
                        <span className="h-[2.5px] w-10 bg-sky-500" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        {data?.header?.title?.line1 || "Website"} <span className="text-blue-600">{data?.header?.title?.highlight || "Sitemap"}</span>
                    </h1>

                    <p className="text-md text-gray-600">
                        {data?.header?.description || "Find all the pages on our website in one place."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 items-start">
                    {(data?.columns || []).map((column: SitemapColumn, colIndex: number) => (
                        <motion.div variants={fadeUpVariants} key={colIndex} className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {column.title}
                                </h3>
                                <div className="h-[2px] w-full bg-blue-600/30" />
                            </div>

                            {/* Links List */}
                            <ul className="space-y-3.5">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center justify-between text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
                                        >
                                            <span>{link.name}</span>
                                            <FaChevronRight className="text-sm text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}