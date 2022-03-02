import { IGetProduct } from '../interfaces/product';
import getAllProducts from '../models/getProducts';

const getAll = async (products: IGetProduct) => {
  const allProducts = await getAllProducts(products);

  return allProducts;
};

export default getAll;