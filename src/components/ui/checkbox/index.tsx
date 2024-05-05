import type { PropFunction } from '@builder.io/qwik'
import { $, component$ } from '@builder.io/qwik'

interface CheckboxProps {
  checked?: boolean
  label?: string
  onToggle?: PropFunction<(checked: boolean) => void>
}

export const Checkbox = component$((props: CheckboxProps) => {
  const { checked = false, label, onToggle = $(() => {}) } = props

  const toggleCheckbox = $((e: any) => {
    e.preventDefault()
    onToggle(checked)
  })

  return (
    <label class='inline-flex items-center space-x-2 cursor-pointer'>
      <div class='relative flex items-center justify-center' onClick$={toggleCheckbox}>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M3 5.45455C3 4.09636 4.09882 3 5.45455 3H18.5455C19.9012 3 21 4.09636 21 5.45455V18.5455C21 19.9036 19.9012 21 18.5455 21H5.45455C4.09882 21 3 19.9036 3 18.5455V5.45455ZM5.45455 4.63636C5.00291 4.63636 4.63636 5.00455 4.63636 5.45455V18.5455C4.63636 18.9955 5.00291 19.3636 5.45455 19.3636H18.5455C18.9971 19.3636 19.3636 18.9955 19.3636 18.5455V5.45455C19.3636 5.00455 18.9971 4.63636 18.5455 4.63636H5.45455Z'
            fill='#D2D2D2'
          />
        </svg>
        {checked && (
          <div class='absolute inset-0 m-auto flex items-center justify-center w-[50%] h-[50%]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='lucide lucide-check h-4 w-4'
            >
              <path d='M20 6 9 17l-5-5'></path>
            </svg>
          </div>
        )}
      </div>
      {label && <span class='text-gray-700'>{props.label}</span>}
    </label>
  )
})
