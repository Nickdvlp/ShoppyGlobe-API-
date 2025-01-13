import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import apiContext from "../../utils/apiContext";
import useFetch from "../../utils/useFetch";

// You should read READMe file first

const HomePage = () => {
  const { data, error, isLoading } = useFetch();
  return (
    <div>
      <apiContext.Provider value={{ data, error, isLoading }}>
        <Header />
        <Outlet />
        <Footer />
      </apiContext.Provider>
    </div>
  );
};

export default HomePage;
