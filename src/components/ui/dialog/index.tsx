// src/components/Dialog.tsx
import type { PropFunction, QwikIntrinsicElements } from '@builder.io/qwik'
import { $, component$, Slot, useOnDocument, useSignal, useStore } from '@builder.io/qwik'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import Close from '~/components/icons/Close'
import { cn } from '~/utils'

type DialogProps = QwikIntrinsicElements['div'] &
  VariantProps<typeof dialogContentVariants> & {
    open: boolean
    onOpenChange?: PropFunction<(open: boolean) => void>
    title?: JSX.Element | string | (() => JSX.Element | string)
    titleClass?: string
    overlayClass?: string
    bodyClass?: string
    footer?: JSX.Element | string | (() => JSX.Element | string)
    closeWhenClickOutside?: boolean
    onEscapeKeyDown?: PropFunction<() => void>
    onPointerDownOutside?: PropFunction<(event: any) => void>
  }

const dialogContentVariants = cva(
  'flex flex-col items-start rounded-[8px] border border-border-grey-primary bg-dark-main shadow-grey-down',
  {
    variants: {
      size: {
        default: 'w-[900px] max-w-[900px] h-[600px] max-h-[600px] overflow-x-hidden overflow-y-auto',
        sm: '',
        md: '',
        lg: ''
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

const dialogBodyVariants = cva('w-full flex flex-col overflow-x-hidden overflow-y-auto custom-scrollbar', {
  variants: {
    size: {
      default: 'w-full h-[calc(100%-40px)] overflow-x-hidden overflow-y-auto',
      sm: '',
      md: '',
      lg: ''
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

const Dialog = component$((props: DialogProps) => {
  const { open, size, title, closeWhenClickOutside = true, onOpenChange = $(() => {}), ...rest } = props
  const store = useStore({
    isOpen: Boolean(open),
    dialogClass: ''
  })
  const contentRef = useSignal<HTMLElement | undefined>()

  useOnDocument(
    'click',
    $((event) => {
      if (closeWhenClickOutside) {
        if (contentRef.value && !contentRef.value.contains(event.target as Node)) {
          onOpenChange(false)
        }
      }
    })
  )

  if (!open) {
    return null
  }
  return (
    <div class={cn('fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4', props.overlayClass)}>
      <div ref={contentRef} class={cn(dialogContentVariants({ size }), rest.class, store.dialogClass)}>
        <div class='flex items-center justify-center px-[8px] relative w-full h-[40px] shadow-grey-down'>
          {title && <div class={cn('text-[15px] font-bold text-grey-0', props.titleClass)}>{title}</div>}
          <div class='cursor-pointer absolute right-[8px] w-fit m-auto' onClick$={$(() => onOpenChange(false))}>
            <Close />
          </div>
        </div>
        <div class={cn(dialogBodyVariants({ size }), rest.bodyClass)}>
          <Slot />
        </div>
        <div>
          <Slot name='footer' />
        </div>
      </div>
    </div>
  )
})

export default Dialog
export { dialogContentVariants }
