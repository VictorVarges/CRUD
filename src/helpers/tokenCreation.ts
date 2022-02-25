import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

dotenv.config();

// **cria um token:
const createToken = (user: IUser): string => {
  const token = jwt.sign({ data: user }, `${process.env.JWT}`, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
  return token;
};

export default createToken;