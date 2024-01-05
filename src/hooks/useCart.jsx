import React, { useEffect, useState } from "react";

const useCart = () => {

    const [getProduct, setGetProducts] = useState([]);
 
    useEffect(()=>{
        const products = JSON.parse(localStorage.getItem("products"));
       if(products){
        setGetProducts(products);
       }
        
    },[])
  console.log(getProduct);
  return getProduct;
};

export default useCart;
