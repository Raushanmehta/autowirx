import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

interface RelatedArticle {
    category: string;
    title: string;
    date: string;
    readTime: string;
    image: string;
    link?: string;
    href?: string;
}

export default function RelatedBlogCard({ article }: { article: RelatedArticle }) {
    return (
        <div className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-md bg-blue-600 text-white font-semibold text-xs tracking-wide shadow-md">
                        {article.category}
                    </span>
                </div>
            </div>

            <div className="p-4 sm:px-6 py-4 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-1.5">
                            <FaCalendarAlt className="text-blue-600 text-sm" />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaClock className="text-blue-600 text-sm" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {article.title}
                    </h3>
                </div>

                <div className="pt-2 border-t border-gray-100">
                    <Link
                        href={article.href || article.link || "#"}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <span>Read More</span>
                        <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}