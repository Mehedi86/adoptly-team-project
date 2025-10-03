"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AdoptionInfo() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Adopt a Pet Today
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Bringing a pet into your life is a lifelong commitment. By adopting,
            you give a loving home to animals in need and create a bond that
            lasts forever.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Explore our pets available for adoption and find your new best friend.
            Each pet is cared for, vaccinated, and ready to join your family.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 relative w-full h-64 md:h-96 rounded-2xl shadow-lg overflow-hidden"
        >
          <Image
            src="/about/petInfo.jpg"
            alt="Family with dog"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
