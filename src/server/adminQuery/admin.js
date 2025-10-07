// server/adminQueries.js
// "use server";

import { axiosPublic } from "@/lib/axios/axios";

const getAllUsers = async () => {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   cache: "no-store",
    // });

    const { data } = await axiosPublic.get('/users');
    // if (!res.ok) throw new Error("Failed to fetch users");
    return await data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const getAllPets = async () => {
  const { data } = await axiosPublic.get('/pets');
  return await data;
}


const getAllPost = async () => {
  const { data } = await axiosPublic.get('/posts');
  return data;
}


//how many adoption
const getAllAdoption = async () => {
  const { data } = await axiosPublic.get('/all-adoption');
  return data;
}



export const adminQueries = {
  getAllUsers,
  getAllPets,
  getAllPost,
  getAllAdoption,
  
};
