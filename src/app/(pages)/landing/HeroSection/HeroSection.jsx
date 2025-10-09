"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './HeroSection.css'
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

const bannerInfo = [
    {
        id: 1,
        title: "Adopt love, adopt your best friend from the animal shelter.",
        subTitle: "Give a homeless pet a loving home and gain a true friend for life. At the animal shelter, love and companionship are waiting for you.",
        image: "banner1"
    },
    {
        id: 2,
        title: "Give a home, gain a best friend visit the animal shelter.",
        subTitle: "Open your heart to an animal in need and change both your lives forever. At the shelter, every adoption is the start of a beautiful friendship.",
        image: "banner2"
    },

]



const HeroSection = () => {

    const { user } = useAuth();
    

    return (
        <div className='relative z-10'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerInfo.map(banner => (
                        <SwiperSlide>
                            <div className={`${banner.image} bg-cover bg-center bg-no-repeat h-[600px] flex justify-left items-center`}>
                                <div className='lg:pl-20 px-5 lg:w-[50%] text-white space-y-5'>
                                    <h2 className='text-4xl lg:text-6xl font-bold font-truculenta'>{banner.title}</h2>
                                    <p className='text-[18px] font-lato text-[#cccccc]'>{banner.subTitle}</p>
                                    <Link href={"/adminDashboard"}>
                                        <button className='btn border-0 w-40 bg-[#e76f51] text-white rounded-xl'>Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default HeroSection;