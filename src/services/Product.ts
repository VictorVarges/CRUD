import { IProduct } from '../interfaces/IProduct';
import createProduct from '../models/Product';

const bodyProductValidated = async (product: IProduct) => {
  const insertInDB = await createProduct(product);

  return insertInDB;
};

export default bodyProductValidated;