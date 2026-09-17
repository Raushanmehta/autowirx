"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import siteData from "@/data/site.json";

export default function NotFoundPage() {
    const data = siteData.AutoWirx.sections.notFound.variants.AutoWirxNotFound1;

    return (
        <section className="w-full bg-[#FCFDFE] py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex justify-center relative">
                        <img
                            src={data.image.src}
                            alt={data.image.alt}
                            className="w-full max-w-md lg:max-w-xl object-contain "
                        />
                    </div>

                    <div className="lg:col-span-5 space-y-6 text-center lg:text-left">

                        <div className="space-y-4">
                            {/* 404 Error Badge */}
                            <div className="inline-flex items-center justify-center lg:justify-start gap-3 w-full">
                                <span className="h-[2.5px] w-10 bg-sky-500" />
                                <span className="text-sm font-bold uppercase tracking-widest text-sky-600">
                                    {data.badge}
                                </span>
                                <span className="h-[2.5px] w-10 bg-sky-500" />
                            </div>

                            {/* Main Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                {data.title.line1} <span className="text-blue-600">{data.title.highlight}</span>
                            </h1>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                                {data.description}
                            </p>
                        </div>

                        {/* Go to Homepage Button */}
                        <div className="pt-2">
                            <Link
                                href={data.button.link}
                                className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-8 py-4 shadow-lg shadow-blue-500/25 transition-all duration-300"
                            >
                                <span>{data.button.text}</span>
                                <FaArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}