import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/bi";

interface TestimonialCardProps {
    quote: string;
    name: string;
    role: string;
    avatar: string;
    rating?: number;
    isDark?: boolean;
}

export default function TestimonialCard({
    quote,
    name,
    role,
    avatar,
    rating = 5,
    isDark = false,
}: TestimonialCardProps) {
    return (
        <div
            className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 shadow-md h-full group hover:-translate-y-2 ${isDark
                ? "bg-[#0b101c] text-white border border-gray-800 hover:border-blue-500/50"
                : "bg-white text-gray-900 border border-gray-100 hover:border-blue-200"
                }`}>
            {isDark && (
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none opacity-20">
                    <svg
                        className="absolute right-0 bottom-0"
                        width="200"
                        height="150"
                        viewBox="0 0 200 150"
                        fill="none">
                        <path
                            d="M50 150 C100 120, 130 80, 200 0"
                            stroke="#3b82f6"
                            strokeWidth="1.5"
                            fill="none"
                        />
                        <path
                            d="M0 130 C80 100, 110 60, 200 -20"
                            stroke="#60a5fa"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>
                </div>
            )}

            <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                            key={i}
                            size={20}
                            className={i < rating ? "text-amber-400" : "text-gray-300"}
                        />
                    ))}
                </div>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    "{quote}"
                </p>
            </div>
            <div className="pt-4 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-500/30">
                        <Image
                            src={avatar}
                            alt={name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div>
                        <h4 className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                            {name}
                        </h4>
                        <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            {role}
                        </p>
                    </div>
                </div>
                <div className={`transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12 ${isDark ? "text-blue-500/30 group-hover:text-blue-500/60" : "text-blue-100 group-hover:text-blue-200"}`}>
                    <BiSolidQuoteRight size={38} />
                </div>
            </div>
        </div>
    );
}