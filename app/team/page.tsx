import CtaSection from "@/components/common/CtaSection"
import PageTopSection from "@/components/common/PageTopSection"
import TeamSection from "@/sections/TeamSection"

export default function TeamPage() {
    return (
        <main>
            <PageTopSection title="Our Team" />
            <TeamSection />
            <CtaSection />
        </main>
    )
}