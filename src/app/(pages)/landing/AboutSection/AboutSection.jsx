import Image from 'next/image';
import React from 'react';
import { FaPlay } from "react-icons/fa";


const AboutSection = () => {
    return (
        <div className='lg:mx-10 mx-5 my-20'>
            <div className='flex flex-col lg:flex-row space-y-5 items-center justify-between'>
                <div className='lg:w-[50%] space-y-5'>
                    <p className='font-truculenta text-[#e06a4d]'>About Furrescue</p>
                    <h1 className='text-4xl font-bold font-truculenta'>Your trusted partner in animal rescue and care.</h1>
                    <p className='font-rubik text-[19px] text-[#616161]'>All they need is a loving home and proper care, and all you need is their unconditional love in return.</p>
                    <p  className='font-rubik text-[16px] text-[#707070]'>At our shelter, rescued animals receive the care, attention, and love they deserve. Every adoption brings joy, companionship, and a second chance at life for them.</p>
                    <div className='flex items-center gap-5'>
                        <button className='btn bg-[#e76f51] text-white rounded-xl'>Discover More</button>
                        <div className='border bg-[#e76f51d3] hover:bg-[#e76f51] duration-300  text-white border-white p-3  rounded-full shadow-2xl'>
                            <FaPlay />
                        </div>
                        <p className='font-lato font-semibold'>Watch Video</p>
                    </div>
                </div>
                <div className='relative lg:w-[45%]'>
                    <div className='relative'>
                        <Image className='w-full rounded-2xl' src={"/about/img1.jpeg"} width={500} height={300} alt='Dog' />
                        <div className='absolute top-0 right-0 bg-[#e76f51d5] w-52 h-32 text-white flex flex-col justify-center items-center rounded-bl-box rounded-tr-2xl'>
                            <h1 className='text-5xl font-bold'>20+</h1>
                            <p className='font-lato'>Years Exereince</p>
                        </div>
                    </div>
                    <div className='absolute -bottom-10 -left-8'>
                        <Image className='w-52 h-52 border-8 border-white shadow-2xl rounded-full' src={"/about/img2.jpg"} width={500} height={300} alt='Dog' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;