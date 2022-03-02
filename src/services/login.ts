import { ILogin } from '../interfaces/login';
import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';
import accessLogin from '../models/login';
import { createToken } from '../authorization/tokens';

const userValidation = async (login: ILogin) => {
  const { username, password } = login;
  const userDB = await accessLogin({ username, password });

  if (!userDB[0]) {
    return { code: HTTPSTATUS.UNAUTHORIZED, message: MESSAGE.PASSWORD_OR_USERNAME_UNAUTHORIZED };
  }
};

const loginValidated = async (login: ILogin) => {
  const { username, password } = login;
  const invokeUser = await userValidation({ username, password });

  if (invokeUser) return invokeUser;

  const [responseDB] = await accessLogin(login);  
  const token = createToken(responseDB);

  return { code: 200, message: token };
};

export default loginValidated;
