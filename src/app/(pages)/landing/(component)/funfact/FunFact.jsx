import React from 'react';

const FunFact = () => {
  return (
    <section>
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/FunFactImg/funFactImg.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 py-20 sm:py-24 lg:py-32 flex flex-col items-center lg:items-start">
          <h4 className="text-orange-400 font-semibold text-lg sm:text-xl mb-2">Fun Fact You Must Know</h4>
          <h2 className="text-white dark:text-[#bbb] font-truculenta font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-4">
            Share your love with the pets in need of a home
          </h2>
          <p className="text-[#dad8d8] dark:text-[#bbb] font-lato text-sm sm:text-base md:text-lg text-center lg:text-left max-w-3xl mb-10">
            Maximus purus enim sodales vivamus felis praesent primis iaculis fames pretium nulla.
            Adipiscing tortor ad conubia nullam accumsan vulputate congue id faucibus.
            Hendrerit aenean dolor urna est duis sapien.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8 lg:gap-20 w-full max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#e76f51]">97%</span>
              <span className="mt-2 sm:mt-4 text-sm sm:text-base font-lato text-[#dad8d8] uppercase">Successful Rescue</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#e76f51]">325+</span>
              <span className="mt-2 sm:mt-4 text-sm sm:text-base font-lato text-[#dad8d8] uppercase">Dedicated Volunteer</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#e76f51]">$14M+</span>
              <span className="mt-2 sm:mt-4 text-sm sm:text-base font-lato text-[#dad8d8] uppercase">Food & Product Donations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
