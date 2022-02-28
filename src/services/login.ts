import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';
import { ILogin } from '../interfaces/login';
import accessLogin from '../models/login';
import { createToken } from '../authorization/tokens';

const usernameValidation = (username: string | undefined) => {   
  if (!username) {
    return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.USERNAME_INVALID };
  }
};
const passwordValidation = (password: string | undefined) => {
  if (!password) {
    return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.PASSWORD_INVALID };
  }
};

const userValidation = async (login: ILogin) => {
  const { username, password } = login;
  const userDB = await accessLogin({ username, password });
  console.log({ userDB });

  if (userDB.length === 0) {
    return { code: HTTPSTATUS.UNAUTHORIZED, message: MESSAGE.PASSWORD_OR_USERNAME_UNAUTHORIZED };
  }
};

const loginValidated = async (login: ILogin) => {
  const { username, password } = login;

  const invokeUsername = usernameValidation(username);
  const invokePassword = passwordValidation(password);
  const invokeUser = await userValidation({ username, password });

  if (invokeUsername) return invokeUsername;
  if (invokePassword) return invokePassword;
  if (invokeUser) return invokeUser;

  const [responseDB] = await accessLogin(login);  
  const token = createToken(responseDB);

  return { code: 200, message: token };
};

export default loginValidated;
