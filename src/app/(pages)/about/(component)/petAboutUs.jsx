"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    title: "Our Philosophy",
    content: [
      "Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus.",
      "Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree."
    ]
  },
  {
    title: "Our Organization",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae urna nec libero volutpat posuere.",
      "Curabitur in dui vel metus faucibus hendrerit sit amet vel eros."
    ]
  },
  {
    title: "Partnerships with our team",
    content: [
      "Mauris eu magna sit amet leo tincidunt tincidunt sit amet eget orci.",
      "Aliquam erat volutpat. Sed quis justo ac risus consequat laoreet."
    ]
  }
];

const PetAboutUs = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#cfcfcf] mb-4">
            More About us
          </h2>
          <p className="text-lg text-gray-500 dark:text-[#bbb] mb-6">
            We offer quick & easy services for cats and dogs, accumsan felis id,
            fermentum purus. Quisque vitae hendrerit elit.
          </p>
          <p className="text-gray-600 dark:text-[#bbb] leading-relaxed mb-4">
            Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet
            nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam
            rhoncus leo a dolor placerat, nec elementum ipsum convall.
          </p>
          <p className="text-gray-600 dark:text-[#bbb] leading-relaxed">
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet
            nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam
            rhoncus leo a dolor placerat, nec elementum ipsum convall.
          </p>
        </motion.div>

        {/* Right Side - FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b pb-3 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {/* Title */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#bb5b43]">
                  {item.title}
                </h3>
                <span className="text-[#bb5b43]">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {/* Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 text-gray-600 dark:text-[#bbb] leading-relaxed overflow-hidden"
                  >
                    {item.content.map((text, i) => (
                      <p key={i} className="mb-2">
                        {text}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative paw prints */}
      <div className="absolute bottom-10 right-10 opacity-10 text-6xl">🐾</div>
      <div className="absolute top-20 right-40 opacity-10 text-6xl">🐾</div>
    </section>
  );
};

export default PetAboutUs;
