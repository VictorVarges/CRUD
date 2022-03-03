import { Request, Response, NextFunction } from 'express';
import { HTTPSTATUS, MESSAGE } from '../helpers/HttpResponses';
import { verifyToken } from '../authorization/Tokens';

const tokenValidate = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(HTTPSTATUS.UNAUTHORIZED).json({ error: MESSAGE.TOKEN_NOT_FOUND });
  }

  try {
    verifyToken(authorization);
  } catch (error) {
    return res.status(HTTPSTATUS.UNAUTHORIZED).json({ error: MESSAGE.INVALID_TOKEN });
  }

  next();
};

export default tokenValidate;