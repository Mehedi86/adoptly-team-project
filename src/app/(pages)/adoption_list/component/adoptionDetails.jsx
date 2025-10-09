"use client"
import useAxiosPublic from '@/hooks/axiosPublic/useAxiosPublic';
import UseBanner from '@/hooks/useBanner/UseBanner';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import useUser from '@/hooks/useUser/useUser';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const AdoptionDetails = ({ id }) => {

    const axiosPublic = useAxiosPublic();
    const [userData, userRefetch, userLoading] = useUser();

    console.log('checking user data', userData);

    // Modal
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const { data: singleAdoption, refetch, isLoading: loading } = useQuery({
        queryKey: ["singleAdoption"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/pets/${id}`);
            return res.data.data
        }
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const userRequest = {
            userId: userData?._id,
            petId: singleAdoption?._id,
            userEmail: data.userEmail,
            phoneNumber: data.phoneNumber,
            address: {
                district: data.district,
                division: data.division,
            },
            quantity: data.quantity
        }
        try {
            const res = await axiosPublic.post("/request", userRequest);
            console.log(res);
            if (res.status === 201) {
                toast.success('Your request successfully');
                onCloseModal()
            }
        } catch (error) {
            console.log(error.message);
        }
    }




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
                    <button onClick={onOpenModal} className='btn bg-[#E76F51] border-0 rounded-xl w-32'>Adopt Me</button>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                    <p className='text-xl my-5'>Please provide information</p>
                    <div>
                        <label htmlFor="">Email</label>
                        <input {...register("userEmail", { required: true })} disabled defaultValue={userData?.email} className=' w-full border border-[#bbbb] bg-white disabled:bg-white disabled:text-black text-black dark:bg-black dark:text-white input focus:outline-0' placeholder='Enter your email' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input {...register("phoneNumber", { required: true })} className='w-full border border-[#bbbb] bg-white text-black dark:bg-black dark:text-white input focus:outline-0' placeholder='Enter your number' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Discrict</label>
                        <input {...register("district", { required: true })} defaultValue={userData?.address} className='w-full border border-[#bbbb] bg-white text-black dark:bg-black dark:text-white input focus:outline-0' placeholder='Enter your address' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Division</label>
                        <input {...register("division", { required: true })} defaultValue={userData?.address} className='w-full border border-[#bbbb] bg-white text-black dark:bg-black dark:text-white input focus:outline-0' placeholder='Enter your address' type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Quantity</label>
                        <input {...register("quantity", { required: true })} className='w-full border border-[#bbbb] bg-white text-black dark:bg-black dark:text-white input focus:outline-0' placeholder='Enter your queantity' type="text" />
                    </div>
                    <div className='text-center my-5'>
                        <button className='btn text-center border-0 bg-[#e76f51] text-white'>Submit</button>
                    </div>
                </form>
            </Modal>
            <Toaster />
        </div>
    );
};

export default AdoptionDetails;