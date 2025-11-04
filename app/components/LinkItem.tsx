// app/components/LinkItem.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { dropdownVariants } from "@/app/data/animations";

interface ChildLink {
  nama: string;
  link: string;
}

interface LinkItemProps {
  item: {
    no: number;
    nama: string;
    link: string;
    children?: ChildLink[];
  };
  expandedItem: number | null;
  toggleItem: (no: number) => void;
}

export default function LinkItem({
  item,
  expandedItem,
  toggleItem,
}: LinkItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/50 backdrop-blur-md border border-gray-200/80 rounded-xl hover:shadow-lg transition-all duration-300"
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 flex-1 group"
          >
            {/* Link Icon */}
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
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
              className="ml-2 p-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-500 hover:text-blue-600 transition-colors duration-200 shrink-0"
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
                    <ChildLinkItem
                      key={child.nama}
                      child={child}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}

// Child component for individual child links
function ChildLinkItem({ child, index }: { child: ChildLink; index: number }) {
  return (
    <motion.a
      href={child.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50/50 group"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ x: 4 }}
    >
      <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
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
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
