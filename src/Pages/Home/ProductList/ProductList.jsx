import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { toast } from "react-hot-toast";
import useAddCart from "../../../hooks/useAddCart";
const ProductList = () => {
  const [search, setSearch] = useState("");
  const [products, refetch] = useProducts(search);
  const [filterProducts, setFilterProducts] = useState([]);
  refetch();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchName = e.target.search.value;
    if (searchName) {
      setSearch(searchName);
    } else {
      setSearch(products);
    }
  };

  const handleFilter = (price) => {
    const priceNum = Number(price);

    if (priceNum === 500) {
      const uptoFive = products.filter(
        (product) => product.price < priceNum && product.price > 0
      );
      return setFilterProducts(uptoFive);
    } else if (priceNum === 1000) {
      const uptoThousand = products.filter(
        (product) => product.price < priceNum && product.price > 500
      );
      return setFilterProducts(uptoThousand);
    } else if (priceNum === 2000) {
      const uptoTwoThousand = products.filter(
        (product) => product.price < priceNum && product.price > 1000
      );
      return setFilterProducts(uptoTwoThousand);
    } else {
      setFilterProducts(products);
    }
  };

  //   add cart to Local Storage

  const handleAddToCart = (product) => {

    useAddCart(product)

    // if (product) {
    //   toast.success("Added to cart");
    // }
    // const allProduct = [];

    // const getProduct = JSON.parse(localStorage.getItem("products"));

    // if (!getProduct) {
    //   allProduct.push(product);
    //   localStorage.setItem("products", JSON.stringify(allProduct));
    // } else {
    //   allProduct.push(...getProduct, product);
    //   localStorage.setItem("products", JSON.stringify(allProduct));
    // }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8  mt-32">
              <div className="w-full mx-auto md:w-[60%]">
          <form onSubmit={handleSearch}>
            <div className="relative ">
            <input
              className="p-4 w-full"
              placeholder="search by name "
              name="search"
              type="text"
            />
            <input type="submit" className=" absolute px-8 right-0 bottom-0 top-0 bg-orange-500 text-white" value="Search" />
            </div>
          </form>
        </div>
      <div className="flex justify-end items-end my-5">
        <div>
          <select
            className="p-4"
            name=""
            id=""
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option>Select price range</option>
            <option value="500">$0-$500</option>
            <option value="1000">$500-$1000</option>
            <option value="2000">$1000-$2000</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {filterProducts?.map((product) => (
          <div key={product.id} className="shadow-lg hover:shadow-2xl">
            <Link to={`/singleProduct/${product.id}`}>
              <div className="">
                <img
                  className=" h-[230px] w-full object-cover"
                  src={product.thumbnail}
                  alt=""
                />
              </div>
            </Link>
            <Link to={`/singleProduct/${product.id}`}>
              <div className="p-3">
                <p>
                  {" "}
                  <span className="text-[18px] font-semibold">
                    ${product.price}{" "}
                  </span>{" "}
                  <span className="text-gray-500 line-through">
                    {product.discountPercentage}%
                  </span>
                </p>
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
                  {product.rating}
                </div>
                <h3 className="text-gray-600">{product.title.slice(0, 22)}</h3>
              </div>
            </Link>
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
        ))}
      </div>
    </div>
  );
};

export default ProductList;
