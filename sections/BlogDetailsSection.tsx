"use client"
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaUser, FaFire, FaFolderOpen } from "react-icons/fa";
import RelatedBlogCard from "@/components/cards/RelatedBlogCard";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "@/utils/animations";

export default function BlogDetailsSection({ data }: { data: any }) {
    const article = data?.article;
    const sidebar = data?.sidebar;
    const relatedArticles = data?.relatedArticles || [];

    if (!article) return null;

    return (
        <section className="relative bg-white py-10 sm:py-14 md:py-16 lg:py-16 overflow-hidden">

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

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <motion.div className="lg:col-span-8 space-y-6" variants={fadeUpVariants}>

                        {/* Article Header */}
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-2 rounded-sm bg-blue-600 text-white font-semibold text-xs tracking-wide shadow-sm">
                                {article.category}
                            </span>

                            <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-md sm:text-md text-gray-500 font-medium ">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-blue-600" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaClock className="text-blue-600" />
                                    <span>{article.readTime}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUser className="text-blue-600" />
                                    <span>By {article.author}</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden bg-gray-900 shadow-lg">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 66vw"
                                className="object-cover object-center opacity-90"
                            />
                        </div>

                        {/* Intro Paragraph */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {article.intro}
                        </p>

                        {/* Numbered List of Signs */}
                        <div className="space-y-6">
                            {article.contentBlocks.map((block: any, index: number) => (
                                <div key={index} className="space-y-2">
                                    <h3 className="text-md sm:text-lg font-semibold text-gray-900">
                                        {block.title}
                                    </h3>
                                    <p className="text-md sm:text-md text-gray-600 leading-relaxed">
                                        {block.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="lg:col-span-4 space-y-4 lg:sticky lg:top-0" variants={fadeUpVariants}>

                        {/* Blog Categories Box */}
                        <div className="bg-gray-50/80 rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-sm">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 border-b border-gray-200/60 pb-4">
                                Blog Categories
                            </h3>

                            <div className="space-y-2.5">
                                {sidebar.categories.map((cat: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={`/blog?category=${encodeURIComponent(cat.name)}`}
                                        className={`flex items-center justify-between px-4 py-3 rounded-md text-xs sm:text-sm font-semibold transition-all ${cat.active
                                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                                            : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-100"
                                            }`}>
                                        <span>{cat.name}</span>
                                        <span className={`px-2 py-1.5 rounded-full text-[11px] font-bold ${cat.active ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-600"
                                            }`}>
                                            {cat.count}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Popular Posts Box */}
                        <div className="bg-gray-50/80 rounded-3xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-sm">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 border-b border-gray-200/60 pb-4">
                                Popular Posts
                            </h3>

                            <div className="space-y-5">
                                {sidebar.popularPosts.map((post: any, index: number) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-gray-900 shrink-0 shadow-sm">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="64px"
                                                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Link
                                                href={post.href || post.link || "#"}
                                                className="font-semibold text-xs sm:text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug"
                                            >
                                                {post.title}
                                            </Link>
                                            <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                                                <FaCalendarAlt className="text-blue-600 text-[10px]" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div className=" border-gray-100 space-y-8" variants={fadeUpVariants}>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                            Related Articles
                        </span>
                        <span className="h-[2px] w-12 bg-sky-500" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map((article: any, index: number) => (
                            <RelatedBlogCard key={index} article={article} />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}