import { IUser } from '../interfaces/user';
import { HTTPSTATUS, MESSAGE } from '../helpers/httpResponses';
import { createToken } from '../authorization/tokens';
import createUsers from '../models/user';

const usernameValidation = (username: string) => {
  if (!username) return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.USERNAME_INVALID };

  if (typeof username !== 'string') { 
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.USERNAME_NOT_STRING };
  }

  if (username.length < 3) {
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.USERNAME_NOT_SO_LONG };
  }
};

const classeValidation = (classe: string) => {
  if (!classe) return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.CLASSE_INVALID };
  if (typeof classe !== 'string') { 
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.CLASSE_NOT_STRING };
  }
  if (classe.length < 3) {
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.CLASSE_NOT_SO_LONG };
  }
};

const levelValidation = (level: number) => {
  if (level === undefined) return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.LEVEL_INVALID };

  if (level < 1) {
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.LEVEL_NOT_SO_LONG };
  }
  if (typeof level !== 'number') { 
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.LEVEL_NOT_NUMBER };
  }
};

const passwordValidation = (password: string) => {
  if (!password) return { code: HTTPSTATUS.BAD_REQUEST, message: MESSAGE.PASSWORD_INVALID };
  if (typeof password !== 'string') { 
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.PASSWORD_NOT_STRING };
  }
  if (password.length < 8) {
    return { code: HTTPSTATUS.UNPROCESSABLE_ENTITY, message: MESSAGE.PASSWORD_NOT_SO_LONG };
  }
};

const userBodyValidations = async (user: IUser) => {
  const { username, classe, level, password } = user;
  const invokeUsernameVD = usernameValidation(username);
  const invokeClasseVD = classeValidation(classe);
  const invokeLevelVD = levelValidation(level);
  const invokePasswordVD = passwordValidation(password);

  if (invokeUsernameVD) return invokeUsernameVD;
  if (invokeClasseVD) return invokeClasseVD;
  if (invokeLevelVD) return invokeLevelVD;
  if (invokePasswordVD) return invokePasswordVD;

  const insertInDB = await createUsers(user);
  const token = createToken(insertInDB);

  return { code: HTTPSTATUS.CREATED, message: token };
};

export default userBodyValidations;