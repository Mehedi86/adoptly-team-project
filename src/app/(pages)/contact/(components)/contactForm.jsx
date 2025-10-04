'use client';
import { motion } from 'framer-motion';
const inputStyle = "w-full bg-gray-100 text-black px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none";

const ContactForm = () => {
  return (
    <motion.div
      className="w-full bg-white p-6 md:p-8 shadow-xl rounded-xl text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-2">Leave a message</h2>
      <p className="mb-6">
        Tempor arcu tristique erat lobortis himenaeos class. Molestie a potenti donec magnis senectus tempus felis.
      </p>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Phone number"
            className={inputStyle}
          />
          <input
            type="email"
            placeholder="Your email"
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Subject"
            className={inputStyle}
          />
        </div>

        <textarea
          rows="4"
          placeholder="Your message"
          className={inputStyle}
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
