"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function ConnectSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[500px] rounded-2xl shadow-lg overflow-hidden"
        >
          <Image
            src="/contact/reachUs.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -left-6 bg-white shadow-lg rounded-2xl p-6 w-64"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-red-400 rounded-lg text-white mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600 text-sm">
              789 Oak St, Smalltown, TX 23456, United States
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-red-500 uppercase font-semibold tracking-wide mb-2"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Don&apos;t hesitate to contact us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8"
          >
            Potenti felis molestie erat mollis platea consectetur curae et gravida.
            In si laoreet purus lacus pede pretium a senectus ad feugiat.
          </motion.p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-red-400 rounded-lg text-white">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-gray-600 text-sm">hello@example.com</p>
                <p className="text-gray-600 text-sm">information@example.com</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-red-400 rounded-lg text-white">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-gray-600 text-sm">Phone 1: +1.555.987.6543</p>
                <p className="text-gray-600 text-sm">Phone 2: +1.555.987.6541</p>
              </div>
            </motion.div>
          </div>

          <hr className="my-6" />

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-4">Our social media:</h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-md text-black hover:opacity-80"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
