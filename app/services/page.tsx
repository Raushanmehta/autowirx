"use Client"
import { FiSmartphone, FiBatteryCharging, FiDroplet, FiZap, FiVolume2, FiCamera, FiCpu, FiSettings, FiTool } from "react-icons/fi";
import RepairServiceCard from "@/components/cards/RepairServiceCarde";
import PageTopSection from "@/components/common/PageTopSection";
import { site } from "@/data";

const IconMap: Record<string, React.ElementType> = {
    "smartphone": FiSmartphone,
    "battery-charging": FiBatteryCharging,
    "droplet": FiDroplet,
    "zap": FiZap,
    "volume-2": FiVolume2,
    "camera": FiCamera,
    "cpu": FiCpu,
    "settings": FiSettings,
    "tool": FiTool
};

export default function ServicePage() {
    const data = site.servicesData;

    return (
        <main>
            <PageTopSection title="Services" />

            <section className="relative w-full bg-slate-50 py-10 sm:py-14 md:py-14 lg:py-14 font-sans overflow-hidden">
                {/* Background Decoration Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 z-0"></div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Header Details */}
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-8">
                        <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-0.5 bg-blue-500"></span>
                            <span>{data?.header?.subtitle || "OUR TEAM"}</span>
                            <span className="w-6 h-0.5 bg-blue-500"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                            {(data.header as any).title ? (
                                <>{(data.header as any).title}</>
                            ) : (
                                <>
                                    {data.header.titleLine1}
                                    <br />
                                    {data.header.titleLine2}
                                </>
                            )} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{(data.header as any).highlightTitle || (data.header as any).titleHighlight}</span>
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {data.header.description}
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4">
                        {data.servicesList.map((service: any, index: number) => {
                            const IconComponent = IconMap[service.icon];
                            return (
                                <RepairServiceCard
                                    key={index}
                                    image={service.image}
                                    icon={IconComponent ? <IconComponent size={28} /> : <FiTool size={28} />}
                                    title={service.title}
                                    description={service.description}
                                    href={service.href}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}