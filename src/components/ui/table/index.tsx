import type { PropFunction } from '@builder.io/qwik'
import { $, component$, useSignal, useStore, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik'
import _ from 'lodash'

import { Pagination } from './components/Pagination'
import { TableBody } from './components/TableBody'
import { TableHead } from './components/TableHead'
import { RECORD_INDEX_STRING } from './constants'
import type { TableHeader } from './interface'
import { sortData, transformDataTable } from './utils'

interface TableProps {
  header: TableHeader[]
  data: {
    [key: string]: string | number | null | undefined
  }[]
  slotName?: string
  selectedItems?: number[]
  setSelectedItems?: PropFunction<(selectedItems: number[]) => void>
  showPagination?: boolean
}

export const Table = component$((props: TableProps) => {
  const { header, data, slotName, selectedItems, showPagination = false, setSelectedItems = $(() => { }) } = props
  useStylesScoped$(scopeStyles)

  const sortOrder = useSignal<string>('')
  const sortKey = useSignal<string>('')
  const pageNo = useSignal<number>(0)
  const postPerPage = useSignal<number>(10)
  const totalPosts = useSignal<number>(data.length)
  const searchBy = useSignal<string>(header[0].key)
  const searchInp = useSignal<string>('')
  const prevSearch = useSignal<boolean>(false)
  const selectRecordState = useStore({
    selectedItems: selectedItems ?? [],
    isSelectAll: false
  })

  const finalData = useStore({
    items: transformDataTable({
      data: data,
      headers: header
    })
  })

  const toggleSelectItem = $((index: number) => {
    if (selectRecordState.selectedItems.includes(index)) {
      selectRecordState.selectedItems = selectRecordState.selectedItems.filter((item) => item !== index)
    } else {
      selectRecordState.selectedItems.push(index)
    }
    if (selectRecordState.selectedItems.length === finalData.items.length) {
      selectRecordState.isSelectAll = true
    }

    setSelectedItemsToParent()
  })

  const setSelectedItemsToParent = $(() => {
    const selectedRecords = finalData.items.filter((item) =>
      selectRecordState.selectedItems.includes(item[RECORD_INDEX_STRING])
    )
    setSelectedItems(selectedRecords)
  })

  const toggleSelectAll = $(() => {
    if (selectRecordState.isSelectAll) {
      selectRecordState.selectedItems = []
    } else {
      const recordsIndex = finalData.items.map((item) => item[RECORD_INDEX_STRING])
      selectRecordState.selectedItems = recordsIndex
    }
    selectRecordState.isSelectAll = !selectRecordState.isSelectAll
    setSelectedItemsToParent()
  })

  const sortedData = $(() =>
    sortData({
      tableData: finalData.items,
      sortKey: sortKey,
      sortOrder: sortOrder
    })
  )

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => sortOrder.value)
    track(() => sortKey.value)
    track(() => pageNo.value)
    track(() => postPerPage.value)
    track(() => searchBy.value)
    track(() => searchInp.value)
    track(() => postPerPage.value)
    track(() => totalPosts.value)
    track(() => prevSearch.value)

    sortedData().then((res) => {
      finalData.items = _.cloneDeep(Array.from([...res]))
    })
  })

  return (
    <div class='w-full h-full overflow-y-auto' q:slot={slotName}>
      <table class='w-full table table-striped'>
        <TableHead
          header={header}
          sortOrder={sortOrder}
          sortKey={sortKey}
          selectRecordState={selectRecordState}
          toggleSelectAll={toggleSelectAll}
        />
        <TableBody
          data={finalData.items}
          onToggleSelect={toggleSelectItem}
          selectedItems={selectRecordState.selectedItems}
          header={header}
          sortOrder={sortOrder}
          sortKey={sortKey}
        />
      </table>
      {showPagination && <Pagination pageNo={pageNo} postPerPage={postPerPage} totalPosts={totalPosts} />}
    </div>
  )
})

const scopeStyles = `
.table-striped {
  tr {
    background-color: var(--table-row-secondary);
  }
  tr:nth-child(even) {
    background-color: var(--table-row-primary);
  }
  tr:hover {
    background-color: var(--background-5);
  }
}
`
