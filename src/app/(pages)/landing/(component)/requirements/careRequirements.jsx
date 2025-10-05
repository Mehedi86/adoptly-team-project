"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Care Requirements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
  {
    title: "Ensure Financial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
  {
    title: "Essential Pet Supplies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
  {
    title: "Adoption Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
];

export default function CareRequirements() {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const featureVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug dark:text-[#cfcfcf]">
            Getting Ready for a New Furry <br /> Family Member
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed dark:text-[#bbbbbbd3]">
            Purus nisl integer finibus sit etiam. Nec inceptos velit ridiculus
            maecenas erat rutrum diam dapibus placerat. Justo diam proin arcu
            massa blandit mattis. Laoreet natoque volutpat auctor augue taciti
            sapien lectus habitasse.
          </p>
          <button className="mt-6  bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition">
            Discover More
          </button>
        </div>

        {/* Right Features */}
        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              variants={featureVariant}
            >
              <Check className="text-red-400 w-52 text-5xl mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-[#cfcfcf]">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1 dark:text-[#bbbbbbd3]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
