import { Portfolio } from './portfolio'
import { StockKey, Stock } from './stock'
import { FakeStock } from './fake-stock'

const stocks = new Map<StockKey, Stock>()

stocks.set('StockA', new FakeStock(12))
stocks.set('StockB', new FakeStock(32))

const portfolio = new Portfolio(stocks)

const fromDate = new Date('2018-06-21T09:24:00')
const toDate = new Date('2024-10-12T10:46:00')

const profit = portfolio.profit(fromDate, toDate)

console.info(`Profit: ${profit} (${(profit * 100).toFixed(1)}%)`)
