"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { topbarContainerVariants as containerVariants, topbarItemVariants as itemVariants, topbarSocialVariants as socialVariants } from "../../utils/animations";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, } from "react-icons/fa";

import { site } from "../../data";

const IconMap: Record<string, React.ElementType> = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};
export default function TopBar() {
  const data = site.topbarData;

  return (
    <motion.div
      className="hidden sm:block w-full bg-[#0d1117] text-gray-300  text-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2.5 sm:py-3 gap-4">

          {/* Left Side */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
            <motion.a
              variants={itemVariants}
              href={`mailto:${data.email}`}
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FiMail className="text-blue-500 text-base" />
              <span>{data.email}</span>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href={`tel:${data.phone.replace(/[^+\d]/g, "")}`}
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FiPhoneCall className="text-blue-500 text-base" />
              <span>{data.phone}</span>
            </motion.a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={containerVariants}
            className="flex items-center gap-4">
            <motion.span
              variants={itemVariants}
              className="text-gray-400 font-medium">
              Follow Us:
            </motion.span>

            <div className="flex items-center gap-3">
              {data.socialLinks.map((social, idx) => {
                const Icon = IconMap[social.icon.toLowerCase()];
                return (
                  <motion.div
                    key={idx}
                    variants={socialVariants}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      {Icon && <Icon size={13} />}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}