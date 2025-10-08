"use client"
import AdoptionCard from './component/adoptionCard/adoptionCard';
import useAxiosPublic from '@/hooks/axiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import AdoptionFilter from './component/adoptionFilter/AdoptionFilter';
import { useState } from 'react';

const allPets = () => {

    const axiosPublic = useAxiosPublic();
    const [toggle, setToggle] = useState(false);
    // Filtering
    const [filter, setFilter] = useState({
        species: "",
        district: "",
        division: ""
    })
    // Pagination state
    const [currentPage, setcurrentPage] = useState(0);
    const limit = 8;

    // Api query
    const query = new URLSearchParams({
        species: filter.species,
        district: filter.district,
        division: filter.division,
        page: currentPage + 1,
        limit: limit
    })

    const { data, refetch, isLoading: loading } = useQuery({
        queryKey: ["adoptionData", filter, currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/pets?${query}`);
            return res.data
        }
    })

    const adoptionData = data?.data || []
    const total = data?.total || 0;
    const totalPages = Math.ceil(total / limit);

    const handlePageClick = (data) => {
        setcurrentPage(data.selected)
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='flex'>
            <AdoptionFilter a
                adoptionData={adoptionData}
                filter={filter}
                setFilter={setFilter}
                toggle={toggle}
                handleToggle={handleToggle}
            />
            <AdoptionCard
                adoptionData={adoptionData}
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
                loading={loading}
                handleToggle={handleToggle}

            />
        </div>
    );
};

export default allPets;