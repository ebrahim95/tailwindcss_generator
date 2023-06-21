<script lang="ts">
  import { border_width } from "./stores";

  let width = "";
</script>

<div id="border-control">
  <h2>Border</h2>
  <select
    bind:value={width}
    on:change={() => {
      border_width.update(() => width);
    }}
    id="border-width"
  >
    <option value="">0</option>
    <option value="border">1</option>
    <option value="border-2">2</option>
    <option value="border-4">4</option>
    <option value="border-8">8</option>
  </select>
  <label for="border-width">Border-Width</label>
  <br />

  <input id="border-radius" type="range" min="1" max="50" value="25" />
  <label for="border-radius">Border-Radius</label>
  <br />
</div>
