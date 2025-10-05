"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Saving Lives: Vital Role of Animal Shelters in Pet Rescue Efforts",
    date: "March 26, 2024",
    desc: "Discover how animal shelters provide critical care and protection, ensuring abandoned pets get a second chance at life.",
    img: "/images/blogImg/blog1.jpg",
  },
  {
    id: 2,
    title: "Volunteers’ Impact on Animal Shelters and Pet Rescue Initiatives",
    date: "March 26, 2024",
    desc: "Learn how dedicated volunteers play a huge role in daily shelter operations, from feeding animals to organizing adoption events.",
    img: "/images/blogImg/blog2.jpg",
  },
  {
    id: 3,
    title: "Stray to Home: Stories of Redemption in Animal Shelter Adoptions",
    date: "March 26, 2024",
    desc: "Read inspiring stories of stray animals finding loving homes and the joy they bring to families through adoption.",
    img: "/images/blogImg/blog3.jpg",
  },
];

// Reusable animation
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogSection() {
  return (
    <section className="w-11/12 mx-auto my-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Latest Blog & Articles
        </h2>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition cursor-pointer">
          Contact Us
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-[#201f1f] rounded-xl shadow-md overflow-hidden"
          >
            <Image
              src={blog.img}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-[#e76f51] mb-2"><FaCalendarAlt className="inline mr-1" />   {blog.date}</p>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-[#cfcfcf]">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-[#bbbbbbd3] text-sm ">{blog.desc.slice(0, 100)}...</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
