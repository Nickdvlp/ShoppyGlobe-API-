import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../slice/searchSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(setSearchQuery(inputValue));
  };

  return (
    <div className="flex items-center">
      <input
        className="md:px-5 w-32 md:w-52 p-1 px-2 rounded-l-xl outline-none"
        placeholder="Search products..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white md:p-1 p-2 md:px-5 text-xs md:text-sm rounded-r-xl"
        onClick={() => {
          handleSearchClick();
          navigate("/products");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
