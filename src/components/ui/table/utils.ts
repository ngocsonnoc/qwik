import type { Signal } from '@builder.io/qwik'

import { CHECKBOX_KEY, RECORD_INDEX_STRING, SORT_ORDERS } from './constants'

export function sortData({
  tableData,
  sortKey,
  sortOrder
}: {
  tableData: {
    [key: string]: string | number | null | undefined
  }[]
  sortKey: Signal<string>
  sortOrder: Signal<string>
}) {
  if (!sortKey.value || !sortOrder.value) return tableData

  const sortedData = Array.from(tableData).sort((a: any, b: any) => {
    return a[`${sortKey.value}`] - b[`${sortKey.value}`]
  })

  if (sortOrder.value === SORT_ORDERS.DESC) {
    return sortedData.reverse()
  }

  return sortedData
}

export function transformDataTable({
  data = [],
  headers = []
}: {
  data: {
    [key: string]: string | number | null | undefined
  }[]
  headers: {
    key: string
    label: string
  }[]
}) {
  if (headers.length === 0) return data
  const headerKeys = headers.map((header) => header.key)
  const dataKeys = Object.keys(data[0])
  const keepDisplayKeys = dataKeys.filter((key) => headerKeys.includes(key))
  const filteredData = data.map((item) => {
    const newItem: any = {}
    keepDisplayKeys.forEach((key) => {
      newItem[key] = item[key]
    })
    return newItem
  })
  if (headers.some((header) => header.key === CHECKBOX_KEY)) {
    return filteredData.map((item, index) => {
      return {
        key: CHECKBOX_KEY,
        recordIndex: index,
        ...item
      }
    })
  } else {
    return filteredData.map((item, index) => {
      return {
        ...item,
        [`${RECORD_INDEX_STRING}`]: index
      }
    })
  }
}
