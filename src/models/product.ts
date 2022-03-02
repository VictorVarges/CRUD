import { FieldPacket, ResultSetHeader } from 'mysql2';
import { IDProduct, IProduct } from '../interfaces/product';
import connection from './connection';

const createProduct = async (product: IProduct): Promise<IDProduct> => {
  const { name, amount } = product;

  const query = ('INSERT INTO products.Trybesmith(name, amount) VALUES (?,?)');
  const [rows]: [ResultSetHeader, FieldPacket[]] = await connection.execute(query, [name, amount]);

  return { id: rows.insertId, name, amount };
};

export default createProduct;