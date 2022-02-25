import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { IDuser } from '../interfaces/user';
// import { ILogin } from '../interfaces/login';

const SECRET = 'SECRET';

// **cria um token:
export const createToken = (user: IDuser): string => {
  const token = jwt.sign(user, SECRET, {
    algorithm: 'HS256',
    expiresIn: '10d',
  });
  return token;
};

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    jwt.verify(authorization, SECRET);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
  next();
};