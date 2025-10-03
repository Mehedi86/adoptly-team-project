'use client';

import Image from 'next/image';
import chooseImg1 from "../../../../../../public/images/chooseImg/chooseImg1.png";
import { motion } from "framer-motion";

// React Icons
import { FaShieldVirus } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdWifiCalling3 } from "react-icons/md";

// ✅ Reusable motion props
const slideInFromRight = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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
      <div className='flex items-center justify-center gap-10 flex-col lg:flex-row'>
        
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className='lg:w-6/12 text-center mx-auto'>
          <Image src={chooseImg1} alt="Choose Us" className='w-full h-auto' />
        </motion.div>
        
        {/* content */}
        <div className='lg:w-6/12 text-center lg:text-left space-y-10'>
          <h3 className='text-cyan-200 font-semibold text-left'>Why Choose Us?</h3>
          <h2 className='text-4xl font-bold my-5'>Our team of volunteers is truly committed</h2>
          <p className='text-gray-300'>
            Pede efficitur feugiat erat eros interdum neque proin metus fames scelerisque. 
            Odio tristique sollicitudin hac consectetur vivamus venenatis.
          </p>

          {/* features with animation */}
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              className='flex items-center gap-5'
            >
              <div className='bg-[#ff6b6b] rounded-2xl p-4'>{item.icon}</div>
              <div>
                <h3 className='text-2xl font-semibold text-left'>{item.title}</h3>
                <p className='text-xs'>{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
