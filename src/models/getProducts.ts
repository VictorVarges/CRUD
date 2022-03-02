import { IGetProduct } from '../interfaces/product';
import connection from './connection';

const getAllProducts = async (): Promise<IGetProduct[]> => {
  const [response] = await connection.execute(
    'SELECT * FROM Trybesmith.Products;',
  );

  return response as IGetProduct[];
};

export default getAllProducts;