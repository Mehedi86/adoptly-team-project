"use client";

import { motion } from "framer-motion";
import { Users, Home, Award, Handshake } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-blue-700 transition-transform duration-300 group-hover:scale-110" />,
    number: "14",
    label: "Professionals",
  },
  {
    id: 2,
    icon: <Home className="w-8 h-8 text-blue-700 transition-transform duration-300 group-hover:scale-110" />,
    number: "100",
    label: "Adopted Pets",
  },
  {
    id: 3,
    icon: <Award className="w-8 h-8 text-blue-700 transition-transform duration-300 group-hover:scale-110" />,
    number: "12",
    label: "Awards",
  },
  {
    id: 4,
    icon: <Handshake className="w-8 h-8 text-blue-700 transition-transform duration-300 group-hover:scale-110" />,
    number: "1200",
    label: "Clients",
  },
];

export default function StatsSection() {
  return (
    <section
      className="relative bg-center bg-cover bg-fixed py-16"
      style={{
        backgroundImage: "url('/about/allPets.jpeg')", // Replace with your bg
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-md transform transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-3xl font-extrabold">{item.number}</h3>
              <p className="mt-1 text-lg font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
