'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Why choose us for your projects?',
    answer:
      'Justo consectetuer magna amet cras mus vulputate ipsum. Rhoncus curabitur odio urna faucibus tempus in et diam. Viverra taciti torquent tristique efficitur non est class nullam faucibus vel.',
  },
  {
    question: 'How we provide services for you?',
    answer:
      'We provide our services through a structured workflow — from initial consultation to final delivery, ensuring quality and transparency at every step.',
  },
  {
    question: 'About content creation, can I participate in the idea?',
    answer:
      'Absolutely! We value your ideas and encourage collaboration during the content creation process to reflect your vision perfectly.',
  },
  {
    question: 'What payment methods are available?',
    answer:
      'We accept multiple payment methods including bank transfer, mobile banking, and international payment gateways for your convenience.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      className="w-full border dark:shadow-2xl p-6 md:p-8 text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-2 dark:text-[#cfcfcf]">Frequently Asked Questions</h2>
      <p className="mb-6 dark:text-[#bbb]">
        Congue per mattis orci ac natoque facilisi eros tristique commodo justo penatibus. Et pulvinar
        litora senectus auctor nibh mollis sed mus vehicula.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-[#bbbb] rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left p-4 dark:bg-[#636262bb] "
            >
              <span className="font-semibold text-lg dark:text-[#cfcfcf]">{faq.question}</span>
              <span className="text-xl">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 dark:text-[#bbb]"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FaqSection;
