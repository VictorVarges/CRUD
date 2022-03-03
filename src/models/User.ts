import { FieldPacket, ResultSetHeader } from 'mysql2';
import { IUser, IDuser } from '../interfaces/IUser';
import connection from './Connection';

const createUsers = async (user: IUser): Promise<IDuser> => {
  const { username, classe, level, password } = user;
  const [response]: [ResultSetHeader, FieldPacket[]] = await connection.execute(
    'INSERT INTO Trybesmith.Users(username, classe, level, password)VALUES(?,?,?,?)', 
    [username, classe, level, password],
  );

  const newUser = { id: response.insertId, username, classe, level, password };

  return newUser;
};

export default createUsers;