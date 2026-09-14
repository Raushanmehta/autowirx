"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProcessStepCardProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProcessCard({
  stepNumber,
  icon,
  title,
  description,
}: ProcessStepCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all duration-300 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(0,87,238,0.08)] h-full group z-10">

      {/* Decorative Graphic Elements (Handled inner overflow) */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none -z-10">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-100/60 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      <div className="absolute -top-7 w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-md flex items-center justify-center shadow-md border-2 border-white z-20">
        {stepNumber}
      </div>
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-white text-blue-600 flex items-center justify-center mt-4 mb-6 border border-blue-100/60 group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-500 shadow-[0_4px_15px_rgba(0,87,238,0.1)] relative z-10">
        {icon}
      </motion.div>
      <div className="space-y-3 mb-4">
        <h3 className="text-gray-900 font-bold text-lg tracking-tight">
          {title}
        </h3>
        <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded"></div>
      </div>
      <p className="text-gray-500 text-sm  sm:text-md leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}