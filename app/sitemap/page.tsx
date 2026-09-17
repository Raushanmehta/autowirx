import PageTopSection from "@/components/common/PageTopSection";
import SitemapSection from "@/sections/SitemapSection";
import siteData from "@/data/site.json";

export default function SiteMapPage() {
    const data = siteData.AutoWirx.sections.sitemap.variants.AutoWirxSitemap1;

    return (
        <main>
            <PageTopSection title="Site Map" />
            <SitemapSection data={data} />
        </main>
    )
}