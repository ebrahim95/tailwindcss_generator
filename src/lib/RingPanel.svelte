<script lang="ts">
  import { ring_property } from "./stores";
  let ring_value = "";
  let ring_offset = "";

  $: ring_property.update(() => {
    return $ring_property.set("width", ring_value);
  });
</script>

<div
  class="absolute top-2 right-2 border-4 border-black rounded-lg p-4 bg-amber-50"
>
  <section id="ring-width-panel" class="join mb-1">
    <label
      class="label border-2 border-black px-3 bg-amber-50 join-item"
      for="ring-width"
      >Width
    </label>
    <select
      id="ring-width"
      class="select select-bordered bg-amber-50 join-item"
      bind:value={ring_value}
      on:change={() =>
        ring_property.update(() => $ring_property.set("width", ring_value))}
    >
      <option value="ring-0">Ring 0</option>
      <option value="ring-1">Ring 1</option>
      <option value="ring-2">Ring 2</option>
      <option value="ring">Ring</option>
      <option value="ring-4">Ring 4</option>
      <option value="ring-8">Ring 8</option>
    </select>
  </section>
  <section id="ring-offset-panel" class="join mb-1">
    <label
      class="label border-2 border-black px-3 bg-amber-50 join-item"
      for="ring-offset"
      >Offset
    </label>
    <select
      id="ring-offset"
      class="select select-bordered bg-amber-50 join-item"
      bind:value={ring_offset}
      on:change={() =>
        ring_property.update(() => $ring_property.set("offset", ring_offset))}
    >
      <option value="ring-offset-0">Offset 0</option>
      <option value="ring-offset-1">Offset 1</option>
      <option value="ring-offset-2">Offset 2</option>
      <option value="ring-offset-4">Offset 4</option>
      <option value="ring-offset-8">Offset 8</option>
    </select>
  </section>
</div>
