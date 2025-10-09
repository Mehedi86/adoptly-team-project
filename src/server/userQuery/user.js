// "use server";

import { axiosPublic } from "@/lib/axios/axios";


export const createUser = async (userInfo) => {
  // console.log("Creating user with info:", userInfo);
  try {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userInfo),
    // });
    // if (!response.ok) {
    //   throw new Error("Failed to create user");
    // }

    const {data} = await axiosPublic.post('/user', userInfo)

    return await data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }


};

const getAllOffers = async() => {
  const {data} = await axiosPublic.get("/offers")
  return data;
}


export const usersQueries = {
  getAllOffers
};


