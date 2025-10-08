"use client"

import useAxiosPublic from "@/hooks/axiosPublic/useAxiosPublic";
import RequestList from "./component/requestList";
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/hooks/useAuth";

const userRequest = () => {
    const axiosPublic = useAxiosPublic();
    const { user, loading } = useAuth();

    const { data: userRequestData = [], refetch, isLoading: userLoading } = useQuery({
        queryKey: ["userRequestData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/request/user/${user?.email}`);
            return res.data.data
        }
    })


    console.log('checking user Req', userRequestData)


    return (
        <div className='mx-5 my-5'>
            <div className='flex items-center justify-between border p-2'>
                <button className='btn bg-[#E76F51] text-white rounded-xl border-0'>Create Post</button>
                <input className='input border border-[#bbb] focus:outline-0 bg-white text-black dark:bg-black dark:text-white' placeholder='Search...' type="text" />
            </div>
            <RequestList
                userRequestData={userRequestData}
                refetch={refetch}
                loading={loading}
            />
        </div>
    );
};

export default userRequest;