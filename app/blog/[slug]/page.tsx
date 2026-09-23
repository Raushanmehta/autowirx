import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailsSection from "@/page/BlogDetailsSection";
import { site } from "@/data";

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const blogData = site.blogData;
    const targetSlug = resolvedParams.slug;
    const postsList = blogData.blogPosts || (blogData as any).items || [];

    const article = postsList.find((item: any) => {
        if (!item.href) return false;
        // The href is like "/blog/some-slug", so extract the slug part
        const itemSlug = item.href.split('/').pop();
        return itemSlug === targetSlug || decodeURIComponent(itemSlug) === decodeURIComponent(targetSlug);
    });

    if (!article) {
        return (
            <div className="p-20 text-center">
                <h1 className="text-3xl font-bold text-red-500 mb-4">404: Article Not Found</h1>
                <p>Target Slug: "{targetSlug}"</p>
                <div className="mt-4 text-left inline-block max-w-xl bg-gray-100 p-4 rounded text-sm">
                    <strong>Available slugs:</strong>
                    <ul className="list-disc pl-5 mt-2">
                        {blogData.blogPosts?.map((item: any, i: number) => (
                            <li key={i}>{item.href?.split('/').pop() || 'undefined'}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    const relatedArticles = postsList
        .filter((item: any) => item.href && item.href.split('/').pop() !== targetSlug)
        .slice(0, 3);

    const data = { article, sidebar: blogData.sidebar, relatedArticles };

    return (
        <main>
            <PageTopSection title="Blog Details" />
            <BlogDetailsSection data={data as any} />
        </main>
    )
}