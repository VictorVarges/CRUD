export interface IProduct {
  name: string,
  amount: string
}

export interface IDProduct extends IProduct {
  id: number,
}

export interface IGetProduct {
  id: number,
  name: string,
  amount: string,
  orderId: number
}