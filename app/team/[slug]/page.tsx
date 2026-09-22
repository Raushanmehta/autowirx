import PageTopSection from "@/components/common/PageTopSection";
import TeamDetailPage from "@/page-views/TeamDetailPage";
import { site } from "@/data";

export default async function TeamDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const data = site.teamData;
    const members = data?.members || [];
    const member = members.find((m: any) => m.slug === resolvedParams.slug) || members[0];

    return (
        <main>
            <PageTopSection title="Team Detail" />
            <TeamDetailPage member={member} />
        </main>
    );
}