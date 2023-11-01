import React, { useState, Dispatch } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/modal/MyModal";
import { ProductInfo } from "../types";

const ProductForm = ({
  create,
  visible,
  setVisible,
}: {
  create: (product: ProductInfo) => void;
  visible: boolean;
  setVisible: Dispatch<boolean>;
}) => {
  const [productInfo, setProductInfo] = useState<{
    title: string;
    price: number;
    description: string;
  }>({
    title: "",
    price: 0,
    description: "",
  });

  const addNewProduct = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!productInfo.title || !productInfo.description)
      return alert("Форма заполнена неправильно");
    create(productInfo);
    setProductInfo({
      title: "",
      price: 0,
      description: "",
    });
  };

  return (
    <MyModal visible={visible} setVisible={setVisible}>
      <form className="addProductForm">
        <MyInput
          value={productInfo.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProductInfo({ ...productInfo, title: e.target.value })
          }
          placeholder="Название товара"
          type="text"
        />
        <MyInput
          value={productInfo.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProductInfo({ ...productInfo, price: Number(e.target.value) })
          }
          placeholder="Цена товара"
          type="Number"
        />
        <MyInput
          value={productInfo.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProductInfo({ ...productInfo, description: e.target.value })
          }
          placeholder="Описание товара"
          type="text"
        />
        <MyButton onClick={addNewProduct}>Добавить товар</MyButton>
      </form>
    </MyModal>
  );
};

export default ProductForm;
