import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "../../utils/CartButton";

import apiContext from "../../utils/apiContext";

const Hero = () => {
  const [ProductData, setProductData] = useState([]);
  const { data, error, isLoading } = useContext(apiContext);

  useEffect(() => {
    if (data?.products) {
      setProductData(data.products.slice(0, 8));
    }
  }, [data]);

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
      <div className="flex flex-col items-center p-4">
        {/* Hero Section */}
        <div className="w-full bg-gray-100 text-center py-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to ShoppyGlobe
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Your One-Stop E-commerce Solution
          </p>
          <Link to="/products">
            <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
              Explore More Products
            </button>
          </Link>
        </div>
      </div>
      <div className="text-center bg-gray-100 m-2 mx-4 p-4 text-2xl text-gray-700 font-semibold">
        New Arrivals
      </div>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 text-center">
        {ProductData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              className="w-32 md:w-44 h-32 md:h-44 object-contain"
              src={item.images[0]}
            />
            <div>{item.title}</div>
            <div>{item.price}$</div>
            <div className="p-2">
              <CartButton item={item.id} />
              <Link to={`product-details/${item.id}`}>
                <button className="bg-orange-400 p-2 rounded-xl text-white mx-2">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
