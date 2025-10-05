"use client"
import React from 'react';
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const ServiceSection = () => {

    return (
        <div className='relative z-20 lg:mx-10 mx-2 -mt-14 mb-10'>
            <div className='flex flex-col lg:flex-row items-center gap-5 shadow-2xl p-8 rounded-2xl bg-white dark:bg-[#201f1f] dark:border'>
                <div className='flex gap-2 pr-5 pb-4  lg:border-r-2 lg:border-dotted lg:border-[#9b9b9bbb]'>
                    <IoShieldCheckmarkSharp className='text-6xl text-[#e76f51]' />
                    <div className='space-y-1'>
                        <p className='font-bold text-xl font-truculenta'>Rescue Animals</p>
                        <p className='font-truculenta text-[#797979]'>Rescue animals deserve a second chance at life and love. </p>
                    </div>
                </div>
                <div className='flex gap-2 pr-5 pb-4 lg:border-r-2 border-dotted lg:border-[#9b9b9bbb]'>
                    <IoShieldCheckmarkSharp className='text-6xl text-[#e76f51]' />
                    <div className='space-y-1'>
                        <p className='font-truculenta font-bold text-xl'>Rehabilitation</p>
                        <p className='font-truculenta text-[#797979]'>Rehabilitation gives rescued animals the care, safety, and healing they need.</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <IoShieldCheckmarkSharp className='text-6xl text-[#e76f51]' />
                    <div className='space-y-1'>
                        <p className='font-truculenta font-bold text-xl'>Pet Adoption</p>
                        <p className='font-truculenta text-[#797979]'>Pet adoption is about giving animals a loving home and a second chance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;