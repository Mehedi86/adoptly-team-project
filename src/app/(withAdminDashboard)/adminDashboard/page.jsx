"use client";

import { adminDataFetching } from "@/hooks/adminDataFetching/admin";
import { motion } from "framer-motion";
import {FaUser} from "react-icons/fa"
//  Animation Variants (Reusable)
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const numberVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2, type: "spring", stiffness: 200, damping: 10 },
  },
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 64,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.5 },
  },
};

// 🧠 Component
const AdminDashboard = () => {
  const { data: allUsers, isLoading, error } = adminDataFetching.useUsers();

  if (isLoading)
    return (
      <p className="text-center py-10 text-gray-500 text-lg">Loading...</p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 text-lg">Failed to load users 😢</p>
    );

  const totalUsers = allUsers?.length || 0;

  return (
    <section className="p-8 grid-cols-3">
      {/* alluser */}
       <div className="flex justify-center items-center  ">
      <motion.div
        className="bg-orange-300 rounded-3xl shadow-xl p-10 text-center w-72 hover:shadow-2xl transition"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl font-bold flex items-center justify-center gap-1 text-center  mb-2"
          variants={numberVariants}
        >
           <span><FaUser /></span> {totalUsers}
        </motion.h1>

        <p className=" text-lg font-medium text-muted-foreground">
          Total Registered Users
        </p>

        <motion.div
          className="mt-5 w-16 h-1 bg-black mx-auto rounded-full"
          variants={lineVariants}
        />
      </motion.div>
      </div>
      
      {/* allPets */}
      <div></div>

      {/* allPost */}
      <div></div>
   </section>
  );
};

export default AdminDashboard;
