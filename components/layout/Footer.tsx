"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { footerContainer, footerColumn, linkContainer, linkItem, contactItem, bottomItem, footerSocialItem as socialItem } from "../../utils/animations";
import { FiChevronRight, FiMapPin, FiPhone, FiMail, FiGlobe, } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, } from "react-icons/fa";
import { site } from "../../data";

const IconMap: Record<string, React.ElementType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
};

export default function Footer() {
  const data = site.footerData;

  return (
    <footer className="w-full bg-[#070b12] text-gray-400 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gray-800">
          <motion.div
            variants={footerColumn}
            className="lg:col-span-1 space-y-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}>
              <Link href="/" className="inline-block">
                <Image
                  src={data.logo.src}
                  alt={data.logo.alt}
                  width={200}
                  height={100}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </Link>
            </motion.div>

            <motion.p
              variants={footerColumn}
              className="text-md leading-relaxed text-gray-400">
              {data.description}
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, }}
              className="h-1 bg-blue-600 rounded"
            />
          </motion.div>

          <motion.div
            variants={footerColumn}
            className="space-y-4">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
              Quick Links
            </h3>

            <motion.ul
              variants={linkContainer}
              className="space-y-2.5">
              {data.quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  variants={linkItem}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-md text-gray-400 hover:text-blue-500 transition-colors group">
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}>
                      <FiChevronRight className="text-blue-600" />
                    </motion.span>

                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}>
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={footerColumn}
            className="space-y-4">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
              Our Services
            </h3>

            <motion.ul
              variants={linkContainer}
              className="space-y-2.5">
              {data.ourServices.map((service, idx) => (
                <motion.li
                  key={idx}
                  variants={linkItem}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-md text-gray-400 hover:text-blue-500 transition-colors group">
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}>
                      <FiChevronRight className="text-blue-600" />
                    </motion.span>

                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}>
                      {service.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={footerColumn}
            className="space-y-4">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
              Company
            </h3>

            <motion.ul
              variants={linkContainer}
              className="space-y-2.5">
              {data.companyLinks.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={linkItem}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-md text-gray-400 hover:text-blue-500 transition-colors group">
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}>
                      <FiChevronRight className="text-blue-600" />
                    </motion.span>

                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}>
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={footerColumn}
            className="space-y-4 lg:col-span-1">
            <h3 className="text-white font-bold text-lg tracking-wider uppercase relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
              Contact Info
            </h3>

            <motion.div
              variants={linkContainer}
              className="space-y-4">

              <motion.div
                variants={contactItem}
                className="flex items-start gap-3 pt-3 first:pt-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <FiMapPin size={20} />
                </motion.div>

                <p className="text-sm text-gray-300 leading-snug">
                  {data.contactInfo.address}
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={contactItem}
                className="flex items-center gap-3 pt-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <FiPhone size={20} />
                </motion.div>

                <a href={`tel:${data.contactInfo.phoneRaw}`}
                  className="text-md text-gray-300 hover:text-blue-500 transition-colors">{data.contactInfo.phone}
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={contactItem}
                className="flex items-center gap-3 pt-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <FiMail size={20} />
                </motion.div>

                <a href={`mailto:${data.contactInfo.email}`}
                  className="text-md text-gray-300 hover:text-blue-500 transition-colors">{data.contactInfo.email}</a>
              </motion.div>

              {/* Website */}
              <motion.div
                variants={contactItem}
                className="flex items-center gap-3 pt-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <FiGlobe size={20} />
                </motion.div>

                <a href={data.contactInfo.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-gray-300 hover:text-blue-500 transition-colors">
                  {data.contactInfo.website}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-md">

          {/* Copyright */}
          <motion.p
            variants={bottomItem}
            className="text-gray-400 text-center md:text-left">
            {data.bottomBar.copyright}
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={footerContainer}
            className="flex items-center gap-4">
            {data.bottomBar.socialLinks.map((social, index) => {
              const Icon = IconMap[social.icon.toLowerCase()];
              return (
                <motion.div
                  key={index}
                  variants={socialItem}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                    {Icon && <Icon size={14} />}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Policy Links */}
          <motion.div
            variants={bottomItem}
            className="flex items-center space-x-4 text-gray-400">
            {data.bottomBar.policyLinks.map((policy, idx) => (
              <React.Fragment key={idx}>
                <Link
                  href={policy.href}
                  className="hover:text-blue-500 transition-colors">
                  {policy.name}
                </Link>
                {idx < data.bottomBar.policyLinks.length - 1 && (
                  <span className="text-gray-700">|</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}