import About from "../pages/About";
import Login from "../pages/Login";
import ProductPage from "../pages/ProductPage";
import Products from "../pages/Products";

export const privateRoutes = [
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/products/:id",
    component: ProductPage,
  },
];

export const publicRoutes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/login",
    component: Login,
  },
];
