import { FaPlus, FaTrash } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../../slice/cartSlice";

import { Link } from "react-router-dom";
import { useContext } from "react";
import apiContext from "../../utils/apiContext";

const Cart = () => {
  const CartQuery = useSelector((state) => state.cart?.items || []);
  const dispatch = useDispatch();
  const { data } = useContext(apiContext);

  const UniqueItems = CartQuery.reduce((acc, cur) => {
    if (!acc.has(cur[0].id)) {
      acc.set(cur[0].id, { ...cur[0], count: 1 });
    } else {
      acc.get(cur[0].id).count += 1;
    }
    return acc;
  }, new Map()); // create Map which have unique items for render once in the cart page
  const UniqueItemsArray = Array.from(UniqueItems.values());

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const handleAddItem = (item) => {
    const current = data?.products.filter((data) => data.id == item);

    dispatch(addItem(current));
  };

  return (
    <div className="grid grid-cols-1">
      {UniqueItemsArray.length !== 0 ? (
        UniqueItemsArray.map((data) => {
          return (
            <div
              key={data.id}
              className="m-4 flex-wrap  flex justify-center bg-gray-100 items-center"
            >
              <img className="w-44 h-44" src={data.images} />
              <div
                className="flex bg-gray-200 p-5 m-2 rounded-lg
             justify-center flex-col gap-2"
              >
                <div className="text-gray-700">{data.title}</div>
                <div className="text-green-500 text-xs">In Stock</div>
                <span className="flex  items-center gap-2 text-gray-500 border-black text-lg rounded-xl justify-center">
                  <FaTrash
                    className="cursor-pointer"
                    onClick={handleRemoveItem}
                  />
                  <div>{data.count}</div>
                  <FaPlus
                    className="cursor-pointer"
                    onClick={() => handleAddItem(data.id)}
                  />
                </span>
                <Link to="/order-placed">
                  <div className="text-center bg-orange-400 text-white p-2 rounded-xl">
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div className="h-[60vh] flex items-center justify-center text-center   text-2xl rounded-xl">
          <div className="bg-gray-200 rounded-xl p-4">Cart is Empty</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
