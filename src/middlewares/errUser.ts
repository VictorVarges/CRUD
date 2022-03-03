import { NextFunction, Request, Response } from 'express';
import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';

export const usernameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({ error: MESSAGE.USERNAME_INVALID });
  }

  if (typeof username !== 'string') {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ error: MESSAGE.USERNAME_NOT_STRING });
  }

  if (username.length < 3) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY)
      .json({ error: MESSAGE.USERNAME_NOT_SO_LONG });
  }
  next();
};

export const classeValidation = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) return res.status(HTTPSTATUS.BAD_REQUEST).json({ error: MESSAGE.CLASSE_INVALID });

  if (typeof classe !== 'string') {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ error: MESSAGE.CLASSE_NOT_STRING });
  }
  if (classe.length < 3) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ error: MESSAGE.CLASSE_NOT_SO_LONG });
  }
  next();
};

export const levelValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (!level) return res.status(HTTPSTATUS.BAD_REQUEST).json({ error: MESSAGE.LEVEL_INVALID });

  if (level < 1) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ error: MESSAGE.LEVEL_NOT_SO_LONG });
  }
  if (typeof level !== 'number') {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ error: MESSAGE.LEVEL_NOT_NUMBER });
  }
  next();
};

export const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({ error: MESSAGE.PASSWORD_INVALID });
  }
  if (typeof password !== 'string') {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY).json({ error: MESSAGE.PASSWORD_NOT_STRING });
  }
  if (password.length < 8) {
    return res.status(HTTPSTATUS.UNPROCESSABLE_ENTITY)
      .json({ error: MESSAGE.PASSWORD_NOT_SO_LONG });
  }
  next();
};
