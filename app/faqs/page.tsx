import PageTopSection from "@/components/common/PageTopSection";
import FAQSection from "@/sections/FaqSection";
import { site } from "@/data";

export default function FAQsPage() {
    const data = site.faqsData;

    return (
        <main>
            <PageTopSection title="FAQs" />
            <FAQSection data={data} />
        </main>
    );
}