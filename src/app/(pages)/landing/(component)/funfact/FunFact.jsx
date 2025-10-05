import React from 'react';
import './FunFact.css'

const FunFact = () => {
  return (
    <section>
      <div
        className="factImage lg:h-[600px] h-50 bg-cover bg-no-repeat relative"
        // style={{ backgroundImage: "url('/images/FunFactImg/funFactImg.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* content */}
        <div className='max-w-7xl mx-auto flex h-full items-center justify-center '>
          <div className="relative z-10 max-w-4xl my-auto  space-y-4 text-left ">
            <h4 className="text-orange-400 font-semibold">Fun Fact You Must Know</h4>
            <h2 className="text-white dark:text-[#bbb] text-5xl font-bold font-truculenta">
              Share your love with the pets in need of a home
            </h2>
            <p className="text-[#dad8d8] dark:text-[#bbb] font-lato line-clamp-2 tracking-wide">
              Maximus purus enim sodales vivamus felis praesent primis iaculis fames pretium nulla.
              Adipiscing tortor ad conubia nullam accumsan vulputate congue id faucibus.
              Hendrerit aenean dolor urna est duis sapien.
            </p>
            <div className='flex items-center lg:gap-32 mt-10'>
              <div className='flex flex-col items-center justify-center  text-center'>
                <span className='text-6xl font-bold text-[#e76f51]'>97%</span>
                <span className='w-32 mt-5  uppercase font-lato text-[#dad8d8]'>Successful <br /> Rescue</span>
              </div>
              <div className='flex flex-col items-center justify-center  text-center'>
                <span className='text-6xl font-bold text-[#e76f51]'>325+</span>
                <span className='w-32 mt-5 uppercase font-lato text-[#dad8d8]'>Dedicated Volunteer</span>
              </div>
              <div className='flex flex-col items-center justify-center  text-center'>
                <span className='text-6xl font-bold text-[#e76f51]'>$14M+</span>
                <span className='w-32 mt-5 uppercase font-lato text-[#dad8d8]'>Food & Product Donations</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>

  );
};

export default FunFact;