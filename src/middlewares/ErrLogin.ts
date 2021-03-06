import { NextFunction, Request, Response } from 'express';
import { HTTPSTATUS, MESSAGE } from '../helpers/HttpResponses';

const bodyValidation = (req: Request, res: Response, next: NextFunction) => {  
  const { username, password } = req.body;
  if (!username) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({ error: MESSAGE.USERNAME_INVALID });
  }
  if (!password) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({ error: MESSAGE.PASSWORD_INVALID });
  }
  next();
};

export default bodyValidation;