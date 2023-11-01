import React from "react";
import { useNavigate } from "react-router";
import MyButton from "./UI/button/MyButton";
import {CartProduct, Product} from "../types";

type Mix = CartProduct | Product

const ProductItem = (props: {
  quantity?: number,
  className: string,
  product: Mix,
  onClick: (product: Mix) => void,
  buttonText: string,
}) => {
  const quantity = `${props.quantity} шт.`;
  const navigate = useNavigate();

  return (
    <div className={props.className}>
      <h1>
        {props.product.id}. {props.product.title}
      </h1>
      <p>{props.product.price} руб.</p>
      <br />
      <p>{props.product.description}</p>
      <br />
      {props.quantity ? <p className="quantityText">{quantity}</p> : ""}
      <div className="products_btns">
        <MyButton onClick={() => props.onClick(props.product)}>
          {props.buttonText}
        </MyButton>
        <MyButton onClick={() => navigate(`/products/${props.product.id}`)}>
          Открыть
        </MyButton>
      </div>
    </div>
  );
};

export default ProductItem;
