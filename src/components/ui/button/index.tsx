import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { component$, Slot } from '@builder.io/qwik'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import './button.css' // Assuming you import Tailwind CSS directly or indirectly here

import { cn } from '~/utils'

type ButtonProps = QwikIntrinsicElements['button'] & VariantProps<typeof buttonVariants>

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[4px] py-[2px] px-[8px] gap-[4px] whitespace-nowrap text-center cursor-pointer disabled:pointer-events-none disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        'yellow-primary': 'bg-yellow-primary text-blue-primary shadow hover:bg-yellow-primary/90'
      },
      size: {
        default: 'text-[15px] font-[400]',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export { buttonVariants }

export const Button = component$((props: ButtonProps) => {
  const { variant = 'default', size = 'default', disabled = false, ...rest } = props

  return (
    <button {...rest} class={cn(buttonVariants({ variant, size }), rest.class)} disabled={disabled} {...rest}>
      <Slot />
    </button>
  )
})

export default Button
