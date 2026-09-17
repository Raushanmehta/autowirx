import PageTopSection from "@/components/common/PageTopSection";
import LegalSection from "@/sections/LegalSection";
import siteData from "@/data/site.json";

export default function WarrantyPolicyPage() {
    const data = siteData.AutoWirx.sections.legal['warranty-policy'];
    return (
        <main>
            <PageTopSection title="Warranty Policy" />
            <LegalSection data={data} />
        </main>
    );
}