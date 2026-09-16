import PageTopSection from "@/components/common/PageTopSection";
import TeamDetailPage from "@/sections/TeamDetailPage";
import { site } from "@/data";

export default function TeamDetail({ params }: { params: { slug: string } }) {
    const data = site.teamData;
    const members = data?.members || [];
    const member = members.find((m: any) => m.slug === params.slug) || members[0];

    return (
        <main>
            <PageTopSection title="Team Detail" />
            <TeamDetailPage member={member} />
        </main>
    );
}