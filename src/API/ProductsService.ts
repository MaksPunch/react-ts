import axios from "axios";

export default class ProductService {
  static async getAll(limit = 10, page = 1) {
    return await axios.get("https://dummyjson.com/products", {
      params: {
        select: "title,price,description",
        limit: limit,
        skip: (page - 1) * limit,
      },
    });
  }

  static async getProductById(id: string) {
    const response = await axios.get("https://dummyjson.com/products/"+id, {
      params: {
        select: "title,price,description",
      },
    });
    return response.data;
  }
  static async getProductCommentsById(id: string) {
    const response = await axios.get(`https://dummyjson.com/posts/${id}/comments`, {
      params: {
        select: 'body, user'
      }
    });
    return response.data;
  }
}
