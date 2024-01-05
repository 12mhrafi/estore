import React, { useState } from "react";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const getProduct = useCart();

  const totalPrice = getProduct?.reduce(
    (total, product) => total + product.price,
    0
  );


  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-32">
      <div>
        <h2 className="text-2xl font-semibold mb-5">
          My Cart ({getProduct.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:grid-cols-4">
          <div className="md:col-span-3 flex flex-col gap-6">
            {
              getProduct?.map((p) => (
                <div>
                  <div className="flex items-center gap-3">
                    <div className=" w-[70px] border flex items-center justify-center h-[70px]">
                      <img
                        className=" w-[50px] h-[50px]"
                        src={p.images[0]}
                        alt=""
                      />
                    </div>
                    <h2 className="font-semibold">
                      {p.description.slice(0, 30)}
                    </h2>
                    <p className="font-semibold ml-auto">${p.price}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className=" md:col-span-1">
            <p className="flex justify-between">
              {" "}
              <span className="font-semibold">Total:</span>{" "}
              <span className="text-[20px] font-semibold">${totalPrice}</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
