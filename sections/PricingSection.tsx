"use client"
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaShieldAlt, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/utils/animations";
import { AutoWirxPricingData } from "@/data";

export default function PricingSection({ data }: { data: AutoWirxPricingData }) {

    const renderIcon = (iconName: string, className: string) => {
        switch (iconName) {
            case "FaCheckCircle":
                return <FaCheckCircle className={className} />;
            case "FaShieldAlt":
                return <FaShieldAlt className={className} />;
            case "FaTools":
                return <FaTools className={className} />;
            default:
                return <FaCheckCircle className={className} />;
        }
    };

    return (
        <section className="relative bg-white py-10 sm:py-14 md:py-16 lg:py-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariants}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="space-y-3">
                        <div className="flex items-center justify-start gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                            <span>{data.header.tag}</span>
                            <span className="w-6 h-0.5 bg-blue-500"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                            {data.header.titleLine1} <span className="text-sky-500">{data.header.titleHighlight}</span>
                        </h2>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
                        {data.header.description}
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUpVariants}
                    className="overflow-x-auto rounded-2xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] bg-white"
                >
                    <table className="w-full text-left border-collapse min-w-[850px]">
                        <thead>
                            <tr className="bg-[#0b1329] text-white text-sm font-semibold">
                                <th className="py-4 px-6 rounded-tl-2xl">Service</th>
                                <th className="py-4 px-6">Description</th>
                                <th className="py-4 px-6 text-sky-400 bg-sky-950/40 font-bold">Premium</th>
                                <th className="py-4 px-6">Standard</th>
                                <th className="py-4 px-6">Budget</th>
                                <th className="py-4 px-6 rounded-tr-2xl">Basic</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            {data.pricingData.map((item, index) => (
                                <tr key={index} className="bg-white even:bg-slate-50/60 hover:bg-sky-50/60 transition-colors border-b border-gray-100 last:border-0">
                                    <td className="py-4 px-6 font-semibold text-gray-900">{item.service}</td>
                                    <td className="py-4 px-6 text-gray-500 text-xs sm:text-sm">{item.description}</td>
                                    <td className="py-4 px-6 font-bold text-sky-600 bg-sky-50/40">{item.premium}</td>
                                    <td className="py-4 px-6 font-medium text-gray-800">{item.standard}</td>
                                    <td className="py-4 px-6 font-medium text-gray-800">{item.budget}</td>
                                    <td className="py-4 px-6 font-medium text-gray-800">{item.basic}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariants}
                    className="relative rounded-3xl bg-gradient-to-r from-sky-50 via-sky-100/50 to-blue-50 border border-sky-100 overflow-hidden shadow-sm"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-7 p-8 sm:p-8 space-y-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                                {data.ctaBanner.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {data.ctaBanner.description}
                            </p>
                            <div>
                                <Link
                                    href={data.ctaBanner.buttonLink}
                                    className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-7 py-3.5 shadow-lg shadow-blue-500/25 transition-all duration-300"
                                >
                                    {data.ctaBanner.buttonText}
                                </Link>
                            </div>
                        </div>

                        {/* Banner Image / Graphic Side */}
                        <div className="lg:col-span-5 relative h-56 lg:h-full min-h-[220px] bg-[#0b1329] overflow-hidden lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
                            <Image
                                src={data.ctaBanner.image}
                                alt="Repair Workbench"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center opacity-80"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-50 via-sky-50/30 to-blue-50/60 border border-blue-100/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden shadow-sm">

                    {/* Decorative Background Graphics */}
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-sky-200/30 rounded-full blur-2xl pointer-events-none" />

                    <motion.div variants={fadeUpVariants} className="relative z-10 lg:col-span-4 space-y-2">
                        <div className="flex items-center justify-start gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                            <span>{data.whyPricingWorks.tag}</span>
                            <span className="w-6 h-0.5 bg-blue-500"></span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 leading-snug whitespace-pre-line">
                            {data.whyPricingWorks.title}
                        </h3>
                    </motion.div>

                    <div className="relative z-10 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-blue-100/60">
                        {data.whyPricingWorks.features.map((feature, idx) => (
                            <motion.div key={idx} variants={fadeUpVariants} className="space-y-1.5 p-4 sm:px-6">
                                <div className="flex items-center gap-2 font-semibold text-gray-900 text-lg">
                                    {renderIcon(feature.icon, "text-sky-500 shrink-0 h-6 w-6")}
                                    {feature.title}
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}