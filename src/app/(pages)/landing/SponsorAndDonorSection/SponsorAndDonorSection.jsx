"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const SponsorAndDonorSection = () => {
    const images = [
        "/SponsorAndDonor/img1.png",
        "/SponsorAndDonor/img2.png",
        "/SponsorAndDonor/img3.png",
        "/SponsorAndDonor/img4.png",
        "/SponsorAndDonor/img5.png",
        "/SponsorAndDonor/img6.png",
        "/SponsorAndDonor/img7.png",
        "/SponsorAndDonor/img8.png",
        "/SponsorAndDonor/img9.png",
    ];

    return (
        <div className="relative px-5 lg:px-20 py-20">
            {/* Title */}
            <div className="lg:absolute top-0 z-20 dark:bg-[#0d1b2a] bg-white p-5 lg:w-72 text-center lg:text-left rounded-md shadow-md">
                <h1 className="text-lg sm:text-xl font-semibold font-truculenta">
                    Our Generous Sponsors and Donors
                </h1>
            </div>

            {/* Swiper */}
            <div className="mt-10 lg:mt-0">
                <Swiper
                    slidesPerView={2} // mobile default 2 images
                    spaceBetween={15}
                    breakpoints={{
                        480: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 25 },
                        1280: { slidesPerView: 6, spaceBetween: 30 },
                    }}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            {/* Parent div with fixed height for mobile */}
                            <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44">
                                <Image
                                    src={src}
                                    alt={`company ${index + 1}`}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SponsorAndDonorSection;
