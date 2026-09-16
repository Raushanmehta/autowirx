
import PageTopSection from "@/components/common/PageTopSection";
import BlogPageSection from "@/sections/BlogPageSection";
import { site } from "@/data";
import { Suspense } from "react";

export default function BlogPage() {
    const data = site.blogData;

    return (
        <main>
            <PageTopSection title="Blogs" />
            <Suspense fallback={<div className="flex justify-center py-20 text-blue-600">Loading blogs...</div>}>
                <BlogPageSection data={data as any} />
            </Suspense>
        </main>
    );
}
