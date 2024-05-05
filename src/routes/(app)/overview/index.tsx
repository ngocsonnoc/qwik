import { $, component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import data from './data.json'

import { CardContent } from '~/components/card-content'
import { Table } from '~/components/ui/table'
import type { TableHeader } from '~/components/ui/table/interface'
import { formatCurrency, parsePercentage } from '~/utils'

export default component$(() => {
  const headers: TableHeader[] = [
    {
      key: 'totalPrice',
      label: 'TỔNG TIỀN',
      sortAble: true,
      renderCell: $((row: any) => {
        return formatCurrency(row.totalPrice)
      })
    },
    {
      key: 'purchasedValue',
      label: 'GIÁ TRỊ CK ĐÃ MUA',
      renderCell: $((row: any) => {
        return formatCurrency(row.purchasedValue)
      })
    },
    {
      key: 'totalDeposits',
      label: 'TỔNG TIỀN PHẢI CỌC',
      renderCell: $((row: any) => {
        return formatCurrency(row.totalDeposits)
      })
    },
    {
      key: 'presentValue',
      label: 'GIÁ TRỊ CK HIỆN TẠI',
      renderCell: $((row: any) => {
        return formatCurrency(row.presentValue)
      })
    },
    {
      key: 'realizedProfitAndLoss',
      label: 'LÃI LỖ THỰC HIỆN',
      renderCell: $((row: any) => {
        const isLoss = row.realizedProfitAndLoss < 0
        const className = isLoss ? 'text-red-primary' : 'text-green-primary'
        return <span class={className}>{formatCurrency(row.realizedProfitAndLoss)}</span>
      })
    },
    {
      key: 'unrealizedProfitAndLoss',
      label: 'LÃI LỖ CHƯA THỰC HIỆN',
      renderCell: $((row: any) => {
        const isLoss = row.unrealizedProfitAndLoss < 0
        const className = isLoss ? 'text-red-primary' : 'text-green-primary'
        return <span class={className}>{formatCurrency(row.unrealizedProfitAndLoss)}</span>
      })
    },
    {
      key: 'provisionalNetAssetValue',
      label: 'TS RÒNG TẠM TÍNH',
      renderCell: $((row: any) => {
        const isLoss = row.provisionalNetAssetValue < 0
        const className = isLoss ? 'text-red-primary' : 'text-green-primary'
        return <span class={className}>{formatCurrency(row.provisionalNetAssetValue)}</span>
      })
    },
    {
      key: 'currentDepositRate',
      label: 'TỈ LỆ CỌC HIỆN TẠI',
      renderCell: $((row: any) => {
        return parsePercentage(row.currentDepositRate)
      })
    },
    {
      key: 'cashCanBeWithdrawn',
      label: 'TIỀN MẶT CÓ THỂ RÚT',
      renderCell: $((row: any) => {
        return formatCurrency(row.cashCanBeWithdrawn)
      })
    },
    {
      key: 'maximumPurchasingPower',
      label: 'SỨC MUA TỐI ĐA',
      renderCell: $((row: any) => {
        return formatCurrency(row.maximumPurchasingPower)
      })
    },
    {
      key: 'minimumPurchasingPower',
      label: 'SỨC MUA TỐI THIỂU',
      renderCell: $((row: any) => {
        return formatCurrency(row.minimumPurchasingPower)
      })
    }
  ]

  return (
    <>
      <CardContent title='Tổng quan tài sản'>
        <Table header={headers} data={data} slotName='content' />
      </CardContent>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Tổng quan'
}
