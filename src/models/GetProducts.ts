import { IGetProduct } from '../interfaces/IProduct';
import connection from './Connection';

const getAllProducts = async (): Promise<IGetProduct[]> => {
  const [response] = await connection.execute(
    'SELECT * FROM Trybesmith.Products;',
  );

  return response as IGetProduct[];
};

export default getAllProducts;