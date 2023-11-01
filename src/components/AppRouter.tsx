import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import ProductPage from "../pages/ProductPage";
import Products from "../pages/Products";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
