"use client";
import { motion } from "framer-motion";

export default function OfferCard({ icon, title, description, active }) {
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`p-6 rounded-2xl shadow-lg bg-white text-gray-900 ${
        active ? "border-2 border-blue-500" : ""
      }`}
      variants={cardVariant}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="btn bg-amber-500 p-1 mt-2 md:mt-4 rounded-sm w-full">Learn More</button>
    </motion.div>
  );
}
