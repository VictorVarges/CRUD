import { IUser } from '../interfaces/IUser';
import { HTTPSTATUS } from '../helpers/HttpResponses';
import { createToken } from '../authorization/Tokens';
import createUsers from '../models/User';

const userBodyValidations = async (user: IUser) => {
  const insertInDB = await createUsers(user);
  const token = createToken(insertInDB);

  return { code: HTTPSTATUS.CREATED, message: token };
};

export default userBodyValidations;