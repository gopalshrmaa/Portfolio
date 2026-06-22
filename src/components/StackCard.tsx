import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  items: string[];
  icon?: React.ReactNode;
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function StackCard({ title, items, icon }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariant}
      transition={{ duration: 0.6 }}
      className="stack-card rounded-2xl border border-white/8 bg-white/3 backdrop-blur-md p-6 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#1f2330] flex items-center justify-center text-xl">{icon}</div>
        <h4 className="text-sm text-gray-300 font-semibold uppercase">{title}</h4>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((it) => (
          <span key={it} className="px-3 py-1 text-xs bg-white/5 text-gray-200 rounded-full border border-white/6">{it}</span>
        ))}
      </div>
    </motion.div>
  );
}
