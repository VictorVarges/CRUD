import { Request, Response } from 'express';
import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';
import getAll from '../services/getProducts';

const getAllProducts = async (req: Request, res: Response) => {
  const response = await getAll();

  if (!response[0]) {
    return res.status(HTTPSTATUS.NOT_FOUND).json({ error: MESSAGE.NO_PRODUCTS_WERE_PASSED });
  }

  return res.status(HTTPSTATUS.OK).json(response);
};

export default getAllProducts;