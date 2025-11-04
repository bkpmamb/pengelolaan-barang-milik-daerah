// app/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import data from "@/app/data/links-data.json";
import {
  containerVariants,
  dropdownVariants,
  itemVariants,
} from "./data/animations";
import Footer from "./components/Footer";
import ProfileHeader from "./components/ProfileHeader";

export default function Home() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (no: number) => {
    setExpandedItem(expandedItem === no ? null : no);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimalist Paper Texture Background */}
      {/* Grid Background */}
      <div
        className="fixed inset-0 h-full w-full pointer-events-none opacity-30 bg-white 
  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
  bg-size-[24px_24px]"
      ></div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-linear-to-br from-[#4a879f]/50 to-[#f6af1a]/50 pointer-events-none" />
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 max-w-4xl">
        <ProfileHeader />

        <div className="max-w-4xl mx-auto bg-white/45 backdrop-blur-sm border border-gray-200/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Arsip Barang Milik Daerah
            </h1>
          </div>
          <motion.div
            className="space-y-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.map((item, index) => (
              <motion.div
                key={item.no}
                variants={itemVariants}
                className="relative"
              >
                {/* Separator antar item */}
                {index > 0 && (
                  <div className="absolute -top-1 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#4a879f]/20 to-transparent"></div>
                )}

                {/* Card Item */}
                <div className="bg-white/10 backdrop-blur-sm border border-gray-200/60 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 overflow-hidden group">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      {/* Main Link */}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 flex-1 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#f6af1a] to-[#4a879f] flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow group-hover:scale-105">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>

                        <span className="font-semibold text-gray-800 text-sm group-hover:text-[#4a879f] transition-colors">
                          {item.nama}
                        </span>
                      </a>

                      {/* Toggle Button */}
                      {item.children && (
                        <motion.button
                          onClick={() => toggleItem(item.no)}
                          className="ml-2 p-2 rounded-lg bg-gray-50 hover:bg-[#4a879f]/10 text-gray-500 hover:text-[#4a879f] transition-colors border border-gray-200 hover:border-[#4a879f]/30 duration-200 shrink-0"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            animate={{
                              rotate: expandedItem === item.no ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <path
                              d="m6 9 6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </motion.button>
                      )}
                    </div>

                    {/* Dropdown Children */}
                    {item.children && (
                      <AnimatePresence>
                        {expandedItem === item.no && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-[#4a879f]/20 space-y-2">
                              {item.children.map((child, childIndex) => (
                                <motion.a
                                  key={child.nama}
                                  href={child.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-3 text-sm text-gray-600 hover:text-[#4a879f] transition-colors py-2 px-3 rounded-lg hover:bg-[#4a879f]/10 group border-l-2 border-l-transparent hover:border-l-[#f6af1a]"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: childIndex * 0.05 }}
                                  whileHover={{ x: 4 }}
                                >
                                  <div className="w-6 h-6 rounded-md bg-[#4a879f]/10 flex items-center justify-center shrink-0 group-hover:bg-[#4a879f]/20 transition-colors">
                                    <svg
                                      className="w-3 h-3 text-[#4a879f]"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                  </div>
                                  <span className="font-medium">
                                    {child.nama}
                                  </span>
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
