import {useMemo} from "react";
import {Product} from "../types";

export const useSortedProducts = (
  productsList: Product[],
  sortByPrice: boolean
) => {
  return useMemo(() => {
    if (sortByPrice) {
      return [...productsList].sort(
          (a: Product, b: Product) => b.price - a.price
      );
    }
    return [...productsList].sort((a, b) => a.id - b.id);
  }, [sortByPrice, productsList]);
};

export const useProducts = (
  productsList: Product[],
  sortByPrice: boolean,
  query: string
) => {
  const sortedProducts = useSortedProducts(productsList, sortByPrice);
  return useMemo(() => {
    if (query) {
      return [...sortedProducts].filter(
          (el) =>
              el.title.toLowerCase().includes(query) ||
              el.description.toLowerCase().includes(query)
      );
    }
    return sortedProducts;
  }, [query, sortedProducts]);
};
