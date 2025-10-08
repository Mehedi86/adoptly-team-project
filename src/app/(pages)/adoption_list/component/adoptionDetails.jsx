"use client"
import useAxiosPublic from '@/hooks/axiosPublic/useAxiosPublic';
import UseBanner from '@/hooks/useBanner/UseBanner';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const AdoptionDetails = ({ id }) => {

    const axiosPublic = useAxiosPublic()

    const { data: singleAdoption, refetch, isLoading: loading } = useQuery({
        queryKey: ["singleAdoption"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/pets/${id}`);
            return res.data.data
        }
    })

    console.log('checking singel data', singleAdoption);


    return (
        <div>
            <UseBanner title={"Adoption Details"} />
            <div className='lg:mx-32 mx-5 my-10'>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div>
                        {
                            loading ? (
                                <div className="w-[100%] h-[50vh] bg-gray-200 animate-pulse rounded-xl"></div>
                            ) : (
                                <Image className='w-full rounded-xl' src={singleAdoption?.image} width={500} height={300} alt='' />
                            )
                        }

                    </div>
                    <div className='w-full'>
                        <h1 className='text-3xl'>{singleAdoption?.name}</h1>
                        <div className='space-y-3 my-5'>
                            <p className='border-b border-dashed pb-1 space-x-1'>
                                <span className='font-bold'>Gender:</span>
                                <span className='text-[#161616bb] dark:text-[#cfcfcf]'>{singleAdoption?.gender}</span>
                            </p>
                            <p className='border-b border-dashed pb-1 space-x-1'>
                                <span className='font-bold'>Age:</span>
                                <span className='text-[#161616bb] dark:text-[#cfcfcf]'>{singleAdoption?.age}</span>
                            </p>
                            <p className='border-b border-dashed pb-1 space-x-1'>
                                <span className='font-bold'>Breed: </span>
                                <span className='text-[#161616bb] dark:text-[#cfcfcf]'>{singleAdoption?.breed}</span>
                            </p>
                            <p className='border-b border-dashed pb-1 space-x-1'>
                                <span className='font-bold'>Species: </span>
                                <span className='text-[#161616bb] dark:text-[#cfcfcf]'>{singleAdoption?.species}</span>
                            </p>
                            <p className='border-b border-dashed pb-1 space-x-1'>
                                <span className='font-bold'>weight: </span>
                                <span className='text-[#161616bb] dark:text-[#cfcfcf]'>{singleAdoption?.weight}</span>
                            </p>
                            <p className='border-b border-dashed pb-1 space-x-1'>
                                <span className='font-bold'>Address: </span>
                                <span className='text-[#161616bb] dark:text-[#cfcfcf]'>{singleAdoption?.address.district}, {singleAdoption?.address.division}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='my-10 space-y-2'>
                    <h1 className='text-4xl font-bold'>About Me</h1>
                    <p className='text-[#161616bb] dark:text-[#cfcfcf]'>{singleAdoption?.description}</p>
                    <button className='btn bg-[#E76F51] border-0 rounded-xl w-32'>Adopt Me</button>
                </div>
            </div>

        </div>
    );
};

export default AdoptionDetails;