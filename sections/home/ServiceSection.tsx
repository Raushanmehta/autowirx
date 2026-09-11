"use client";

import ServiceCard from "@/components/cards/ServiceCard";
import { IoPhonePortraitOutline, IoBatteryChargingOutline, IoWaterOutline, IoSettingsOutline, IoHardwareChipOutline, IoVolumeHighOutline, IoCameraOutline, IoConstructOutline } from "react-icons/io5";
import { site } from "../../data";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "../../utils/animations";

const IconMap: Record<string, React.ElementType> = {
    phone: IoPhonePortraitOutline,
    battery: IoBatteryChargingOutline,
    water: IoWaterOutline,
    settings: IoSettingsOutline,
    chip: IoHardwareChipOutline,
    volume: IoVolumeHighOutline,
    camera: IoCameraOutline,
    construct: IoConstructOutline,
};

export default function ServiceSection() {
    const data = site.servicesData;

    return (
        <section className="w-full bg-[#070b12] text-white py-16 sm:py-20 lg:py-24 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
                {/* Section Header */}
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                    <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>{data.header.subtitle}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                        {data.header.titleLine1} <br />
                        {data.header.titleLine2} <span className="text-blue-500">{data.header.titleHighlight}</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {data.header.description}
                    </p>
                </motion.div>

                {/* Services Grid Mapping ServiceCard */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {data.servicesList.map((service, index) => {
                        const Icon = IconMap[service.icon];
                        return (
                            <motion.div key={index} variants={fadeUpVariants}>
                                <ServiceCard
                                    icon={<Icon size={32} />}
                                    title={service.title}
                                    description={service.description}
                                    href={service.href}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}