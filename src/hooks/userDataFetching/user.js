'use client';

import { userQueries } from "@/lib/client/user";


const { useQuery } = require("@tanstack/react-query");

const getAllOfferData = () => {
  return useQuery({
    queryKey: ['offers'],
    queryFn: userQueries.getAllOffer
  });
};

export const userDataFetching = {
  getAllOfferData
}

