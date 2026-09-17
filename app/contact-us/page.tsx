"use client"

import PageTopSection from "@/components/common/PageTopSection";
import ContactSection from "@/sections/ContactSection";
import siteData from "@/data/site.json";

export default function ContactPage() {
    const contactData = siteData.AutoWirx.sections.contact.variants.AutoWirxContact1;

    return (
        <main>
            <PageTopSection title="Contact Us" />
            <ContactSection data={contactData} />
        </main>
    );
}