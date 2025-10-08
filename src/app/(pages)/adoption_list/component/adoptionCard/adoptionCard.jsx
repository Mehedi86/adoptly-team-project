"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAnglesRight, FaBarsStaggered } from 'react-icons/fa6';
import ReactPaginate from 'react-paginate';

// const adoptionData = [
//     {
//         "id": 1,
//         "name": "Buddy",
//         "type": "Dog",
//         "breed": "Labrador Retriever",
//         "age": 2,
//         "gender": "Male",
//         "location": "Dhaka, Bangladesh",
//         "image": "/adoption/img1.jpg",
//         "description": "Buddy is a cheerful Labrador who loves outdoor walks and playing fetch. He's very gentle with kids and enjoys being around people. If you're looking for a loyal and happy companion, Buddy will be your best friend.",
//         "adopted": false
//     },
//     {
//         "id": 2,
//         "name": "Mimi",
//         "type": "Cat",
//         "breed": "Persian",
//         "age": 1,
//         "gender": "Female",
//         "location": "Chattogram, Bangladesh",
//         "image": "/adoption/img2.jpg",
//         "description": "Mimi is a fluffy Persian cat who loves cozy corners and soft pillows. She’s quiet, elegant, and enjoys being brushed. Perfect for someone who loves peaceful company and a purring friend by their side.",
//         "adopted": false
//     },
//     {
//         "id": 3,
//         "name": "Rocky",
//         "type": "Dog",
//         "breed": "German Shepherd",
//         "age": 3,
//         "gender": "Male",
//         "location": "Sylhet, Bangladesh",
//         "image": "/adoption/img3.jpg",
//         "description": "Rocky is a brave and loyal German Shepherd with a protective nature. He’s intelligent, easy to train, and very alert — ideal for families who want both a loving pet and a great guardian.",
//         "adopted": true
//     },
//     {
//         "id": 4,
//         "name": "Luna",
//         "type": "Cat",
//         "breed": "Bengal",
//         "age": 2,
//         "gender": "Female",
//         "location": "Rajshahi, Bangladesh",
//         "image": "/adoption/img4.jpg",
//         "description": "Luna is an adventurous Bengal cat with beautiful markings. She loves to explore, climb, and play with toys. Her playful curiosity makes her a delightful companion for active pet lovers.",
//         "adopted": false
//     },
//     {
//         "id": 5,
//         "name": "Chirpy",
//         "type": "Bird",
//         "breed": "Parrot",
//         "age": 1,
//         "gender": "Male",
//         "location": "Khulna, Bangladesh",
//         "image": "/adoption/img5.jpg",
//         "description": "Chirpy is a bright green parrot who enjoys mimicking sounds and chatting. He’s social, loves attention, and quickly bonds with his owner. A great choice for those who enjoy talkative and cheerful pets.",
//         "adopted": false
//     },
//     {
//         "id": 6,
//         "name": "Snowy",
//         "type": "Rabbit",
//         "breed": "White Dwarf",
//         "age": 1,
//         "gender": "Female",
//         "location": "Barishal, Bangladesh",
//         "image": "/adoption/img6.jpg",
//         "description": "Snowy is a gentle white rabbit with soft fur and a calm personality. She enjoys munching on fresh carrots and being gently petted. Perfect for children and first-time pet owners.",
//         "adopted": false
//     },
//     {
//         "id": 7,
//         "name": "Tiger",
//         "type": "Dog",
//         "breed": "Bulldog",
//         "age": 4,
//         "gender": "Male",
//         "location": "Gazipur, Bangladesh",
//         "image": "/adoption/img7.jpg",
//         "description": "Tiger may look tough, but he’s actually a calm and affectionate Bulldog. He loves naps, belly rubs, and short walks. A great companion for families who prefer a relaxed, loyal dog.",
//         "adopted": true
//     },
//     {
//         "id": 8,
//         "name": "Coco",
//         "type": "Cat",
//         "breed": "Siamese",
//         "age": 2,
//         "gender": "Female",
//         "location": "Narayanganj, Bangladesh",
//         "image": "/adoption/img1.jpg",
//         "description": "Coco is a chatty Siamese cat with a striking blue gaze. She’s smart, curious, and loves following her favorite person around the house. Perfect for owners who enjoy interactive pets.",
//         "adopted": false
//     },
//     {
//         "id": 9,
//         "name": "Goldie",
//         "type": "Fish",
//         "breed": "Goldfish",
//         "age": 1,
//         "gender": "Unknown",
//         "location": "Dhaka, Bangladesh",
//         "image": "/adoption/img1.jpg",
//         "description": "Goldie is a graceful goldfish that brings calmness to any home. She’s low maintenance, beautiful to watch, and ideal for beginners looking to add some peaceful life to their space.",
//         "adopted": false
//     },
//     {
//         "id": 10,
//         "name": "Bunny",
//         "type": "Rabbit",
//         "breed": "Holland Lop",
//         "age": 2,
//         "gender": "Male",
//         "location": "Comilla, Bangladesh",
//         "image": "/adoption/img1.jpg",
//         "description": "Bunny is a playful Holland Lop rabbit known for his floppy ears and friendly attitude. He loves jumping around and nibbling on veggies. A great choice for families with kids.",
//         "adopted": false
//     }
// ];

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
                        <div className="group shadow-2xl rounded-xl dark:rounded-xl dark:border">
                            <div className='relative'>
                                <div className="relative z-10 h-72 overflow-hidden rounded-t-2xl">
                                    <Image className="group-hover:scale-110 group-hover:rotate-3 duration-300 w-full h-full rounded-t-xl" src={adoption.image} width={500} height={300} alt="adoption.title" />
                                </div>
                                <div className='absolute top-10 right-0 z-20 rounded flex justify-center items-center text-white -mt-10 w-20 h-10 bg-[#023047]'>
                                    <p>{adoption.adopted ? "Adopted" : "Available"}</p>
                                </div>
                                <div className='relative z-20 flex justify-center items-center text-white -mt-10 w-20 h-10 bg-[#e76f51] rounded-tr-sm'>
                                    <p>{adoption.name}</p>
                                </div>
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
                        <div class="lg:w-72 w-full rounded-md border border-[#E76F51] p-4">
                            <div class="w-full flex flex-col animate-pulse space-x-4">
                                <div class="w-full h-72 bg-gray-200"></div>
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="col-span-1 h-5 rounded bg-gray-200"></div>
                                        <div class="col-span-1 h-5 rounded bg-gray-200"></div>
                                    </div>
                                    <div class="h-5 rounded bg-gray-200"></div>
                                    <div class="h-5 rounded bg-gray-200"></div>
                                    <div class="h-10 w-32 rounded bg-gray-200"></div>
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