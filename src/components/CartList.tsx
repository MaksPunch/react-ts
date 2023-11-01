import ProductItem from "./ProductItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {CartProduct, Product} from "../types";
import React from "react";

const CartList = ({
  cartList,
  onClick,
}: {
  cartList: CartProduct[];
  onClick: (product: CartProduct | Product) => void;
}) => {
  if (!cartList.length) {
    return (
      <div>
        <h1>Корзина</h1>
        <p>Товары не найдены</p>
      </div>
    );
  }

  return (
    <div>
      <div className="cartHeader">
        <h1>Корзина</h1>
        <p>
          (
          {cartList.reduce(
            (acc: number, curr: CartProduct) => acc + curr.quantity,
            0
          )}
          )
        </p>
      </div>
      <TransitionGroup className="productList">
        {cartList.map((product) => (
          <CSSTransition
            key={product.cartId}
            timeout={500}
            classNames="cartItem"
          >
            <ProductItem
              product={product}
              onClick={onClick}
              buttonText="Удалить из корзины"
              quantity={product.quantity}
              className="cartItem"
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="priceRow">
        <h3>Итого: </h3>
        <p>
          {cartList.reduce(
            (acc: number, curr: CartProduct) =>
              acc + curr.price * curr.quantity,
            0
          )}{" "}
          руб.
        </p>
      </div>
    </div>
  );
};

export default CartList;
