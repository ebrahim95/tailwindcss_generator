<script lang="ts">
  let which_key_panel_toggle: boolean = true;
</script>

<div
  class={`grid grid-cols-4 gap-2 p-2 border-2 border-black bg-blue-50 ${
    which_key_panel_toggle ? "hidden" : "absolute"
  } self-center justify-self-end`}
>
  <span>b => Border</span>
  <span>c => Colors</span>
  <span>e => Effects</span>
  <span>f => Filters</span>
  <span>o => Outline</span>
  <span>p => Padding</span>
  <span>r => Ring</span>
  <span>x => Close Panel</span>
</div>

<svelte:window
  on:keypress|preventDefault={(e) => {
    switch (e.code) {
      case "Space":
        which_key_panel_toggle = !which_key_panel_toggle;
        break;
    }
  }}
/>
