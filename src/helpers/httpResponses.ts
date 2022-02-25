export enum HTTPSTATUS {
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  UNPROCESSABLE_ENTITY = 422,
}

export enum MESSAGE {
  USERNAME_INVALID = 'Username is required',
  USERNAME_NOT_STRING = 'Username must be a string',
  USERNAME_NOT_SO_LONG = 'Username must be longer than 2 characters',
  CLASSE_INVALID = 'Classe is required',
  CLASSE_NOT_STRING = 'Classe must be a string',
  CLASSE_NOT_SO_LONG = 'Classe must be longer than 2 characters',
  LEVEL_INVALID = 'Level is required',
  LEVEL_NOT_NUMBER = 'Level must be a number',
  LEVEL_NOT_SO_LONG = 'Level must be greater than 0',
  PASSWORD_INVALID = 'Password is required',
  PASSWORD_NOT_STRING = 'Password must be a string',
  PASSWORD_NOT_SO_LONG = 'Password must be longer than 7 characters',
  PASSWORD_OR_USERNAME_UNAUTHORIZED = 'Username or password invalid',
}