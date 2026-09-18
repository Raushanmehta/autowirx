import PageTopSection from "@/components/common/PageTopSection";
import BookRepairSection from "@/sections/BookRepairSection";
import { site } from "@/data";

export default function BookARepairPage() {
    const data = site.bookARepair;

    return (
        <main>
            <PageTopSection title="Book A Repair" />
            <BookRepairSection data={data} />
        </main>
    );
}