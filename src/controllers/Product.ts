import { Request, Response } from 'express';
import { HTTPSTATUS } from '../helpers/HttpResponses';
import { IProduct } from '../interfaces/IProduct';
import bodyProductValidated from '../services/Product';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount }: IProduct = req.body;
  const insertInDB = await bodyProductValidated({ name, amount });

  return res.status(HTTPSTATUS.CREATED).json({ item: insertInDB });
};

export default createProduct;