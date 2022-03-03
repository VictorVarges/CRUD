import { IGetProduct } from '../interfaces/IProduct';
import getAllProducts from '../models/GetProducts';

const getAll = async (): Promise<IGetProduct[]> => {
  const allProducts = await getAllProducts();

  return allProducts;
};

export default getAll;