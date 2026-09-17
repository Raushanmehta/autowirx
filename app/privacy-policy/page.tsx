import PageTopSection from "@/components/common/PageTopSection";
import LegalSection from "@/sections/LegalSection";
import siteData from "@/data/site.json";

export default function PrivacyPolicyPage() {
    const data = siteData.AutoWirx.sections.legal['privacy-policy'];
    return (
        <main>
            <PageTopSection title="Privacy Policy" />
            <LegalSection data={data} />
        </main>
    );
}