export type StockKey = string

export interface Stock {
  price: (date: Date) => number
  quantity: number
}
