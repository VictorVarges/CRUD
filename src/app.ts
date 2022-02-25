import express from 'express';
import createUser from './controllers/user';
import accessLogin from './controllers/login';

const app = express();

app.use(express.json());

app.post('/users', createUser);
app.post('/login', accessLogin);

export default app;
