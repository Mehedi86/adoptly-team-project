'use client';

import Image from 'next/image';
import chooseImg1 from "../../../../../../public/images/chooseImg/chooseImg1.png";
import { motion } from "framer-motion";

// React Icons
import { FaShieldVirus } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdWifiCalling3 } from "react-icons/md";

// ✅ Slide from Bottom Animation
const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
    icon: <FaShieldVirus className='text-white' size={24} />,
    title: "Professional Trainer",
    desc: "Suspendisse mattis quis at congue sem nam hac pede bibendum in letius. Ornare maximus hac quis tempus dignissim.",
  },
  {
    icon: <AiFillMessage className='text-white' size={24} />,
    title: "24/7 Support",
    desc: "Suspendisse mattis quis at congue sem nam hac pede bibendum in letius. Ornare maximus hac quis tempus dignissim.",
  },
  {
    icon: <MdWifiCalling3 className='text-white' size={24} />,
    title: "Easy Communication",
    desc: "Suspendisse mattis quis at congue sem nam hac pede bibendum in letius. Ornare maximus hac quis tempus dignissim.",
  },
];

const ChooseUs = () => {
  return (
    <section className='w-11/12 mx-auto my-20'>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className='w-full lg:w-6/12 text-center mx-auto'
        >
          <Image
            src={chooseImg1}
            alt="Choose Us"
            className='w-full h-auto rounded-2xl object-cover'
          />
        </motion.div>

        {/* content */}
        <div className='w-full lg:w-6/12 text-center lg:text-left space-y-8'>
          <h3 className='text-[#e76f51] font-semibold font-lato text-center lg:text-left'>
            Why Choose Us?
          </h3>
          <h2 className='text-3xl sm:text-4xl font-bold font-truculenta text-center lg:text-left'>
            Our team of volunteers is truly committed
          </h2>
          <p className='dark:text-gray-300 text-[#363636d3] font-lato text-sm sm:text-base'>
            Pede efficitur feugiat erat eros interdum neque proin metus fames scelerisque.
            Odio tristique sollicitudin hac consectetur vivamus venenatis.
          </p>

          {/* features */}
          <div className='space-y-6'>
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={slideInFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5'
              >
                <div className='bg-[#ff6b6b] rounded-2xl p-4 flex-shrink-0'>
                  {item.icon}
                </div>
                <div className='space-y-1 text-center sm:text-left'>
                  <h3 className='text-xl sm:text-2xl font-semibold font-truculenta dark:text-gray-300'>
                    {item.title}
                  </h3>
                  <p className='text-sm sm:text-base font-lato dark:text-gray-300 text-[#363636d3]'>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
