import type { QwikIntrinsicElements } from '@builder.io/qwik'

const Close = (props: QwikIntrinsicElements['svg']) => {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.56451 6.1503C7.28064 5.86643 6.73347 5.95282 6.34315 6.34315C5.95283 6.73347 5.86643 7.28064 6.1503 7.56451L10.5858 12L6.1503 16.4355C5.86643 16.7194 5.95283 17.2665 6.34315 17.6569C6.73347 18.0472 7.28064 18.1336 7.56451 17.8497L12 13.4142L16.4355 17.8497C16.7194 18.1336 17.2665 18.0472 17.6569 17.6569C18.0472 17.2665 18.1336 16.7194 17.8497 16.4355L13.4142 12L17.8497 7.56451C18.1336 7.28064 18.0472 6.73347 17.6569 6.34315C17.2665 5.95282 16.7194 5.86643 16.4355 6.1503L12 10.5858L7.56451 6.1503Z'
        fill='#D2D2D2'
      />
    </svg>
  )
}

export default Close
