import { Dispatch, SetStateAction } from "react";

export interface ProductInfo {
  title: string;
  description: string;
  price: number;
}

export interface Product extends ProductInfo {
  id: number;
}

export interface CartProduct extends Product {
  cartId: number;
  quantity: number;
}

export interface sortOptions {
  sortByPrice: boolean;
  query: string;
}

export interface Comment {
  body: string;
  user: {
    id: number;
    username: string;
  };
}

export interface AuthContextTypes {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}
