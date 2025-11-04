// app/components/ProfileHeader.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileHeader() {
  const titleColors = {
    S: "#a20e0b",
    I: "#007d82",
    P: "#f6af1a",
    A: "#5c81c4",
    N: "#05fffc",
    D: "#a20e0b",
    B: "#b10202",
    M: "#5170ff",
    " ": "transparent",
  };

  const renderColoredTitle = (text: string) =>
    text.split("").map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block"
        style={{
          color: titleColors[letter as keyof typeof titleColors] || "#374151",
        }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 + index * 0.05 }}
      >
        {letter}
      </motion.span>
    ));

  return (
    <motion.div
      className="flex flex-col items-center bg-[#FFFFFF] rounded-2xl p-6 shadow-lg mb-4 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Unified Section - Image and Title Side by Side */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 text-center lg:text-left">
        {/* Image with enhanced border styling */}
        <div className="relative">
          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-4 border-gray-100 p-1 bg-white">
            <Image
              src="/images/logo.png"
              alt="Logo Balkesmas Ambarawa"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Outer border ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-300 pointer-events-none"></div>
        </div>

        {/* Title and Description */}
        <div className="flex-1">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-2">
            {renderColoredTitle("SIPANDAI-BMD")}
          </h1>

          {/* Updated line with responsive width and centering */}
          <div className="h-1 bg-linear-to-r from-[#a20e0b] via-[#f6af1a] to-[#5170ff] rounded-full w-[90%] mx-auto lg:mx-0 mb-3"></div>

          {/* Description moved here to be more integrated */}
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
            Sistem informasi pengelolaan pelaporan dan arsip barang milik daerah
            untuk pengelolaan dokumen yang transparan dan akuntabel di Balkesmas
            Wilayah Ambarawa.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
