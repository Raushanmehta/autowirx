import PageTopSection from "@/components/common/PageTopSection";
import PricingSection from "@/sections/PricingSection";
import { site } from "@/data";

export default function PricingPage() {
    const data = site.pricingData;

    return (
        <main>
            <PageTopSection title="Pricing" />
            <PricingSection data={data} />
        </main>
    )
}