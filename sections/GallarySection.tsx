"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/utils/animations";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import GalleryCard from "@/components/cards/GalleryCard";
import { AutoWirxGalleryData } from "@/data";

interface GallarySectionProps {
    data: AutoWirxGalleryData;
}

export default function GallarySection({ data }: GallarySectionProps) {
    return (
        <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-16 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpVariants}
                    className="text-center max-w-4xl mx-auto space-y-4"
                >
                    <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                        <span>{data.header.tag}</span>
                        <span className="w-6 h-0.5 bg-blue-500"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
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
                            <Dialog>
                                <DialogTrigger className="cursor-pointer text-left w-full h-full p-0 m-0 bg-transparent border-none">
                                    <GalleryCard
                                        imageSrc={image.src}
                                        altText={image.alt}
                                    />
                                </DialogTrigger>
                                <DialogContent className="aspect-square w-full max-w-[70vw] sm:max-w-[70vh] bg-transparent border-none shadow-none p-0 overflow-hidden rounded-xl">
                                    <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="100vw"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}