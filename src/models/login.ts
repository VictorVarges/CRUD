import { ILogin, IDLogin } from '../interfaces/login';
import connection from './connection';

const accessLogin = async (login: ILogin): Promise<IDLogin[]> => {
  const { username, password } = login;
  const query = ('SELECT * FROM Trybesmith.Users WHERE username= ? AND password= ?');
  const [rows] = await connection.execute(query, [username, password]);

  return rows as IDLogin[];
};

export default accessLogin;