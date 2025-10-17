'use client';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../axiosPublic/useAxiosPublic';
import useAuth from '../useAuth';

const useAdmin = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading: authLoading } = useAuth();

  const {
    data: role,
    isLoading: roleLoading,
    refetch,
  } = useQuery({
    queryKey: ['userRole', user?.email],
    enabled: !!user?.email && !authLoading, // ✅ wait until user is ready
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${user.email}`);
      return res.data?.role || 'user';
    },
  });

  const isAdmin = role === 'admin';
  const isAdminLoading = authLoading || roleLoading; // combine both

  return [isAdmin, isAdminLoading, refetch];
};

export default useAdmin;
