import { IUser } from '../interfaces/user';
import { HTTPSTATUS } from '../helpers/httpResponses';
import { createToken } from '../authorization/tokens';
import createUsers from '../models/user';

const userBodyValidations = async (user: IUser) => {
  const insertInDB = await createUsers(user);
  const token = createToken(insertInDB);

  return { code: HTTPSTATUS.CREATED, message: token };
};

export default userBodyValidations;