import React from "react";
import ProductItem from "./ProductItem";
import {Product} from "../types";

const ProductsList = ({
  productsList,
  onClick,
}: {
  productsList: Product[];
  onClick: (product: Product) => void;
}) => {
  if (!productsList.length) {
    return (
      <div>
        <h1>Товары</h1>
        <p>Товары не найдены</p>
      </div>
    );
  }

  const productsListArray = productsList.map((product) => (
      <ProductItem
          product={product}
          key={product.id}
          onClick={onClick}
          buttonText="Добавить в корзину"
          className="productItem"
      />
  ))

  return (
    <div>
      <h1>Товары</h1>
      <div className="productList">
        {productsListArray}
      </div>
    </div>
  );
};

export default ProductsList;
