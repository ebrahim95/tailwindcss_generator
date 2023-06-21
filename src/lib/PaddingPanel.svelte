<script lang="ts">
  import { padding } from "./stores";
  let padding_value = 0;
  $: padding_tailwind = "p-" + padding_value.toString();
</script>

<div id="padding-control">
  <h2>Padding</h2>
  <input
    id="padding"
    type="range"
    min="0"
    max="10"
    bind:value={padding_value}
    on:input={() => {
      padding.update(() => padding_tailwind);
    }}
  />
  <label for="padding">Padding</label>
  <br />

  <div class="grid grid-cols-2 border-black border-4">
    <button>TOP</button>
    <button>BOTTOM</button>
    <button>LEFT</button>
    <button>RIGHT</button>
  </div>
</div>
