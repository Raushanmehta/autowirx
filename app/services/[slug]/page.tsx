import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import { site } from "@/data";
import { notFound } from "next/navigation";

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = site.servicesData.servicesList.find(s => s.id === resolvedParams.slug);

    if (!service || !service.detailData) {
        return notFound();
    }

    return (
        <main>
            <PageTopSection title="Service Details" />
            <ServiceDetailPage data={service.detailData} />
        </main>
    )
}