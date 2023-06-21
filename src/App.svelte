<script lang="ts">
  // import { getContext } from "svelte";
  // import svelteLogo from "./assets/svelte.svg";
  // import viteLogo from "/vite.svg";
  // import Counter from "./lib/Counter.svelte";
  import PaddingPanel from "./lib/PaddingPanel.svelte";
  import DrawingComponent from "./lib/DrawingComponent.svelte";
  import { padding, color, border_width } from "./lib/stores";
  import ColorPicker from "./lib/ColorPicker.svelte";
  import BorderPanel from "./lib/BorderPanel.svelte";

  let id_change = "bg";
  let bg_color: string = "";
  let border_color: string = "border-black";

  $: if (id_change === "bg") {
    bg_color = id_change + "-" + $color;
  } else if (id_change === "border") {
    border_color = id_change + "-" + $color;
  }
</script>

<!--
  
  First lets create a simple box creator
  -- Add the properties of flex box, width, height, color, border, margin, padding, font
  Second if a simple component is made, display it's properties on the side
//TODO: commone controls will be in one panel, expeceptions will added
-->
<main
  class="my-6 flex flex-row place-content-center justify-items-center items-center w-9/12 mx-auto gap-5"
>
  <section>
    <h1>Tailwind CSS Component Generator</h1>
    <select bind:value={id_change} id="edit-component">
      <option value="bg">Background</option>
      <option value="border">Border</option>
    </select>

    <ColorPicker />

    <BorderPanel />

    <PaddingPanel />
  </section>
  <DrawingComponent
    padding={$padding}
    {bg_color}
    border_width={$border_width}
    {border_color}
  />

  <!--   <div class="card">border-black
    <Counter />
  </div> -->
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
