import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../axiosPublic/useAxiosPublic';
import useAuth from '../useAuth';


const useAdmin = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()

    const { data: isAdmin,  isLoading: isAdminLoading } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user?email=${user?.email}`);
            return res.data.role
        }
    })

    return [isAdmin, isAdminLoading];

};

export default useAdmin;