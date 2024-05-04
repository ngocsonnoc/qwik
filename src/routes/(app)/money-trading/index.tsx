import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class='container container-center'>
      <h1>Giao dịch tiền</h1>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Giao dịch tiền'
}
