import { ILogin, IDLogin } from '../interfaces/ILogin';
import connection from './Connection';

const accessLogin = async (login: ILogin): Promise<IDLogin[]> => {
  const { username, password } = login;
  const query = ('SELECT id, username FROM Trybesmith.Users WHERE username= ? AND password= ?');
  const [rows] = await connection.execute(query, [username, password]);
  
  return rows as IDLogin[];
};

export default accessLogin;