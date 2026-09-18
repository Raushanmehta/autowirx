"use client";

import { useState } from "react";
import BlogPageCard from "@/components/cards/BlogPageCard";
import { fadeUpVariants, containerVariants } from "@/utils/animations";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

export default function BlogPageSection({ data }: { data: any }) {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams?.get("category");

    const [currentPage, setCurrentPage] = useState(1);

    // Filter items based on category if present
    const postsList = data.blogPosts || (data as any).items || [];
    const filteredItems = categoryQuery
        ? postsList.filter((item: any) => item.category === categoryQuery)
        : postsList;

    const postsPerPage = 9;
    const totalPages = Math.ceil(filteredItems.length / postsPerPage) || 1;

    // Ensure current page is valid when filtering changes
    const validCurrentPage = Math.min(currentPage, totalPages);

    const startIndex = (validCurrentPage - 1) * postsPerPage;
    const currentPosts = filteredItems.slice(startIndex, startIndex + postsPerPage);

    return (
        <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">

                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-2xl mx-auto space-y-3"
                >
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>{data.header.subtitle}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                        {data.header.titleLine1} <span className="text-blue-600">{data.header.titleHighlight}</span> {data.header.titleLine2}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {data.header.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {currentPosts.map((post: any, i: number) => (
                        <motion.div key={i} variants={fadeUpVariants}>
                            <BlogPageCard
                                category={post.category}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                readTime={post.readTime}
                                image={post.image}
                                href={post.href}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 pt-6">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaChevronLeft className="text-xs" />
                        </button>

                        {Array.from({ length: totalPages }).map((_, index) => {
                            const page = index + 1;
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`h-10 w-10 rounded-full font-bold text-sm flex items-center justify-center transition-colors cursor-pointer shadow-sm ${currentPage === page
                                        ? "bg-blue-600 text-white shadow-blue-500/25"
                                        : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaChevronRight className="text-xs" />
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}
