import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import CartButton from "../../utils/CartButton";
import StarRating from "../../utils/StarRating";
import apiContext from "../../utils/apiContext";

const ProductDetails = () => {
  const [Product, setProduct] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const params = useParams();
  const { data, error, isLoading } = useContext(apiContext);
  useEffect(() => {
    if (data?.products) setProduct(data.products);
  }, [data]);

  useEffect(() => {
    const filteredProduct = Product.filter((item) => item.id == params.id);
    setFilteredItem(filteredProduct);
  }, [Product]);

  if (error) {
    return (
      <p className=" flex justify-center items-center md:mx-44 md:my-10 mx-5 m-24 p-5 md:py-10 md:text-xl  text-xs rounded-xl bg-orange-500 text-white ">
        Something Went Wrong
      </p>
    );
  }
  if (isLoading) {
    return (
      <div className="text-center">
        <div className="animate-spin inline-block size-20 border-[30px] border-current border-t-transparent text-orange-600 rounded-full dark:text-orange-500 m-14"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center text-2xl bg-gray-100 m-4 p-4">
        Product Details
      </div>
      <div>
        {filteredItem.map((item) => {
          return (
            <div key={item.id} className=" flex items-center justify-center">
              <div className=" p-10 m-10 rounded-xl bg-gray-100 flex-wrap flex justify-center items-center md:items-center md:justify-evenly">
                <div>
                  <img
                    className="w-56 h-56 md:w-80 md:h-80"
                    src={item.images}
                  />
                </div>
                <div className="text-center  bg-gray-200 p-6 rounded-xl">
                  <div className="text-2xl text-gray-600 font-semibold py-2">
                    {item.title}
                  </div>
                  <div className="text-balance md:text-center w-full max-w-prose text-gray-500 text-sm ">
                    {item.description}
                  </div>
                  <StarRating rating={item.rating} />
                  <div className="my-3 text-xl font-semibold">
                    Price: ${item.price}
                  </div>
                  <CartButton item={item.id} />
                  <button className="py-2 m-2 bg-orange-400 text-white p-2 rounded-xl">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
