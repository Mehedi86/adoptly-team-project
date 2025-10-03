"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPaw, FaHome, FaFlask, FaSearch, FaHeart, FaBone } from "react-icons/fa";

const features = [
  {
    icon: <FaFlask className="text-white text-2xl" />,
    title: "Natural products",
    desc: "Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall."
  },
  {
    icon: <FaPaw className="text-white text-2xl" />,
    title: "Vet care",
    desc: "Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall."
  },
  {
    icon: <FaHome className="text-white text-2xl" />,
    title: "Housing",
    desc: "Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall."
  },
  {
    icon: <FaSearch className="text-white text-2xl" />,
    title: "Adoption",
    desc: "Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall."
  },
  {
    icon: <FaHeart className="text-white text-2xl" />,
    title: "Love & Care",
    desc: "Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall."
  },
  {
    icon: <FaBone className="text-white text-2xl" />,
    title: "Healthy Food",
    desc: "Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl text-black font-bold mb-12"
        >
          Our Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left side features */}
          <div className="space-y-12">
            {features.slice(0, 3).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-end text-center md:text-right"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-pink-600 w-14 h-14 flex items-center justify-center rounded-full mb-3 cursor-pointer shadow-lg"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-bold text-lg text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-80 md:h-[600px] rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <Image
              src="/about/features.jpg"
              alt="Dog grooming"
              fill
              className="object-cover"
            />
          </motion.div>


          {/* Right side features */}
          <div className="space-y-12">
            {features.slice(3).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-pink-600 w-14 h-14 flex items-center justify-center rounded-full mb-3 cursor-pointer shadow-lg"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-bold text-lg text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
