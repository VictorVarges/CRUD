import { Request, Response } from 'express';
import { IProduct } from '../interfaces/product';
import bodyProductValidated from '../services/product';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount }: IProduct = req.body;
  const insertInDB = await bodyProductValidated({ name, amount });

  return res.status(insertInDB.code).json({ item: insertInDB });
};

export default createProduct;