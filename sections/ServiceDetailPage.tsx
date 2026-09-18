import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { FiCheckCircle, FiSmartphone, FiShield, FiUsers, FiClock, FiDollarSign, FiSearch, FiFileText, FiTool, FiChevronRight } from "react-icons/fi";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

const IconMap: Record<string, React.ElementType> = {
    "shield": FiShield,
    "users": FiUsers,
    "clock": FiClock,
    "dollar-sign": FiDollarSign,
    "search": FiSearch,
    "file-text": FiFileText,
    "tool": FiTool,
    "check-circle": FiCheckCircle,
};

interface ServiceDetailPageProps {
    data: any;
}

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
    const { bulletPoints, whyChooseUs, repairSteps, overview, whyChooseUsHeader, repairProcessHeader } = data;
    const BottomBoxIcon = IconMap[overview.bottomBox.icon];
    return (

        <main className="relative w-full bg-white font-sans overflow-hidden">
            {/* Lightweight Background Gradients for the whole page */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-sky-50/60 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] z-0 pointer-events-none"></div>
            <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[80px] z-0 pointer-events-none"></div>

            {/* Decorative SVG Element */}
            <svg className="absolute top-20 right-10 w-24 h-24 text-blue-100 opacity-60 z-0 animate-pulse" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="10" />
                <circle cx="80" cy="30" r="6" />
                <circle cx="20" cy="70" r="8" />
                <circle cx="70" cy="80" r="5" />
            </svg>

            <section className="relative w-full py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden">
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left Column: Custom Before/After Phone Showcase Graphic with Skyblue Grids */}
                        <div className="lg:col-span-5 relative flex items-center justify-center py-6">

                            {/* Background Skyblue Grids / Cards */}
                            <div className="absolute w-[82%] h-[82%] bg-slate-100/70 rounded-[36px] -left-2 -top-2 transform -rotate-3 z-0"></div>
                            <div className="absolute w-[82%] h-[88%] bg-slate-50 rounded-[36px] right-2 -bottom-2 transform rotate-2 z-0 border border-sky-100"></div>

                            {/* Graphic Container */}
                            <div className="relative z-10 flex items-center justify-center w-full py-8 px-2">

                                {/* Left Side: "From This To This" Text & Curving SVG Arrow */}
                                <div className="absolute left-2 sm:-left-2 top-1/2 transform -translate-y-1/2 -rotate-15 z-30 flex flex-col items-start select-none">
                                    <div className={`${caveat.className} text-slate-800 text-2xl sm:text-3xl font-bold leading-tight tracking-wide drop-shadow-sm`}>
                                        <span className="w-6 h-0.5 bg-blue-500">{overview.fromText[0]}</span>
                                        <br />
                                        <span className="ml-3">{overview.fromText[1]}</span>
                                        <br />
                                        <span className="">{overview.fromText[2]}</span>
                                    </div>

                                    {/* Curving Arrow SVG pointing to the cracked phone */}
                                    <svg
                                        className="w-16 h-12 text-slate-800 mt-1 ml-1"
                                        viewBox="0 0 80 60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 10C15 35, 45 45, 65 32"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M55 25 L65 32 L55 40"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                {/* Single Service Graphic */}
                                <div className="relative flex items-center justify-center pl-14 sm:pl-16 w-full h-[350px] sm:h-[400px]">
                                    <Image
                                        src={overview.imageSrc}
                                        alt={overview.imageAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>

                            </div>

                        </div>

                        {/* Right Column: Text Content */}
                        <div className="lg:col-span-7 space-y-2 sm:space-y-2">

                            <div className="space-y-4">
                                <div className="flex items-center justify-start gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                                    <span>{overview.tag}</span>
                                    <span className="w-6 h-0.5 bg-blue-500"></span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                    {overview.title} <span className="text-blue-600">{overview.highlightTitle}</span>
                                </h1>
                            </div>

                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {overview.description}
                            </p>

                            {/* Checklist */}
                            <div className="space-y-3 pt-2">
                                {bulletPoints.map((point: string, index: number) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="text-blue-600 shrink-0">
                                            <FiCheckCircle size={24} />
                                        </div>
                                        <p className="text-gray-700 text-xs sm:text-sm font-medium">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Info Box */}
                            <div className="bg-slate-50 border border-gray-100 rounded-2xl p-4 flex items-center gap-4 mt-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                                    {BottomBoxIcon ? <BottomBoxIcon size={20} /> : <FiSmartphone size={20} />}
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                                    {overview.bottomBox.text}
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 2. Why Choose Us Section */}
            <section className="relative w-full py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                {/* Decorative SVG Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">

                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-0.5 bg-blue-500"></span>
                            <span>{whyChooseUsHeader.tag}</span>
                            <span className="w-6 h-0.5 bg-blue-500"></span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                            {whyChooseUsHeader.title} <span className="text-blue-600">{whyChooseUsHeader.highlightTitle}</span>
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {whyChooseUsHeader.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((item: any, index: number) => {
                            const IconComponent = IconMap[item.icon];
                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    <div className="w-18 h-18 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-inner mb-6">
                                        {IconComponent ? <IconComponent size={34} /> : <FiCheckCircle size={34} />}
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-gray-900 font-bold text-base tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-md sm:text-md leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* 3. Repair Process Section */}
            <section className="relative w-full bg-white py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden">
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[100px] z-0 pointer-events-none"></div>
                <div className="absolute right-10 top-20 text-sky-100/60 z-0 animate-bounce" style={{ animationDuration: '3s' }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-2">

                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                            {repairProcessHeader.title}
                        </h2>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                            {repairProcessHeader.subtitle} <span className="text-blue-600">{repairProcessHeader.highlightSubtitle}</span>
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {repairProcessHeader.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {repairSteps.map((item: any, index: number) => {
                            const IconComponent = IconMap[item.icon];
                            return (
                                <div
                                    key={index}
                                    className=" p-4 flex flex-col items-center text-center relative">

                                    {/* Connecting Arrow */}
                                    {index < repairSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-10 -right-4 transform translate-x-1/2 text-gray-300">
                                            <FiChevronRight size={32} />
                                        </div>
                                    )}

                                    <div className="w-18 h-18 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-inner mt-2 mb-4">
                                        {IconComponent ? <IconComponent size={34} /> : <FiCheckCircle size={34} />}
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-gray-900 font-bold text-base tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-md sm:text-md leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </main>
    );
}