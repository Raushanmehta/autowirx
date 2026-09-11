"use client";
import BlogCard from "@/components/cards/BlogCard";
import { site } from "../../data";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "@/utils/animations";


export default function BlogSection() {
    const data = site.blogData;

    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase">
                        <span>―</span>
                        <span>{data.header.subtitle}</span>
                        <span>―</span>
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.items.map((blog, index) => (
                        <motion.div key={index} variants={fadeUpVariants}>
                            <BlogCard
                                image={blog.image}
                                category={blog.category}
                                date={blog.date}
                                title={blog.title}
                                description={blog.description}
                                href={blog.href}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}