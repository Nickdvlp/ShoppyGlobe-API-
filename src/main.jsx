import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store.js";

const App = lazy(() => import("../src/components/App.jsx"));
const ProductList = lazy(() => import("../src/components/ProductList.jsx"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));
const Hero = lazy(() => import("./components/Hero.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const CategorizedItem = lazy(() => import("./components/CategorizedItem.jsx"));
const PlacedOrder = lazy(() => import("./components/PlacedOrder.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categorizedItems/:category",
        element: <CategorizedItem />,
      },
      {
        path: "/order-placed",
        element: <PlacedOrder />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </StrictMode>
  </Provider>
);
