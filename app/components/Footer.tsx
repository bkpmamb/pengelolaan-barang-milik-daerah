import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <motion.footer
        className="text-center mt-8 pt-6 border-t border-gray-200/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-stone-800 text-xs">
          © 2024 Sipandai BMD - Balkesmas Ambarawa
        </p>
        <p className="text-stone-800 text-[10px] mt-1">
          Sistem Informasi Pengelolaan Barang Milik Daerah
        </p>
      </motion.footer>
    </>
  );
}
