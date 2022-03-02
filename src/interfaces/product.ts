export interface IProduct {
  name: string,
  amount: string
}

export interface IDProduct extends IProduct {
  id: number,
}