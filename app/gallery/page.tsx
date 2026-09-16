"use client";

import PageTopSection from "@/components/common/PageTopSection";
import GallarySection from "@/sections/GallarySection";
import { site } from "@/data";

export default function GalleryPage() {
    const data = site.galleryData;

    return (
        <main>
            <PageTopSection title="Gallery" />
            <GallarySection data={data} />
        </main>
    );
}