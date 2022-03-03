import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT || 'SECRET';

// **cria um token:
export const createToken = (user: object): string => {
  const token = jwt.sign(user, SECRET, {
    algorithm: 'HS256',
    expiresIn: '10d',
  });
  return token;
};

export const verifyToken = (token: string) => {
  const verify = jwt.verify(token, SECRET);
  return verify;
};