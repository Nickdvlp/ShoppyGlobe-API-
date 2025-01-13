import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartButton from "../../utils/CartButton";
import apiContext from "../../utils/apiContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const searchQuery = useSelector((state) => state.search.query);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data, error, isLoading } = useContext(apiContext);

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
      setFilteredProducts(data.products);
    }
  }, [data]);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [searchQuery, products]);

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
      <div className="text-center m-4 p-4 text-2xl bg-gray-100">
        Our All Products
      </div>
      <div className="grid items-center grid-cols-2 md:grid-cols-4 gap-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="flex items-center flex-col">
              <img
                className="w-44 h-44 object-contain"
                src={product.images[0]}
                alt={product.title}
              />
              <div>{product.title}</div>
              <div className="p-2">
                <CartButton item={product.id} />
                <Link to={`/product-details/${product.id}`}>
                  <button className="text-white p-2 px-2 bg-orange-400 mx-2 rounded-xl">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center">
            <span className=" bg-orange-500 text-2xl p-2 h-56 rounded-xl text-white">
              Not Found
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
