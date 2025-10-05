"use client";
import { motion } from "framer-motion";

export default function OfferCard({ icon, title, description, active }) {
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`p-6 rounded-2xl shadow-lg dark:bg-[#201f1f] bg-white text-gray-900 ${
        active ? "border-2 border-[#e76f51af]" : ""
      }`}
      variants={cardVariant}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4 ">{icon}</div>
      <h3 className="text-xl font-bold mb-2 dark:text-white font-truculenta">{title}</h3>
      <p className="text-gray-600 dark:text-[#a1a1a1] font-lato">{description}</p>
      <button className="btn bg-[#E76F51] border-0  p-1 mt-2 md:mt-4 rounded-xl w-full">Learn More</button>
    </motion.div>
  );
}
