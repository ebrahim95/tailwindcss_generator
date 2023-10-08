<script lang="ts">
  let which_key_panel_toggle: boolean = true;
</script>

<div
  class={`grid grid-cols-4 gap-2 p-2 border-2 border-black bg-blue-50 ${
    which_key_panel_toggle ? "hidden" : "absolute"
  } self-center justify-self-end`}
>
  <span>B => Border</span>
  <span>C => Colors</span>
  <span>E => Effects</span>
  <span>F => Filters</span>
  <span>O => Outline</span>
  <span>P => Padding</span>
  <span>R => Ring</span>
  <span>X => Close Panel</span>
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
