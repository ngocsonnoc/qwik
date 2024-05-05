import type { Signal } from '@builder.io/qwik'
import { $, component$, useOn } from '@builder.io/qwik'

import { SORT_ORDERS } from '../constants'

interface TypeProps {
  cellKey: string | number | null | undefined
  sortOrder: Signal<string>
  sortKey: Signal<string | number | null | undefined>
}

export const SortButton = component$((props: TypeProps) => {
  const { cellKey, sortOrder, sortKey } = props

  useOn(
    'click',
    $(() => {
      switch (sortOrder.value) {
        case SORT_ORDERS.ASC:
          sortOrder.value = SORT_ORDERS.DESC
          sortKey.value = cellKey
          return
        case SORT_ORDERS.DESC:
          sortOrder.value = SORT_ORDERS.ASC
          sortKey.value = cellKey
          return
        default:
          sortOrder.value = SORT_ORDERS.ASC
          sortKey.value = cellKey
          return
      }
    })
  )
  const color = sortKey.value === cellKey ? 'var(--white)' : '#4B4B4B'
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      class='lucide lucide-arrow-up-down ml-2 h-4 w-4 cursor-pointer'
    >
      <path d='m21 16-4 4-4-4'></path>
      <path d='M17 20V4'></path>
      <path d='m3 8 4-4 4 4'></path>
      <path d='M7 4v16'></path>
    </svg>
  )
})
