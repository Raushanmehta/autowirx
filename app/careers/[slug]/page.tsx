import PageTopSection from "@/components/common/PageTopSection";
import CareerDetailSection from "@/sections/CareerDetailSection";
import siteData from "@/data/site.json";
import { notFound } from "next/navigation";

export default async function JobDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const careersData = siteData.AutoWirx.sections.careers.variants.AutoWirxCareers1;
    const job = careersData.jobs.find((j: any) => j.slug === resolvedParams.slug);

    if (!job) {
        notFound();
    }

    return (
        <main>
            <PageTopSection title={job.title} />
            <CareerDetailSection job={job} />
        </main>
    );
}