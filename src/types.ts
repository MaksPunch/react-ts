interface ProductInfo {
  title: string;
  description: string;
  price: number;
}

interface Product extends ProductInfo {
  id: number;
}

interface CartProduct extends Product {
  cartId: number;
  quantity: number;
}

interface sortOptions {
  sortByPrice: boolean;
  query: string
}

interface Comment {
  body: string,
  user: {
    id: number,
    username: string
  }
}

export {Product, CartProduct, ProductInfo, sortOptions, Comment};
