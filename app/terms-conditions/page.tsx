import PageTopSection from "@/components/common/PageTopSection";
import LegalSection from "@/sections/LegalSection";
import siteData from "@/data/site.json";

export default function TermsAndConditionsPage() {
    const data = siteData.AutoWirx.sections.legal['terms-conditions'];
    return (
        <main>
            <PageTopSection title="Terms & Conditions" />
            <LegalSection data={data} />
        </main>
    );
}