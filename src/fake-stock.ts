import { differenceInCalendarYears } from 'date-fns'
import { Stock } from './stock'

export class FakeStock implements Stock {
  constructor(public quantity: number) {}

  /**
   * Some fake stock to test the code.
   * Note that this stock will never produce a negative Return in
   * the annualized formula (1 + Return) ^ (1 / N) - 1. This is intentional
   * because JavaScript returns NaN whem a negative number is raised.
   *
   * @param date
   * @returns
   */
  price(date: Date) {
    const dateYear = date.getUTCFullYear()
    const yearsFromNow = differenceInCalendarYears(Date.now(), date)
    const factor = yearsFromNow * 100

    if (factor >= dateYear || factor < 0) return 1

    return dateYear - factor
  }
}
