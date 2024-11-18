import { differenceInYears } from 'date-fns'
import { Stock, StockKey } from './stock'

export class Portfolio {
  constructor(private readonly stocks: Map<StockKey, Stock>) {}

  profit(fromDate: Date, toDate: Date): number {
    return this.annualizedReturn(fromDate, toDate)
  }

  annualizedReturn(fromDate: Date, toDate: Date): number {
    const years = differenceInYears(toDate, fromDate)
    const portfolioReturn = this.returnValue(fromDate, toDate)

    if (years <= 0) throw new Error(`The dates range have to be at least 1 year`)

    return Math.pow(1 + portfolioReturn, 1 / years) - 1
  }

  returnValue(fromDate: Date, toDate: Date): number {
    const endingValue = this.investmentToDate(toDate)
    const beginningValue = this.investmentToDate(fromDate)
    return (endingValue - beginningValue) / beginningValue
  }

  investmentToDate(date: Date): number {
    let investment = 0
    this.stocks.forEach((stock) => {
      investment += stock.price(date) * stock.quantity
    })
    return investment
  }
}
