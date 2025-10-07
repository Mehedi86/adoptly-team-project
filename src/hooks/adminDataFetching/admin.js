"use client";

import { adminQueries } from "@/server/adminQuery/admin";
import { useQuery } from "@tanstack/react-query";


const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: adminQueries.getAllUsers, // 👈 function reference only
  });
};

const useAllPets = () => {
  return useQuery({
    queryKey: ['allPets'],
    queryFn: adminQueries.getAllPets
  });
};

const useAllPost = () => {
  return useQuery({
    queryKey: ['allPost'],
    queryFn: adminQueries.getAllPost,
    
  })
}


export const adminDataFetching = {
  useUsers,
  useAllPets,
  useAllPost
};
