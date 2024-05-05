import { type ClassValue, clsx } from 'clsx'
import currencyFormatter from 'currency-formatter'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isImage = (url: string | number | null | undefined) => {
  if (typeof url === 'string') return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
  return false
}

type FormatCurrencyOptions = {
  code?: string
  symbol?: string
  thousandsSeparator?: string
  decimalSeparator?: string
  symbolOnLeft?: boolean
  spaceBetweenAmountAndSymbol?: boolean
  decimalDigits?: number
}

export const formatCurrency = (value: number, options: FormatCurrencyOptions = {}) => {
  const defaultOptions = {
    code: '',
    symbol: '',
    thousandsSeparator: ',',
    decimalSeparator: '.',
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: false,
    decimalDigits: 0
  }
  const formatOptions = {
    ...defaultOptions,
    ...options
  }
  const formatter = currencyFormatter.format(value, formatOptions)
  //remove .00 from the end of the string
  return formatter.replace(/\.00$/, '')
}

interface ParsePercentageOptions {
  decimalDigits?: number
}

export const parsePercentage = (value: number, options?: ParsePercentageOptions) => {
  const defaultOptions = {
    decimalDigits: 2
  }
  const formatOptions = {
    ...defaultOptions,
    ...options
  }
  return `${Number(value).toFixed(formatOptions.decimalDigits)}%`
}
