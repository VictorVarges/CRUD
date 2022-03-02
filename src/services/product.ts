import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';
import { IProduct } from '../interfaces/product';
import createProduct from '../models/product';

const nameProductValidation = (name: string) => {
  if (name === undefined) return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.NAME_INVALID };

  if (typeof name !== 'string') { 
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.NAME_NOT_STRING }; 
  }

  if (name.length < 3) {
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.PASSWORD_NOT_SO_LONG };
  }
};
 
const amountProductValidation = (amount: string) => {
  if (amount === undefined) {
    return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.AMOUNT_INVALID };
  }

  if (typeof amount !== 'string') { 
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.AMOUNT_NOT_STRING }; 
  }

  if (amount.length < 3) {
    return {
      code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.PASSWORD_NOT_SO_LONG,
    };
  }
};

const bodyProductValidated = async (product: IProduct) => {
  const { name, amount } = product;
  const invokeNameValidation = nameProductValidation(name);
  const invokeAmountValidation = amountProductValidation(amount);

  if (invokeNameValidation) return invokeNameValidation;
  if (invokeAmountValidation) return invokeAmountValidation;

  const insertInDB = await createProduct(product);
  return { code: 201, message: insertInDB };
};

export default bodyProductValidated;