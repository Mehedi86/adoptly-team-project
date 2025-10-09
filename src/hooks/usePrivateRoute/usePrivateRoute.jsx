"use client"
import { useEffect } from 'react';
import useAuth from '../useAuth';
import { useRouter } from 'next/navigation';

const usePrivateRoute = () => {

    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    return { user, loading };
};

export default usePrivateRoute;