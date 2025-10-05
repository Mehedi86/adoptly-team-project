"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl text-black dark:text-[#cfcfcf] font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-[#bbb] mb-6 leading-relaxed ">
            Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
            laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus.
            Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-3 text-black dark:text-[#cfcfcf]">
            We have over 20 years of experience
          </h3>
          <p className="text-gray-600 dark:text-[#bbb] mb-8 leading-relaxed">
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
            laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus.
            Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#e76f51] text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition"
            >
              CONTACT US
            </Link>
            <Link
              href="/services"
              className="bg-pink-600 text-white font-bold px-8 py-3 rounded-full hover:bg-pink-700 transition"
            >
              OUR SERVICES
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 relative w-full h-64 md:h-96"
        >
          <Image
            src="/about/mission.png"
            alt="Mission Image"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
