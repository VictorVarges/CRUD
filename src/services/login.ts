import { ILogin } from '../interfaces/login';
import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';
import accessLogin from '../models/login';
import { createToken } from '../helpers/tokens';

const usernameValidation = (username: string, password: string) => {
  if (username === undefined) {
    return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.USERNAME_INVALID };
  }
  if (!username && password) {
    return { code: HTTPSTATUS.UNAUTHORIZED, message: MESSAGE.PASSWORD_OR_USERNAME_UNAUTHORIZED };
  }
};
const passwordValidation = (username: string, password: string) => {
  if (password === undefined) {
    return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.USERNAME_INVALID };
  }
  if (username && !password) {
    return { code: HTTPSTATUS.UNAUTHORIZED, message: MESSAGE.PASSWORD_OR_USERNAME_UNAUTHORIZED }; 
  }
};

const loginValidated = async (login: ILogin) => {
  const { username, password } = login;

  const invokeUsername = usernameValidation(username, password);
  const invokePassword = passwordValidation(username, password);

  if (invokeUsername) return invokeUsername;
  if (invokePassword) return invokePassword;

  const responseDB = await accessLogin(login);
  console.log({ responseDB });
  
  const token = createToken(responseDB);
  console.log(token);

  return { code: 200, message: token };
};

export default loginValidated;
