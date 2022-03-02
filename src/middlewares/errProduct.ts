import { NextFunction, Request, Response } from 'express';
import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';

const nameProductValidation = (req: Request, res: Response, next: NextFunction) => {  
  const { name } = req.body;
  if (name === undefined) return res.status(HTTPSTATUS.BAD_REQUEST).json(MESSAGE.NAME_INVALID);

  if (typeof name !== 'string') {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(MESSAGE.NAME_NOT_STRING); 
  } 

  if (name.length < 3) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(MESSAGE.NAME_NOT_SO_LONG);
  }
  
  next();
};

export default nameProductValidation;

export const amountProductValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (amount === undefined) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json(MESSAGE.AMOUNT_INVALID);
  }

  if (typeof amount !== 'string') { 
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(MESSAGE.AMOUNT_NOT_STRING); 
  }

  if (amount.length < 3) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json(MESSAGE.AMOUNT_NOT_SO_LONG);
  }
  next();
};