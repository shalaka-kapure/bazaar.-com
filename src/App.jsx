import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:category",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
    <RouterProvider router={appRouter} />;
  </Provider>
  );
};

export default App;
