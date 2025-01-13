import { useDispatch } from "react-redux";
import { addItem } from "../slice/cartSlice";
import useFetch from "./useFetch";

const CartButton = ({ item }) => {
  const dispatch = useDispatch();
  const { data } = useFetch("https://dummyjson.com/products");

  const handleCart = () => {
    const current = data?.products.filter((data) => data.id == item);

    dispatch(addItem(current));
  };
  return (
    <button
      onClick={handleCart}
      className="py-2 m-2 bg-orange-400 text-white p-2 rounded-xl"
    >
      Add to Cart
    </button>
  );
};

export default CartButton;
