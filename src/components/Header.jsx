import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";
import useFetch from "../../utils/useFetch";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state) => state.cart?.items || []);
  const { data } = useFetch();

  // in Header categories and cart button are two times rendering. first for desktop purpose and second mobile purpose. i am using hamburger menu for small screens.

  const uniqueCategoriesSet = data?.products.reduce((acc, curr) => {
    acc.add(curr.category);
    return acc;
  }, new Set()); // here i used Set data Structure to take unique categories to show in category drop down menu

  const uniqueCategoriesArray = uniqueCategoriesSet
    ? Array.from(uniqueCategoriesSet)
    : [];

  const categories = [...uniqueCategoriesArray];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <ul className="bg-gray-100 flex md:justify-evenly justify-around items-center p-2 md:p-2 mx-4">
        <li>
          <Link to="/">
            <img
              className="rounded-full w-8 h-8  md:w-12 md:h-12"
              src="./logo2.webp"
            />
          </Link>
        </li>
        <Search />

        <div className="relative">
          <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
            <FaBars size={24} />
          </div>

          {isMenuOpen && (
            <ul className="absolute top-8 right-0 bg-gray-100 shadow-md rounded-lg p-2">
              <li className="p-2 hover:bg-gray-200 hover:rounded-lg cursor-pointer">
                <div className="relative inline-block text-left">
                  {/* Dropdown Button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700"
                  >
                    Categories
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {categories.map((category, index) => (
                          <Link
                            to={`/categorizedItems/${category}`}
                            key={index}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <Link to="/cart">
                <li className="p-2 hover:bg-gray-200 cursor-pointer text-center hover:rounded-lg">
                  Cart
                  <span className="px-2 bg-gray-500 text-white rounded-full mx-1">
                    {items.length}
                  </span>
                </li>
              </Link>
            </ul>
          )}
        </div>
        <li className="hidden md:flex bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
          <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700"
            >
              Categories
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {categories.map((category, index) => (
                    <Link
                      to={`/categorizedItems/${category}`}
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </li>
        <Link to="/cart">
          <li className="hidden md:flex bg-gray-200 hover:bg-gray-300 p-2 px-4 rounded-lg ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAYFJREFUSEvV1D9IVWEYx/GPQ1DgYkREhZBrQw2RQ001tESYNEqEbtEQNCgILjVEQeDgJok0R4IgIdUWpa6CCBE1FETiqNCgngfeE7e69573Xu4deuHA4Zzn/T7P83v+9Oji6eki2/8PP4zdDkp0H9OlLJ2GP8ODeprP4C4eYqrFbNZwAdewXA8+iI/4jtPYz3RwDD+xU0jSh1+NuuUzzuAq3mXCx4pgZvEKw3GnEXwSj/ACtzPhAR1COHneDN6Pr6mDrhfa72U4WMIRnMCPZvD49xZXMqC1Jgu4WX5oNqF3MBeFKar/IcPJKh5jOwfem6ofMxBd8y3DwR8mVbtlPhX0NZ5WaL+F9Vp6Ffw4NnA0I+pF3GgFHrbnMJImr1kw7xEt/PtURV4aRnudR8hTewYQz5t6meXAD+ELTqbuGU2gU0VGn4oOiYI/KWZi/G8HOfByoOJupH45QS5iJb2/LIp5qx143LmHS7Gj01IrORM4m1bFZrvwjGb51yRHlrbAcekA/tc7GEcvpHAAAAAASUVORK5CYII=" />
            <span className="px-4 bg-gray-500 text-white rounded-full ">
              {items.length}
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
