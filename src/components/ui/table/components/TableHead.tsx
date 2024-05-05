import type { PropFunction, Signal } from '@builder.io/qwik'
import { $, component$ } from '@builder.io/qwik'

import { CHECKBOX_KEY } from '../constants'
import type { TableHeader } from '../interface'

import { SortButton } from './SortButton'

import { Checkbox } from '~/components/ui/checkbox'

interface HeaderProps {
  header: TableHeader[]
  sortOrder: Signal<string>
  sortKey: Signal<string>
  selectRecordState: {
    selectedItems: number[]
    isSelectAll: boolean
  }
  toggleSelectAll?: PropFunction<() => void>
}

export const TableHead = component$((props: HeaderProps) => {
  const {
    header = [],
    sortOrder,
    sortKey,
    selectRecordState = {
      selectedItems: [],
      isSelectAll: false
    },
    toggleSelectAll = $(() => {})
  } = props

  return (
    <thead>
      <tr>
        {header.map((cell: TableHeader, i: number) => {
          if (cell.render) return <td key={i}>{cell.render(cell)}</td>
          const commonClasses =
            'h-[28px] bg-dark-main px-[12px] uppercase text-[10px] text-grey-primary border-b shadow-table whitespace-nowrap'
          let alignClasses = ''
          switch (cell.align) {
            case 'left':
              alignClasses = 'text-left'
              break
            case 'right':
              alignClasses = 'text-right'
              break
            case 'center':
              alignClasses = 'text-center'
              break
            default:
              alignClasses = 'text-left'
              break
          }
          const defaultWidth = ``
          const customClasses = cell.class || ''

          const className = `${commonClasses} ${alignClasses} ${defaultWidth} ${customClasses}`
          return cell.key !== CHECKBOX_KEY ? (
            <td key={i} class={className}>
              <span class='flex gap-[4px] text-white'>
                {cell.label}
                {cell.sortAble && <SortButton cellKey={cell.key} sortOrder={sortOrder} sortKey={sortKey} />}
              </span>
            </td>
          ) : (
            <td key={i} class={`${className} px-[8px]`}>
              <Checkbox checked={selectRecordState.isSelectAll} onToggle={toggleSelectAll} />
            </td>
          )
        })}
      </tr>
    </thead>
  )
})
