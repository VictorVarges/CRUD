import express from 'express';
import createUser from './controllers/user';
import accessLogin from './controllers/login';
import bodyValidation from './middlewares/errLogin';
import tokenValidate from './middlewares/verifyToken';
import createProduct from './controllers/product';
import nameProductValidation, { amountProductValidation } from './middlewares/errProduct';
import getAllProducts from './controllers/getProducts';
import {
  usernameValidation, classeValidation, levelValidation, passwordValidation,
} from './middlewares/errUser';

const app = express();

app.use(express.json());

app.post(
  '/users',
  usernameValidation,
  classeValidation,
  levelValidation,
  passwordValidation,
  createUser,
);
app.post('/login', bodyValidation, accessLogin);
app.post('/products', tokenValidate, nameProductValidation, amountProductValidation, createProduct);

app.get('/products', tokenValidate, getAllProducts);

export default app;
