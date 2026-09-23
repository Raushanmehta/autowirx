"use client";

import React, { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { site } from "../../data";
import { motion } from "framer-motion";
import { fadeUpVariants, containerVariants } from "@/utils/animations";

export default function TestimonialSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const autoplayPlugin = useRef(
        Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const data = site.testimonialsData;

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="w-full bg-slate-50 py-10 sm:py-14 md:py-16 lg:py-16 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-5">
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>{data.header.subtitle}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                        {data.header.titleLine1} <span className="text-blue-600">{data.header.titleHighlight}</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {data.header.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative">
                    <Carousel
                        setApi={setApi}
                        plugins={[autoplayPlugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full">
                        <CarouselContent className=" items-stretch py-2">
                            {data.items.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className=" basis-full sm:basis-1/2 lg:basis-1/3 flex">
                                    <div className="w-full h-full">
                                        <TestimonialCard
                                            quote={item.quote}
                                            name={item.name}
                                            role={item.role}
                                            avatar={item.avatar}
                                            rating={item.rating}
                                            isDark={item.isDark}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-4 lg:-left-6 bg-white/90 hover:bg-blue-600 hover:text-white border-gray-200 text-gray-800 shadow-md transition-colors" />
                            <CarouselNext className="-right-4 lg:-right-6 bg-white/90 hover:bg-blue-600 hover:text-white border-gray-200 text-gray-800 shadow-md transition-colors" />
                        </div>
                    </Carousel>
                    <div className="flex justify-center items-center gap-2 pt-6">
                        {Array.from({ length: count }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${current === i
                                    ? "w-8 bg-blue-600 shadow-sm"
                                    : "w-2.5 bg-blue-200 hover:bg-blue-300"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}