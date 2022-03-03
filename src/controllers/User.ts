import { Request, Response } from 'express';
import userBodyValidations from '../services/User';
import { MESSAGE, HTTPSTATUS } from '../helpers/HttpResponses';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const insertInDB = await userBodyValidations({ username, classe, level, password });

  if (!insertInDB) {
    return res.status(HTTPSTATUS.NOT_FOUND).json({ error: MESSAGE.NO_PRODUCTS_WERE_PASSED });
  }

  return res.status(insertInDB.code).json({ token: insertInDB.message });
};

export default createUser;