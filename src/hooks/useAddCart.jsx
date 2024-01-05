import React from "react";
import {toast} from "react-hot-toast"

const useAddCart = (product) => {
  if (product) {
    toast.success("added to cart")
  }
  const allProduct = [];

  const getProduct = JSON.parse(localStorage.getItem("products"));

  if (!getProduct) {
    allProduct.push(product);
    localStorage.setItem("products", JSON.stringify(allProduct));
  } else {
    allProduct.push(...getProduct, product);
    localStorage.setItem("products", JSON.stringify(allProduct));
  }
  return ;
};

export default useAddCart;
