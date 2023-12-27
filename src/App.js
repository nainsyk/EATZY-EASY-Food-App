import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import store from "./utils/store";
import { useState } from "react";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [user, setUser] = useState({
        name: "Nainsy",
        email: "nainsy210@gmail.com,"
  });

  return (
    <Provider store= {store}>
    <UserContext.Provider
     value={{
      user: user,
      setUser: setUser,
     }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
    
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element: <Cart />,
      },
    ],
  },
  { 
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);