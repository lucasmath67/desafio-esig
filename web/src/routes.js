import React from "react";
import ListProducts from "./pages/products";
import FormProduct from "./pages/products/form";
const routes = [
  {
    path: "/",
    exact: true,
    component: ListProducts,
  },
  {
    path: "/create",
    exact: true,
    component: FormProduct,
  },
  {
    path: "/:id",
    exact: true,
    component: FormProduct,
  },
];
export default routes;
