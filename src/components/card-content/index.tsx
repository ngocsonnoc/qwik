import { component$, Slot } from '@builder.io/qwik'

type CardContentLayout = 'vertical' | 'horizontal'

interface CardContentProps {
  title?: string
  layout?: CardContentLayout
}

export const CardContent = component$((props: CardContentProps) => {
  const { title = '', layout = 'vertical' } = props
  const baseClasses = 'rounded-[8px] border border-border-grey-primary bg-dark-main shadow-table w-full'
  const verticalClasses = 'flex flex-col'
  const horizontalClasses = 'flex'
  const classNames = `${baseClasses} ${layout === 'vertical' ? verticalClasses : horizontalClasses}`
  return (
    <div class={classNames}>
      {title !== '' ? (
        <div class='h-[36px] flex items-center w-full border-b-[1px] border-b-border-grey-primary px-[12px] py-[8px]'>
          <span class='font-bold text-grey-primary'>{title}</span>
        </div>
      ) : (
        <Slot name='title' />
      )}
      <div class='w-full flex flex-col'>
        <Slot />
      </div>
    </div>
  )
})
