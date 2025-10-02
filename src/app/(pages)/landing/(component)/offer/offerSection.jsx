"use client";

import { PawPrint, Stethoscope, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import OfferCard from "./offerCard";
import OfferContent from "./offerContent";

export default function OfferSection() {
  const offers = [
    {
      icon: <PawPrint size={32} className="text-blue-500" />,
      title: "Pet Adoption",
      description:
        "Rutrum sodales vitae interdum commodo porta penatibus. Ad elit sagittis sodales fames lacinia id litora quis sagittis.",
      active: true,
    },
    {
      icon: <Stethoscope size={32} className="text-green-500" />,
      title: "Veterinary Care",
      description:
        "Rutrum sodales vitae interdum commodo porta penatibus. Ad elit sagittis sodales fames lacinia id litora quis sagittis.",
    },
    {
      icon: <Scissors size={32} className="text-pink-500" />,
      title: "Pet Grooming",
      description:
        "Rutrum sodales vitae interdum commodo porta penatibus. Ad elit sagittis sodales fames lacinia id litora quis sagittis.",
    },
    {
      icon: <PawPrint size={32} className="text-blue-500" />,
      title: "Pet Adoption",
      description:
        "Rutrum sodales vitae interdum commodo porta penatibus. Ad elit sagittis sodales fames lacinia id litora quis sagittis.",
      active: true,
    },
    {
      icon: <Stethoscope size={32} className="text-green-500" />,
      title: "Veterinary Care",
      description:
        "Rutrum sodales vitae interdum commodo porta penatibus. Ad elit sagittis sodales fames lacinia id litora quis sagittis.",
    },
    {
      icon: <Scissors size={32} className="text-pink-500" />,
      title: "Pet Grooming",
      description:
        "Rutrum sodales vitae interdum commodo porta penatibus. Ad elit sagittis sodales fames lacinia id litora quis sagittis.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
      <OfferContent />

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
