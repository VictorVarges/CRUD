import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';

export const usernameValidation = (username: string, password: string) => {
  if (username === undefined) {
    return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.USERNAME_INVALID };
  }
  if (!username && password) {
    return { code: HTTPSTATUS.UNAUTHORIZED, message: MESSAGE.PASSWORD_OR_USERNAME_UNAUTHORIZED };
  }
};
export const passwordValidation = (username: string, password: string) => {
  if (password === undefined) {
    return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.USERNAME_INVALID };
  }
  if (username && !password) {
    return { code: HTTPSTATUS.UNAUTHORIZED, message: MESSAGE.PASSWORD_OR_USERNAME_UNAUTHORIZED }; 
  }
};
