"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navbarVariants, logoVariants, navContainerVariants, navItemVariants, mobileMenuVariants, mobileItemsVariants } from "../../utils/animations";
import { FiChevronDown, FiArrowRight, FiMenu, FiX, FiSmartphone, FiBatteryCharging, FiMonitor, FiDroplet, FiZap, FiVolume2, FiCamera, FiSettings } from "react-icons/fi";
import { site } from "../../data";

export default function Navbar() {
  const data = site.navbarData;
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <motion.header
      className="w-full   sticky top-0 z-50 border-b border-gray-200"
      variants={navbarVariants}
      initial="hidden"
      animate="visible">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.div
            variants={logoVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src={data.logo.src}
                alt={data.logo.alt}
                width={200}
                height={100}
                className="h-16 sm:h-20 w-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center space-x-8">
            {data.navLinks.map((link, idx) => {
              if (link.subLinks) {
                return (
                  <motion.div
                    key={idx}
                    variants={navItemVariants}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}>
                    <button className="flex items-center gap-1 text-gray-800 hover:text-blue-600 font-medium transition-colors focus:outline-none py-2">
                      {link.label}
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}>
                        <FiChevronDown className="text-sm" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                            hidden: { opacity: 0, y: 10, scale: 0.96 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              transition: {
                                duration: 0.2,
                                ease: "easeOut",
                                staggerChildren: 0.05
                              }
                            }
                          }}
                          className="absolute top-full left-0 w-70 mt-5 bg-white shadow-xl  py-2 border border-gray-100 origin-top">
                          {link.subLinks.map((sub, subIdx) => {
                            const getIcon = () => {
                              const lbl = sub.label.toLowerCase();
                              if (lbl.includes("battery")) return <FiBatteryCharging className="text-blue-500 text-xl shrink-0" />;
                              if (lbl.includes("screen")) return <FiMonitor className="text-blue-500 text-xl shrink-0" />;
                              if (lbl.includes("water")) return <FiDroplet className="text-blue-500 text-xl shrink-0" />;
                              if (lbl.includes("charging") || lbl.includes("port")) return <FiZap className="text-blue-500 text-xl shrink-0" />;
                              if (lbl.includes("speaker") || lbl.includes("mic")) return <FiVolume2 className="text-blue-500 text-xl shrink-0" />;
                              if (lbl.includes("camera")) return <FiCamera className="text-blue-500 text-xl shrink-0" />;
                              if (lbl.includes("software")) return <FiSettings className="text-blue-500 text-xl shrink-0" />;
                              return <FiSmartphone className="text-blue-500 text-xl shrink-0" />;
                            };
                            return (
                              <motion.div
                                key={subIdx}
                                variants={{
                                  hidden: { opacity: 0, x: -10 },
                                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                                }}
                              >
                                <Link
                                  href={sub.href}
                                  className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                  {getIcon()}
                                  {sub.label}
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              }

              return (
                <motion.div key={idx} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut", }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}>
              <Link
                href={data.cta.href}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3 rounded-full shadow-md transition-colors gap-2 group">
                <span>{data.cta.label}</span>
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}>
                  <FiArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="flex lg:hidden items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2, }}>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.85 }}
              className="text-gray-800 hover:text-blue-600 focus:outline-none "
              aria-label="Toggle mobile menu">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7, }}
                  animate={{ opacity: 1, rotate: 0, scale: 1, }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7, }}
                  transition={{ duration: 0.2 }}
                  className="block">
                  {isMobileMenuOpen ? (
                    <FiX size={30} />
                  ) : (
                    <FiMenu size={30} />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden absolute top-full left-0 w-full shadow-2xl z-50">
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="px-4 pt-4 pb-6 space-y-3">
              {data.navLinks.map((link, idx) => {
                if (link.subLinks) {
                  return (
                    <motion.div key={idx} variants={mobileItemsVariants}>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-between w-full py-2 text-gray-800 font-medium">
                        <span>{link.label}</span>
                        <motion.span
                          animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}>
                          <FiChevronDown className="text-lg text-blue-600" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-2 border-l-2 border-blue-100 ml-2 mt-1 py-1">
                              {link.subLinks.map((sub, subIdx) => {
                                const getIcon = () => {
                                  const lbl = sub.label.toLowerCase();
                                  if (lbl.includes("battery")) return <FiBatteryCharging className="text-blue-500 text-lg shrink-0" />;
                                  if (lbl.includes("screen")) return <FiMonitor className="text-blue-500 text-lg shrink-0" />;
                                  if (lbl.includes("water")) return <FiDroplet className="text-blue-500 text-lg shrink-0" />;
                                  if (lbl.includes("charging") || lbl.includes("port")) return <FiZap className="text-blue-500 text-lg shrink-0" />;
                                  if (lbl.includes("speaker") || lbl.includes("mic")) return <FiVolume2 className="text-blue-500 text-lg shrink-0" />;
                                  if (lbl.includes("camera")) return <FiCamera className="text-blue-500 text-lg shrink-0" />;
                                  if (lbl.includes("software")) return <FiSettings className="text-blue-500 text-lg shrink-0" />;
                                  return <FiSmartphone className="text-blue-500 text-lg shrink-0" />;
                                };
                                return (
                                  <Link
                                    key={subIdx}
                                    href={sub.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsMobileServicesOpen(false);
                                    }}
                                    className="flex items-center gap-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 font-medium">
                                    {getIcon()}
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={idx} variants={mobileItemsVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-800 hover:text-blue-600 font-medium">
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                variants={mobileItemsVariants}
                className="pt-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}>
                  <Link
                    href={data.cta.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow-md gap-2 w-full transition-colors">
                    <span>{data.cta.label}</span>
                    <FiArrowRight />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}