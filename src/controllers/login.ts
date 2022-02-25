import { Request, Response } from 'express';
import loginValidated from '../services/login';

const accessLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const response = await loginValidated({ username, password });

  if (response.code !== 200) {
    return res.status(response.code).json({ error: response.message });
  }

  return res.status(response.code).json({ token: response.message });
};

export default accessLogin;