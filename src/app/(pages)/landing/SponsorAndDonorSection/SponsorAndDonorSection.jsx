"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const SponsorAndDonorSection = () => {
    return (
        <div className='relative mx-10 py-20'>
            <div className='lg:absolute top-0 z-20 dark:bg-[#0d1b2a] bg-white h-full flex justify-center items-center p-5 lg:w-72'>
                <h1 className='text-xl font-semibold font-truculenta'>Our Generous Sponsors and Donors</h1>
            </div>
            <div className='z-10'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    modules={[]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Image className='lg:w-52 w-full' src="/SponsorAndDonor/img1.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img2.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img3.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img4.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img4.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img5.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img6.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img7.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img8.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-52' src="/SponsorAndDonor/img9.png" width={500} height={300} alt='company' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SponsorAndDonorSection;