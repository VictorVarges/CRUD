export interface IUser {
  username: string, 
  classe: string,
  level: number,
  password: string
}

export interface IDuser extends IUser {
  id: number,
}
