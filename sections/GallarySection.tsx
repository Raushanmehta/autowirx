"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/utils/animations";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import GalleryCard from "@/components/cards/GalleryCard";
import { AutoWirxGalleryData } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GallarySectionProps {
    data: AutoWirxGalleryData;
}

export default function GallarySection({ data }: GallarySectionProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % data.images.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + data.images.length) % data.images.length);
        }
    };

    return (
        <section className="w-full bg-white py-10 sm:py-14 md:py-14 lg:py-14 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariants}
                    className="text-center max-w-4xl mx-auto space-y-3"
                >
                    <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>{data.header.tag}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                        {data.header.titleLine1} <span className="text-blue-600">{data.header.titleHighlight}</span>
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {data.header.description}
                    </p>
                </motion.div>

                {/* Gallery Grid Mapping GalleryCard */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {data.images.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUpVariants}
                        >
                            <button
                                onClick={() => setSelectedIndex(index)}
                                className="cursor-pointer text-left w-full h-full p-0 m-0 bg-transparent border-none focus:outline-none"
                            >
                                <GalleryCard
                                    imageSrc={image.src}
                                    altText={image.alt}
                                />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            {/* Lightbox Dialog */}
            <Dialog open={selectedIndex !== null} onOpenChange={(isOpen) => !isOpen && setSelectedIndex(null)}>
                <DialogContent className="aspect-square w-full max-w-[85vw] sm:max-w-[70vh] bg-transparent border-none shadow-none p-0 overflow-hidden rounded-xl flex items-center justify-center">
                    {selectedIndex !== null && (
                        <>
                            <DialogTitle className="sr-only">{data.images[selectedIndex].alt}</DialogTitle>
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={data.images[selectedIndex].src}
                                    alt={data.images[selectedIndex].alt}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors z-50 backdrop-blur-md"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors z-50 backdrop-blur-md"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}