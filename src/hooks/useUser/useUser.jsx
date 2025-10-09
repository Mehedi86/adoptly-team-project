import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../axiosPublic/useAxiosPublic';
import useAuth from '../useAuth';

const useUser = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()

    const { data: userData = [], refetch: userRefetch, isLoading: userLoading } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user?email=${user?.email}`);
            return res.data
        }
    })

    return [userData, userRefetch, userLoading];

};

export default useUser;