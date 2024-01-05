import React from "react";
import { useLoaderData } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import useAddCart from "../../../hooks/useAddCart";
const SingleProduct = () => {
  const product = useLoaderData();

  const {
    id,
    title,
    images,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = product;
  // console.log(product);


  const handleAddToCart = (item) => {
    useAddCart(item);
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 mt-32">
      <div className="grid md:grid-cols-2  gap-10 lg:grid-cols-2">
        <div>
          <img className="w-full h-[400px] object-cover " src={images[0]} alt="" />
        </div>
        <div className=" space-y-2">
          <div>
            {stock > 0 ? (
              <span className="text-green-400">{"In stock"}</span>
            ) : (
              <span className="text-red-400">{"Not available"}</span>
            )}
          </div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex text-orange-500 gap-2 items-center">
            <div className="flex items-center">
              <span>
                <IoMdStar />
              </span>
              <span>
                <IoMdStar />
              </span>
              <span>
                <IoMdStar />
              </span>
              <span>
                <IoMdStar />
              </span>
              <span>
                <IoMdStar />
              </span>
            </div>

            {rating}
          </div>
          <div>
            <p className="text-gray-500">
              Price: <span className="text-gray-600">{price}</span>
            </p>
          </div>
          <p>{description}</p>
          <div>
              <div>
                {" "}
                <button
                  onClick={() => handleAddToCart(product)}
                  className=" bg-orange-600 text-white h-10 w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
