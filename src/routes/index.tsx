import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <>
      <Slot />
    </>
  );
});

export const head: DocumentHead = {
  title: "Sổ lệnh",
  meta: [
    {
      name: "description",
      content: "Sổ lệnh",
    },
  ],
};
