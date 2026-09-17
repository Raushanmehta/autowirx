import PageTopSection from "@/components/common/PageTopSection";
import LegalSection from "@/sections/LegalSection";
import siteData from "@/data/site.json";

export default function RefundPolicyPage() {
    const data = siteData.AutoWirx.sections.legal['refund-policy'];
    return (
        <main>
            <PageTopSection title="Refund Policy" />
            <LegalSection data={data} />
        </main>
    );
}