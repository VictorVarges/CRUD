import { IProduct } from '../interfaces/product';

const nameProductValidation = (name: string) => {

  if (name === undefined) return { code:, message: }
  if (typeof name !== 'string') { code:, message: }
  if(name.length < 3) return { code:, message: }

};