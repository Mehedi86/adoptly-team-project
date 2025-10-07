"use client";

import { adminQueries } from "@/server/adminQuery/admin";
import { useQuery } from "@tanstack/react-query";


const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: adminQueries.getAllUsers, // 👈 function reference only
  });
};

export const adminDataFetching = {
  useUsers,
};
