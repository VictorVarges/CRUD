import { Request, Response } from 'express';
import bodyProductValidated from '../services/product';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const insertInDB = await bodyProductValidated({ name, amount });

  if (insertInDB.code !== 201) {
    return res.status(insertInDB.code).json({ error: insertInDB.message });
  }

  return res.status(insertInDB.code).json(insertInDB);
};

export default createProduct;