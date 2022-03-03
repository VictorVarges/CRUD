import { FieldPacket, ResultSetHeader } from 'mysql2';
import { IDProduct, IProduct } from '../interfaces/IProduct';
import connection from './Connection';

const createProduct = async (product: IProduct): Promise<IDProduct> => {
  const { name, amount } = product;

  const query = ('INSERT INTO Trybesmith.Products(name, amount) VALUES (?,?)');
  const [rows]: [ResultSetHeader, FieldPacket[]] = await connection.execute(query, [name, amount]);

  return { id: rows.insertId, name, amount };
};

export default createProduct;