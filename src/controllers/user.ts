import { Request, Response } from 'express';
import userBodyValidations from '../services/user';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const insertInDB = await userBodyValidations({ username, classe, level, password });

  if (insertInDB.code !== 201) {
    return res.status(insertInDB.code).json({ error: insertInDB.message });
  }

  return res.status(insertInDB.code).json({ token: insertInDB.message });
};

export default createUser;