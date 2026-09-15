import GalleryCard from "@/components/cards/GalleryCard";
import PageTopSection from "@/components/common/PageTopSection";

export default function GalleryPage() {

    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
            alt: "Technician repairing smartphone motherboard",
        },
        {
            src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
            alt: "Sleek smartphones on workshop table",
        },
        {
            src: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
            alt: "Assembling phone components",
        },
        {
            src: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&auto=format&fit=crop&q=80",
            alt: "Cracked phone screen display",
        },
        {
            src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=80",
            alt: "Auto Wirx Professional Repair Workshop Setup",
        },
        {
            src: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&auto=format&fit=crop&q=80",
            alt: "Row of repaired phones on stands",
        },
        {
            src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
            alt: "Micro-soldering repair process",
        },
        {
            src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
            alt: "Professional repair tools and screwdrivers",
        },
        {
            src: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&auto=format&fit=crop&q=80",
            alt: "Internal phone parts and battery replacement",
        },
    ];
    return (
        <main>
            <PageTopSection title="Gallery" />
            <section className="w-full bg-whitesm:py-14 md:py-16 lg:py-16 font-sans">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase">
                            <span>―</span>
                            <span>OUR GALLERY</span>
                            <span>―</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                            Moments from <span className="text-blue-600">Our Workshop</span>
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            A closer look at our repair process, workspace and the care we put into every device.
                        </p>
                    </div>

                    {/* Gallery Grid Mapping GalleryCard */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {galleryImages.map((image, index) => (
                            <GalleryCard
                                key={index}
                                imageSrc={image.src}
                                altText={image.alt}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}