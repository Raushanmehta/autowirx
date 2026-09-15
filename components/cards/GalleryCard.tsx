import React from "react";
import Image from "next/image";

interface GalleryCardProps {
    imageSrc: string;
    altText: string;
}

export default function GalleryCard({ imageSrc, altText }: GalleryCardProps) {
    return (
        <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-900 group">
            <Image
                src={imageSrc}
                alt={altText}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Blue Tint Overlay */}
            <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-blue-950/10 transition-colors"></div>
        </div>
    );
}