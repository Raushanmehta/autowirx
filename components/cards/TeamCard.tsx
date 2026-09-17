"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

interface SocialLink {
    icon: string;
    href: string;
}

interface TeamCardProps {
    image: string;
    name: string;
    role: string;
    bio: string;
    socialLinks: SocialLink[];
    slug?: string;
}

export default function TeamCard({
    image,
    name,
    role,
    bio,
    socialLinks,
    slug,
}: TeamCardProps) {
    const router = useRouter();

    return (
        <motion.div
            onClick={() => router.push(`/team/${slug}`)}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative bg-white border border-gray-100 rounded-3xl p-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all duration-300 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(0,87,238,0.08)] h-full group z-10 cursor-pointer">

            {/* Decorative Graphic Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none -z-10">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-100/60 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            {/* Top Image with Blue Corner Accent */}
            <div>
                <div className="block relative w-full h-64 rounded-3xl overflow-hidden mb-6 bg-slate-900 group-hover:shadow-lg transition-shadow">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Blue triangle corner flag */}
                    <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 rounded-br-3xl pointer-events-none z-10"></div>
                </div>

                {/* Name & Role */}
                <div className="space-y-1 mb-2 flex flex-col items-center">
                    <h3 className="text-gray-900 font-bold text-xl tracking-tight hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                    <p className="text-blue-600 font-bold text-sm tracking-widest uppercase ">
                        {role}
                    </p>
                    <div className="w-12 h-0.5 bg-blue-600 rounded mx-auto mt-2"></div>
                </div>

                {/* Bio */}
                <p className="text-gray-500 text-sm sm:text-md leading-relaxed ">
                    {bio}
                </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-3 pt-4 w-full mt-auto mb-2">
                {socialLinks?.map((link, idx) => {
                    let Icon = null;
                    if (link.icon === 'facebook') Icon = FaFacebookF;
                    else if (link.icon === 'linkedin') Icon = FaLinkedinIn;
                    else if (link.icon === 'instagram') Icon = FaInstagram;

                    if (!Icon) return null;

                    return (
                        <Link
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                        >
                            <Icon size={18} />
                        </Link>
                    );
                })}
            </div>
        </motion.div>
    );
}