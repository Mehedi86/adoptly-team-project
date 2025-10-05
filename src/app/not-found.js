"use client"
import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <p className='uppercase text-2xl'>Opps...</p>
                <h1 className='text-9xl font-truculenta  animate-bounce'>4😔4</h1>
                <div className='space-y-5 text-center'>
                    <h1 className='uppercase text-2xl'>Page not found</h1>
                    <Link href={"/"}>
                        <button className='btn rounded-xl bg-[#e76f51] text-white'>Go back to home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default notFoundPage;