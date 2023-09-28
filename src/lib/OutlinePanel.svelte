<script lang="ts">
  import { outline_property } from "./stores";

  let outline_width = "";
  let outline_style = "";
  let outline_offset = "";

  $: outline_property.update(() => {
    return $outline_property
      .set("width", outline_width)
      .set("offset", outline_offset)
      .set("style", outline_style);
  });
</script>

<section id="outline-panel">
  <div id="outline-style-section" class="join mb-1">
    <label for="outline-style" class="label px-3 bg-base-200 join-item"
      >Outline Style</label
    >
    <select
      id="outline-style"
      bind:value={outline_style}
      class="select select-bordered join-item"
    >
      <option value="outline">Solid</option>
      <option value="outline-dashed">Dashed</option>
      <option value="outline-dotted">Dotted</option>
      <option value="outline-double">Double</option>
    </select>
  </div>

  <div id="outline-width-section" class="join mb-1">
    <label for="outline-width" class="label px-3 bg-base-200 join-item"
      >Outline Width</label
    >
    <select
      id="outline-width"
      bind:value={outline_width}
      class="select select-bordered join-item"
    >
      <option value="outline-0">0</option>
      <option value="outline-1">1</option>
      <option value="outline-2">2</option>
      <option value="outline-4">4</option>
      <option value="outline-8">8</option>
    </select>
  </div>
  <div id="outline-width-section" class="join mb-1">
    <label for="outline-width" class="label px-3 bg-base-200 join-item"
      >Outline Offset</label
    >
    <select
      id="outline-offset"
      bind:value={outline_offset}
      class="select select-bordered join-item"
    >
      <option value="outline-offset-0">0</option>
      <option value="outline-offset-1">1</option>
      <option value="outline-offset-2">2</option>
      <option value="outline-offset-4">4</option>
      <option value="outline-offset-8">8</option>
    </select>
  </div>
</section>
