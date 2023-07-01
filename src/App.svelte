<script lang="ts">
  // import svelteLogo from "./assets/svelte.svg";
  // import viteLogo from "/vite.svg";
  import { padding, color, border_width, border_radius } from "./lib/stores";
  import PaddingPanel from "./lib/PaddingPanel.svelte";
  import DrawingComponent from "./lib/DrawingComponent.svelte";
  import ColorPicker from "./lib/ColorPicker.svelte";
  import BorderPanel from "./lib/BorderPanel.svelte";
  import SideButtons from "./lib/SideButtons.svelte";
  let show_code: boolean = true;
  let id_change = "bg";
  let bg_color: string = "";
  let border_color: string = "border-black";

  $: if (id_change === "bg") {
    bg_color = id_change + "-" + $color;
  } else if (id_change === "border") {
    border_color = id_change + "-" + $color;
  }

  //NOTE Add autocompletion to the select files
  //NOTE Maybe add skeleton ui for easy shipping
  //NOTE Regex for decimals
  //TODO figure out the border radius
  //NOTE Where I need to edit and how will it be achieved
  //NOTE So I need abstract the left right top and bottom
</script>

<!--

  Add the properties of flex box, width, height, color, border, margin, padding, font
  Second if a simple component is made, display it's properties on the side
-->
<main class="flex flex-row w-12/12">
  <section class="w-3/12 flex flex-col items-start border-black border-r-4 p-4">
    <h1>Tailwind CSS Component Generator</h1>
    <button on:click={() => (show_code = !show_code)} class="btn"
      >Show Code</button
    >

    <SideButtons />
    <ColorPicker />
    <select
      bind:value={id_change}
      id="edit-component"
      class="select select-bordered"
    >
      <option value="bg">Background</option>
      <option value="border">Border</option>
    </select>
    <BorderPanel />
    <PaddingPanel />
  </section>
  <DrawingComponent
    padding={$padding}
    {bg_color}
    border_width={$border_width}
    {border_color}
    {show_code}
    border_radius={$border_radius}
  />
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
