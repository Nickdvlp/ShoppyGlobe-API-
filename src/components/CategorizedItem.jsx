import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CartButton from "../../utils/CartButton";
import { ApiContext } from "../../utils/useFetch";

const CategorizedItem = () => {
  const [items, setItems] = useState([]);
  const params = useParams(); // it is taking category which you clicked in category drop down menu.
  const { data, error, isLoading } = useContext(ApiContext);

  // useEffect for taking list of items which is similiar to params category
  useEffect(() => {
    const itemList = data?.products
      ? data?.products.filter((item) => {
          return item.category == params.category;
        })
      : [];
    setItems(itemList);
  }, [data, params.category]);

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
    <div className="grid grid-cols-2 m-2 p-2 md:grid md:grid-cols-4 ">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <img className="w-44 h-44" src={item.images} />
            <div className=" text-center">{item.title}</div>
            <div>
              <CartButton />
              <Link to={`/product-details/${item.id}`}>
                <button className="py-2 m-2 bg-orange-400 text-white p-2 rounded-xl">
                  View More
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorizedItem;
