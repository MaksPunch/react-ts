import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context";
// import About from "../pages/About";
import Error from "../pages/Error";
// import ProductPage from "../pages/ProductPage";
// import Products from "../pages/Products";
import { publicRoutes, privateRoutes } from "../router";
import Loader from "./UI/loader/Loader";

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route Component={route.component} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Error path="/products" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route Component={route.component} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Error path="/login" />} />
    </Routes>
  );
}
/* <Route path="/about" element={<About />} />
<Route path="/products" element={<Products />} />
<Route path="/products/:id" element={<ProductPage />} /> */
