"use client";

import { userDataFetching } from "@/hooks/userDataFetching/user";
import { motion } from "framer-motion";
import Image from "next/image";


const OurOffer = () => {


  

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* {offers.map((pet, index) => (
        <motion.div
          key={pet._id || index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden relative hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative">
            <Image
              src={pet.img || "/images/default.jpg"}
              alt={pet.title || pet.name}
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="bg-blue-500 absolute bottom-0 left-0 px-4 py-2 rounded-tr-lg">
              <h3 className="text-white font-bold text-lg">
                {pet.name || pet.title}
              </h3>
            </div>
          </div>

          <div className="p-6">
            <h4 className="font-bold text-xl mb-1">
              {pet.breed || pet.shortDescription}{" "}
              {pet.age && (
                <span className="text-gray-700 font-normal text-base">
                  - (Age: {pet.age})
                </span>
              )}
            </h4>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
              {pet.desc || pet.description}
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-md transition-all">
              Adopt Me
            </button>
          </div>

          <div className="absolute bottom-2 right-2 opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C9.238 2 7 4.239 7 7c0 1.933 1.382 3.544 3.204 3.933A4.992 4.992 0 0012 13a4.992 4.992 0 001.796-2.067C15.618 10.544 17 8.933 17 7c0-2.761-2.238-5-5-5z" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
              <circle cx="12" cy="22" r="2" />
            </svg>
          </div>
        </motion.div>
      ))} */}
      
    </div>
  );
};

export default OurOffer;
