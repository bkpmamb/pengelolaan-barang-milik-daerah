import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  containerVariants,
  dropdownVariants,
  itemVariants,
} from "../data/animations";

export default function Header() {
  return (
    <>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative mx-auto mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden">
            {/* Ganti dengan Image component untuk foto profile */}
            <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white font-bold text-sm">
              BMD
            </div>

            <Image
              src="/images/logo.png"
              alt="Logo Balkesmas Ambarawa"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Verified Badge */}
          <motion.div
            className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h1
          className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Sipandai BMD
        </motion.h1>

        <motion.p
          className="text-gray-600 text-base mb-6 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Balkesmas Wilayah Ambarawa
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-gray-500 text-xs mb-8 max-w-xs mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Pengelolaan Barang Milik Daerah
        </motion.p>
      </motion.div>

      {/* Links List */}
      <motion.div
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.map((item) => (
          <motion.div
            key={item.no}
            variants={itemVariants}
            className="bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            {/* Main Link */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 flex-1 group"
                >
                  {/* Link Icon */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
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
                  <span className="font-semibold text-gray-800 text-left text-sm group-hover:text-blue-600 transition-colors">
                    {item.nama}
                  </span>
                </a>

                {/* Dropdown Toggle Button */}
                {item.children && (
                  <motion.button
                    onClick={() => toggleItem(item.no)}
                    className="ml-2 p-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-500 hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
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

              {/* Children Links Dropdown */}
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
                      <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                        {item.children.map((child, index) => (
                          <motion.a
                            key={child.nama}
                            href={child.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50/50 group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 4 }}
                          >
                            <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                              <svg
                                className="w-3 h-3 text-blue-600"
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
                            <span className="font-medium">{child.nama}</span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
