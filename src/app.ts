import express from 'express';
import createUser from './controllers/user';
import accessLogin from './controllers/login';
import bodyValidation from './middlewares/errLogin';

const app = express();

app.use(express.json());

app.post('/users', createUser);
app.post('/login', bodyValidation, accessLogin);

export default app;
