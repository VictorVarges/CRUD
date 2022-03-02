import { IProduct } from '../interfaces/product';
import createProduct from '../models/product';

const bodyProductValidated = async (product: IProduct) => {
  const insertInDB = await createProduct(product);

  return insertInDB;
};

export default bodyProductValidated;