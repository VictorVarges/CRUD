export interface ILogin {
  username: string,
  password: string,
}

export interface IDLogin extends ILogin{
  id: number,
}