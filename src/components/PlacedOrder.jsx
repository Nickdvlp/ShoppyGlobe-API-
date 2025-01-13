import { Link } from "react-router-dom";

const PlacedOrder = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      <div className="bg-green-500 text-white p-4 rounded-xl">
        🥳 Your Order Placed Successfully 🥳
      </div>
      <Link to="/">
        <button className="bg-orange-400 text-white m-5 p-3 rounded-xl">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default PlacedOrder;
