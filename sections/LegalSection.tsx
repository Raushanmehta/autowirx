import Link from "next/link";
import { FaCheckCircle, FaTimesCircle, FaClock, FaEnvelope } from "react-icons/fa";

export default function LegalSection({ data }: { data?: any }) {
    if (!data || !data.sections) return null;

    return (
        <section className="relative bg-white py-10 sm:py-14 md:py-16 lg:py-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                    {data.sections.map((section: any, index: number) => (
                        <div key={index} className="space-y-3">
                            <h2 className=" text-xl sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                                <span className="text-blue-600">{index + 1}.</span> {section.title}
                            </h2>

                            {section.paragraphs?.map((p: string, pIndex: number) => (
                                <p key={pIndex} className="text-gray-600">
                                    {p}
                                </p>
                            ))}

                            {section.list && section.list.length > 0 && (
                                <ul className="space-y-2.5 pt-1 text-gray-600">
                                    {section.list.map((item: string, lIndex: number) => (
                                        <li key={lIndex} className="flex items-start gap-3">
                                            {section.listType === "cross" ? (
                                                <FaTimesCircle className="text-red-500 mt-1 shrink-0 text-md" />
                                            ) : (
                                                <FaCheckCircle className="text-blue-600 mt-1 shrink-0 text-md" />
                                            )}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.showContact && (
                                <>
                                    <div className="flex items-center gap-2 pt-1 text-blue-600 font-semibold">
                                        <FaEnvelope />
                                        <Link href="mailto:info@autowirx.com" className="hover:underline">
                                            info@autowirx.com
                                        </Link>
                                    </div>
                                    <p className="text-sm text-gray-500 pt-2">
                                        We're always here to help.
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}