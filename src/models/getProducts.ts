import { FieldPacket, ResultSetHeader } from 'mysql2';
import { IGetProduct } from '../interfaces/product';
import connection from './connection';

const getAllProducts = async (products: IGetProduct) => {
  const { id, name, amount, orderId } = products;
  const [response]: [ResultSetHeader, FieldPacket[]] = await connection.execute(
    'SELECT * FROM Trybesmith.Products;', 
    [id, name, amount, orderId],
  );

  return { id: response.insertId, name, amount, orderId };
};

export default getAllProducts;