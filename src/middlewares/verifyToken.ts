import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../authorization/tokens';

const tokenValidate = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    verifyToken(authorization);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  next();
};

export default tokenValidate;