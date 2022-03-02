import { NextFunction, Request, Response } from 'express';
// import loginValidated from '../services/login';
import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';

const bodyValidation = (req: Request, res: Response, next: NextFunction) => {  
  const { username, password } = req.body;
  if (username === undefined) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({ error: MESSAGE.USERNAME_INVALID });
  }
  if (password === undefined) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({ error: MESSAGE.PASSWORD_INVALID });
  }
  next();
};

export default bodyValidation;