import { component$, Slot } from '@builder.io/qwik'

import './button.css' // Assuming you import Tailwind CSS directly or indirectly here

interface ButtonProps {
  variant?: 'yellow-primary' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'lg' | 'icon'
  asChild?: boolean
  disabled?: boolean
}

export const Button = component$((props: ButtonProps) => {
  const { variant = 'default', size = 'sm', disabled = false, ...rest } = props

  // Build class names based on props
  const baseClasses =
    'inline-flex items-center justify-center rounded-[4px] py-[2px] px-[8px] gap-[4px] whitespace-nowrap text-center cursor-pointer disabled:pointer-events-none disabled:opacity-50 transition-colors'
  let variantClasses = ''

  switch (variant) {
    case 'yellow-primary':
      variantClasses = 'bg-yellow-primary text-blue-primary'
      break
    case 'outline':
      variantClasses = 'border border-gray-300 text-gray-700 hover:bg-gray-50'
      break
    case 'secondary':
      variantClasses = 'bg-gray-500 hover:bg-gray-700 text-white'
      break
    case 'ghost':
      variantClasses = 'bg-transparent hover:bg-gray-100 text-gray-700'
      break
    case 'link':
      variantClasses = 'underline text-primary-500 hover:text-primary-600'
      break
    default:
      variantClasses = 'bg-blue-500 hover:bg-blue-700 text-white'
  }

  let sizeClasses = ''
  switch (size) {
    case 'lg':
      sizeClasses = 'px-8 py-3 text-base'
      break
    case 'icon':
      sizeClasses = 'p-3 text-xl'
      break
    default:
      sizeClasses = 'text-[15px] font-[400]'
  }

  const classNames = `${baseClasses} ${variantClasses} ${sizeClasses}`

  return (
    <button {...rest} class={classNames} disabled={disabled}>
      <Slot />
    </button>
  )
})

export default Button
