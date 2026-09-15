import CtaSection from "@/components/common/CtaSection"
import PageTopSection from "@/components/common/PageTopSection"
import TeamSection from "@/sections/TeamSection"
import { site } from "@/data"

export default function TeamPage() {
    return (
        <main>
            <PageTopSection title="Our Team" />
            <TeamSection data={site.teamData} />
            <CtaSection />
        </main>
    )
}