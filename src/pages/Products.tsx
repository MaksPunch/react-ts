import React, { useEffect, useRef, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductsList from "../components/ProductsList";
import ProductForm from "../components/ProductForm";
import CartList from "../components/CartList";
import SortComponent from "../components/SortComponent";
import MyButton from "../components/UI/button/MyButton";
import { CartProduct, Product, ProductInfo, sortOptions } from "../types";
import ProductService from "../API/ProductsService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getTotalPages } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import axios from "axios";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

export default function Products() {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [cartList, setCartList] = useState<CartProduct[]>([]);
  const [filter, setFilter] = useState<sortOptions>({
    sortByPrice: false,
    query: "",
  });
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [visible, setVisible] = useState<boolean>(false);
  const lastElement = useRef<HTMLDivElement | null>(null);
  const sortedAndSearchedProducts = useProducts(
    productsList,
    filter.sortByPrice,
    filter.query,
  );
  const [fetchProducts, isProductsLoading, productsError] = useFetching(
    async (limit, page) => {
      const res = await ProductService.getAll(+limit, +page);
      const { products } = res.data;
      if (products) {
        setProductsList([...productsList, ...products]);
        setTotalPages(getTotalPages(res.data.total, +limit));
      }
    },
  );

  useObserver(lastElement, page < totalPages, isProductsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchProducts(limit.toString(), page.toString());
  }, [page, limit]);

  const createProduct = (product: ProductInfo) => {
    axios
      .post("https://dummyjson.com/products/add", JSON.stringify(product), {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setVisible(false);
  };

  function changeQuantity(product: CartProduct | Product, number: number) {
    const productIndex = cartList.findIndex((cart) => cart.id === product.id);
    const newCartList = [...cartList];
    if (!newCartList[productIndex]) return;
    newCartList[productIndex].quantity += number;
    setCartList(newCartList);
  }

  function addProductToCart(product: CartProduct | Product) {
    if (!cartList.find((cart) => cart.id === product.id)) {
      const newCartProduct = {
        ...product,
        cartId: Date.now(),
        quantity: 1,
      };
      setCartList([...cartList, newCartProduct]);
    } else {
      changeQuantity(product, 1);
    }
  }

  function removeFromCart(product: CartProduct | Product) {
    if (!("quantity" in product)) return;
    if (product.quantity < 2) {
      setCartList(cartList.filter((prod) => prod.id !== product.id));
    } else {
      changeQuantity(product, -1);
    }
  }

  function changePage(page: number) {
    setPage(page);
  }

  return (
    <div className="App">
      <SortComponent filter={filter} setFilter={setFilter} />
      <MyButton onClick={() => setVisible(true)}>Добавить товар</MyButton>
      <br />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Количество элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Все" },
        ]}
      />
      <ProductForm
        create={createProduct}
        visible={visible}
        setVisible={setVisible}
      />
      {productsError && <h1>Ошибка ${productsError}</h1>}
      <ProductsList
        productsList={sortedAndSearchedProducts}
        onClick={addProductToCart}
      />
      <div ref={lastElement} className="dynamicPagination">
        Показать еще
      </div>
      {isProductsLoading && <Loader />}
      <Pagination changePage={changePage} page={page} totalPages={totalPages} />
      <CartList cartList={cartList} onClick={removeFromCart} />
    </div>
  );
}
