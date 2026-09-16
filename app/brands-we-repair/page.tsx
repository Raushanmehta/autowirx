"use client";

import PageTopSection from "@/components/common/PageTopSection";
import BrandsSection from "@/sections/BrandsSection";
import { site } from "@/data";

export default function BrandsWeRepairPage() {
    const data = site.brandsWeRepairData;

    return (
        <main>
            <PageTopSection title="Brands We Repair" />
            <BrandsSection data={data} />
        </main>
    );
}