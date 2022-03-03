import express from 'express';
import createUser from './controllers/User';
import accessLogin from './controllers/Login';
import bodyValidation from './middlewares/ErrLogin';
import tokenValidate from './middlewares/VerifyToken';
import createProduct from './controllers/Product';
import nameProductValidation, { amountProductValidation } from './middlewares/ErrProduct';
import getAllProducts from './controllers/GetProducts';
import {
  usernameValidation, classeValidation, levelValidation, passwordValidation,
} from './middlewares/ErrUser';

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
