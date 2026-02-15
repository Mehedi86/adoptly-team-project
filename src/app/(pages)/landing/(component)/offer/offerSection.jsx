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
        "Join our pet adoption program and give loving homes to animals in need. Discover dogs, cats, and other pets waiting for a second chance, and make a positive impact on their lives.",
      active: true,
    },
    {
      icon: <Stethoscope size={32} className="text-green-500" />,
      title: "Veterinary Care",
      description:
        "Comprehensive veterinary care to keep your pets healthy and happy. From routine check-ups to emergency treatments, we provide professional medical attention for dogs, cats, and other animals.",
    },
    {
      icon: <Scissors size={32} className="text-pink-500" />,
      title: "Pet Grooming",
      description:
        "Professional pet grooming services to keep your pets looking and feeling their best. From baths and haircuts to nail trimming and styling, we ensure your furry friends stay healthy, clean, and happy.",
    },
    {
      icon: <PawPrint size={32} className="text-blue-500" />,
      title: "Pet Adoption",
      description:
        "Help animals find their forever homes through our pet adoption program. Discover loving dogs, cats, and other pets in need, and give them a second chance at happiness while gaining a loyal companion for life.",
      active: true,
    },
    {
      icon: <Stethoscope size={32} className="text-green-500" />,
      title: "Veterinary Care",
      description:
        "Providing compassionate and professional veterinary care to keep your pets healthy and happy. From routine check-ups and vaccinations to emergency treatments, we ensure every animal receives the medical attention and love they deserve.",
    },
    {
      icon: <Scissors size={32} className="text-pink-500" />,
      title: "Pet Grooming",
      description:
        "Keep your pets looking and feeling their best with our professional grooming services. From baths and haircuts to nail trimming and styling, we ensure your furry friends stay clean, healthy, and happy, all while enjoying a pampering experience.",
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
