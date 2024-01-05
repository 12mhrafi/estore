import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useProducts = (searchName) => {
  const axiosSecure = useAxiosSecure();
  // console.log(searchName)
  const {
    refetch,
    isLoading,
    data: products = [],
  } = useQuery({
    queryKey: ["products123", searchName],
    queryFn: async () => {
      const res = await axiosSecure(`/products/search?q=${searchName || ""}`);
      return res.data.products;
    },
  });
  //   console.log(products)
  return [products, refetch, isLoading];
};

export default useProducts;
