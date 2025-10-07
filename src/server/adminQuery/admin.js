// server/adminQueries.js
// "use server";

import { axiosPUblic } from "@/lib/axios/axios";

const getAllUsers = async () => {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   cache: "no-store",
    // });

    const { data } = await axiosPUblic.get('/users');
    // if (!res.ok) throw new Error("Failed to fetch users");
    return await data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const adminQueries = { getAllUsers };
