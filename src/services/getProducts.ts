import { IGetProduct } from '../interfaces/product';
import getAllProducts from '../models/getProducts';

const getAll = async (): Promise<IGetProduct[]> => {
  const allProducts = await getAllProducts();

  return allProducts;
};

export default getAll;