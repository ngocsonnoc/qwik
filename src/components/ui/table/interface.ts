export type Align = 'left' | 'right' | 'center'

export interface TableHeader {
  key: string
  label: string
  align?: Align
  sortAble?: boolean
  class?: string
  cellClass?: string
  render?: (data: any) => any
  renderCell?: (data: any) => any
}
