import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import ProductService from "../API/ProductsService";
import {useFetching} from "../hooks/useFetching";
import {Product, Comment} from "../types";
import Loader from "../components/UI/loader/Loader";

interface Params {
  id: string;
}

export default function ProductPage() {
  const params = useParams<keyof Params>() as Params;
  const productId: string = params.id;
  const [product, setProduct] = useState<Product>({description: "", id: 0, price: 0, title: ""});
  const [productComments, setProductComments] = useState<Comment[]>([]);
  const [fetchProduct, isLoading, error] = useFetching(async (productId: string) => {
    const data = await ProductService.getProductById(productId);
    setProduct(data)
  });
  const [fetchProductComments, isLoadingComments, errorComments] = useFetching(async (productId: string) => {
    const data = await ProductService.getProductCommentsById(productId);
      setProductComments(data.comments)
  });

  useEffect(() => {
    fetchProduct(productId);
    fetchProductComments(productId);
  }, []);

  const dateObj = new Date();

  return (
      <div className="container">
        {isLoading && <Loader />}
        {error && <h1>Ошибка ${error}</h1>}
        <h2>Страница продукта {params.id}</h2>
        <h3>{product.title} - {product.price} р.</h3>
        <p>{product.description}</p>
        <h2>Отзывы</h2>
        {isLoadingComments && <Loader />}
        {errorComments && <h1>Ошибка ${errorComments}</h1>}
        <div className="d-flex flex-column gap-3">
          {productComments.map((comment, index) =>
            <div key={index} className="p-2 bg-dark text-white">
              <p>{comment.user.username} - {('0' + dateObj.getUTCDay()).slice(-2)}.{('0' + dateObj.getUTCMonth()).slice(-2)}.{dateObj.getFullYear()}</p>
              <p>{comment.body}</p>
            </div>
          )}
        </div>
      </div>
  );
}
