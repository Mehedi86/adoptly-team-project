"use client"
import { authContext } from '@/context/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
    const useAuth = useContext(authContext);

    return useAuth;
};

export default useAuth;