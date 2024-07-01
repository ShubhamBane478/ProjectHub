import axios from 'axios';

const API_URL = 'https://dummyjson.com/products/category/smartphones';

export const fetchProducts = async (limit = 5, skip = 0) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [], total: 0 };
  }
};
