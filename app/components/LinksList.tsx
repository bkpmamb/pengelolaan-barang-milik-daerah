// app/components/LinksList.tsx
"use client";

import { motion } from "framer-motion";
import LinkItem from "./LinkItem";
import { containerVariants } from "@/app/data/animations";

interface LinkItem {
  no: number;
  nama: string;
  link: string;
  children?: Array<{
    nama: string;
    link: string;
  }>;
}

interface LinksListProps {
  data: LinkItem[];
  expandedItem: number | null;
  toggleItem: (no: number) => void;
}

export default function LinksList({
  data,
  expandedItem,
  toggleItem,
}: LinksListProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((item) => (
        <LinkItem
          key={item.no}
          item={item}
          expandedItem={expandedItem}
          toggleItem={toggleItem}
        />
      ))}
    </motion.div>
  );
}
