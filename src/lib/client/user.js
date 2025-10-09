import { axiosPublic } from "../axios/axios";

const getAllOffer = async () => {
   try {
     const { data } = await axiosPublic.get("/offers");
     return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export const userQueries = {
 getAllOffer,
}