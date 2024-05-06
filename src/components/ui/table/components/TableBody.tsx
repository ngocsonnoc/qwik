import type { PropFunction, Signal } from '@builder.io/qwik'
import { $, component$ } from '@builder.io/qwik'
import _ from 'lodash'

import { CHECKBOX_KEY, KEY_STRING, RECORD_INDEX_STRING } from '../constants'
import type { TableHeader } from '../interface'

import { Checkbox } from '~/components/ui/checkbox'
import { isImage } from '~/utils'

type CellProps = {
  [key: string]: string | number | null | undefined
} & {
  onAction?: PropFunction<(row: any) => void>
}

interface BodyProps {
  data: CellProps[]
  selectedItems: number[]
  header: TableHeader[]
  sortOrder: Signal<string>
  sortKey: Signal<string>
  onToggleSelect?: PropFunction<(row: any) => void>
}

export const TableBody = component$((props: BodyProps) => {
  const { data = [], selectedItems = [], header = [], onToggleSelect = $(() => { }) } = props

  return (
    <tbody>
      {_.cloneDeep(data).map((cell: CellProps) => {
        const keys = Object.keys(cell).filter((key) => key !== 'onAction')
        const keyString = Object.keys(cell).find(
          (key: string) => typeof cell[`${key}`] === 'string' || typeof cell[key] === 'number'
        )
        return (
          <tr key={`row-${keyString}-${new Date().getTime()}`}>
            {keys.map((key, i) => {
              if (key !== RECORD_INDEX_STRING) {
                const headerObject = header.find((h: TableHeader) => h.key === key)
                const commonCellClasses = 'p-[8px] gap-[4px] items-center text-white text-[12px] shadow-grey-down'
                const customCellClasses = headerObject?.cellClass || ''
                const cellClasses = `${commonCellClasses} ${customCellClasses}`
                if (headerObject?.renderCell) {
                  return (
                    <td key={i} class={cellClasses}>
                      {headerObject.renderCell(cell)}
                    </td>
                  )
                }

                if (isImage(cell[key])) {
                  const imgSrc = cell[key] as string
                  return (
                    <td key={i} class={cellClasses}>
                      <img width={50} height={50} src={imgSrc} />
                    </td>
                  )
                } else if (key === KEY_STRING && cell[key] === CHECKBOX_KEY) {
                  const recordIndex = Number(cell[`${RECORD_INDEX_STRING}`])
                  return (
                    <td key={recordIndex} class={cellClasses}>
                      <Checkbox
                        checked={selectedItems.includes(recordIndex)}
                        onToggle={$(() => onToggleSelect(Number(cell[`${RECORD_INDEX_STRING}`])))}
                      />
                    </td>
                  )
                } else {
                  return (
                    <td key={i} class={cellClasses}>
                      {cell[key]}
                    </td>
                  )
                }
              }
            })}
          </tr>
        )
      })}
    </tbody>
  )
})
