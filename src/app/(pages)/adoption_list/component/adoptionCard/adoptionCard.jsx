"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAnglesRight, FaBarsStaggered } from 'react-icons/fa6';
import ReactPaginate from 'react-paginate';

const AdoptionCard = ({ loading, adoptionData, currentPage, totalPages, handlePageClick, handleToggle }) => {
    const cardLoading = 10;

    return (
        <div className='lg:mx-5 mx-3 my-5 w-full relative z-10'>
            <div className='border p-2 my-2'>
                <FaBarsStaggered onClick={handleToggle} className='cursor-pointer' />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    adoptionData.map(adoption => (
                        <div key={adoption._id} className="group shadow-2xl rounded-xl dark:rounded-xl dark:border">
                            <div className='relative'>
                                <div className="relative z-10 h-72 overflow-hidden rounded-t-2xl">
                                    <Image className="group-hover:scale-110 group-hover:rotate-3 duration-300 w-full h-full rounded-t-xl" src={adoption.image} width={500} height={300} alt="adoption.title" />
                                </div>
                                <div className='absolute top-10 right-0 z-20 rounded flex justify-center items-center text-white -mt-10 w-20 h-10 bg-[#e76f51]'>
                                    <p>{adoption.adopted ? "Adopted" : "Available"}</p>
                                </div>
                                <p className='absolute bottom-0 rounded-r-md z-20 p-2  inline-block text-white bg-[#e76f51] '>{adoption.name}</p>
                            </div>
                            <div className="p-5 space-y-2">
                                <div className='flex items-center justify-between'>
                                    <p>{adoption.age}</p>
                                    <p>{adoption.gender}</p>
                                </div>
                                <div>
                                    <p className="text-right font-lato text-[#E76F51]">{adoption.date}</p>
                                </div>
                                <h1 className="text-xl font-bold dark:text-[#cfcfcf] font-lato">{adoption.breed}</h1>
                                <p className="font-lato text-[#757575]">{adoption.description.slice(0, 110)}...</p>
                                <Link href={`/adoption_list/${adoption._id}`} >
                                    <button className="btn w-32 rounded-xl border-0 bg-[#E76F51] text-white">
                                        Adopt me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-stretch">
                {
                    loading && [...Array(cardLoading)].map((_, index) => (
                        <div key={index} className="lg:w-72 w-full rounded-md border border-[#E76F51] p-4">
                            <div className="w-full flex flex-col animate-pulse space-x-4">
                                <div className="w-full h-72 bg-gray-200"></div>
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-1 h-5 rounded bg-gray-200"></div>
                                        <div className="col-span-1 h-5 rounded bg-gray-200"></div>
                                    </div>
                                    <div className="h-5 rounded bg-gray-200"></div>
                                    <div className="h-5 rounded bg-gray-200"></div>
                                    <div className="h-10 w-32 rounded bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center items-center my-10'>
                <ReactPaginate
                    forcePage={currentPage}
                    previousLabel={'← Previous'}
                    nextLabel={'Next →'}
                    breakLabel={'...'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'flex flex-wrap items-center gap-2'}
                    activeClassName={'bg-[#e76f51] text-white'}
                    pageClassName={'px-3 py-2 border cursor-pointer'}
                    previousClassName={'px-3 py-2 border cursor-pointer  hover:bg-[#003a5a] hover:text-white'}
                    nextClassName={'px-3 py-2 border cursor-pointer  hover:bg-[#003a5a] hover:text-white'}
                    breakClassName={'px-3 py-2 border cursor-pointer'}
                />
            </div>
        </div>

    );
};

export default AdoptionCard;