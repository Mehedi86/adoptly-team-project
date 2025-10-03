import React from 'react';

const FunFact = () => {
  return (
    <section>
      <div
        className="lg:h-[700px] h-50 bg-cover bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/FunFactImg/funFactImg.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content */}
        <div className=' max-w-7xl mx-auto flex h-full items-center justify-start '>
          <div className="relative z-10 max-w-3xl my-auto  space-y-4 text-left ">
            <h4 className="text-orange-400 font-semibold">Fun Fact You Must Know</h4>
            <h2 className="text-white text-5xl font-bold">
              Share your love with the pets in need of a home
            </h2>
            <p className="text-white">
              Maximus purus enim sodales vivamus felis praesent primis iaculis fames pretium nulla.
              Adipiscing tortor ad conubia nullam accumsan vulputate congue id faucibus.
              Hendrerit aenean dolor urna est duis sapien.
            </p>


            <div className='flex items-center  lg:gap-32 mt-10'>
              <div className='flex flex-col items-center justify-center  text-center'>
                <span className='text-6xl font-bold text-cyan-500'>97%</span>
                <span className='w-32 mt-5  uppercase'>Successful <br /> Rescue</span>
              </div>
              <div  className='flex flex-col items-center justify-center  text-center'>
                <span className='text-6xl font-bold text-cyan-500'>325+</span>
                <span className='w-32 mt-5 uppercase'>Dedicated Volunteer</span>
              </div>
              <div className='flex flex-col items-center justify-center  text-center'>
                <span className='text-6xl font-bold text-cyan-500'>$14M+</span>
                <span className='w-32 mt-5 uppercase'>Food & Product Donations</span>
              </div>

            </div>
          </div>
        </div>
      </div>


    </section>

  );
};

export default FunFact;