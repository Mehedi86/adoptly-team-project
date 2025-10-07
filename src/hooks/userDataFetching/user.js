"use client";

import { useQuery } from "@tanstack/react-query";

const { usersQueries } = require("@/server/userQuery/user");

const useAllOffers = ()=> {
return useQuery({
    queryKey: ["allOffers"],
    queryFn: usersQueries.getAllOffers
})
}
export const userDataFetching = {
    useAllOffers
}