import { motion } from "framer-motion";

export default function OfferContent() {
  return (
    <div>
      {/* Header */}
      <motion.p
        className="uppercase text-[#E76F51] font-lato text-sm tracking-wide mb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        What We Offer
      </motion.p>
      <motion.h2
        className="text-3xl font-extrabold font-truculenta dark:text-[#cfcfcf] text-gray-900 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        We provide a way for you to give back <br /> to animals in need
      </motion.h2>
    </div>
  );
};

