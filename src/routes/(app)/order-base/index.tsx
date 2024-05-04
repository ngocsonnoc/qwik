import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class='container container-center'>
      <h1>Đặt lệnh cơ sở</h1>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Đặt lệnh cơ sở'
}
