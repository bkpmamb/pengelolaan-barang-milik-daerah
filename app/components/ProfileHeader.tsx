// app/components/ProfileHeader.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Image */}
      <motion.div
        className="relative mx-auto mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="w-28 h-28 mx-auto rounded-full border-4 border-white/80 shadow-2xl bg-linear-to-br from-blue-100 to-indigo-200 overflow-hidden ring-2 ring-blue-200/50">
          <Image
            src="/images/logo.png"
            alt="Logo Balkesmas Ambarawa"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Animated Background Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-linear-to-r from-blue-400/20 to-indigo-400/20 blur-md -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Main Title */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 tracking-tight">
          Sipandai BMD
        </h1>

        {/* Title Underline */}
        <motion.div
          className="h-0.5 bg-linear-to-r from-blue-400/50 to-indigo-400/50 mx-auto w-16 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>

      {/* Organization Name */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-1 tracking-wide">
          Balkesmas Wilayah Ambarawa
        </h2>
        <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Kabupaten Semarang</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
