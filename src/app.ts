import express from 'express';
import createUser from './controllers/user';
import accessLogin from './controllers/login';
import bodyValidation from './middlewares/errLogin';
import tokenValidate from './middlewares/verifyToken';
import createProduct from './controllers/product';
import nameProductValidation, { amountProductValidation } from './middlewares/errProduct';

const app = express();

app.use(express.json());

app.post('/users', createUser);
app.post('/login', bodyValidation, accessLogin);
app.post('/products', tokenValidate, nameProductValidation, amountProductValidation, createProduct);

export default app;
