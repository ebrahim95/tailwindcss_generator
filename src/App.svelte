<script lang="ts">
  // import svelteLogo from "./assets/svelte.svg";
  // import viteLogo from "/vite.svg";
  import AddHtmlComponent from "./lib/AddHtmlComponent.svelte";
  import BorderPanel from "./lib/BorderPanel.svelte";
  import ColorPicker from "./lib/ColorPicker.svelte";
  import DrawingComponent from "./lib/DrawingComponent.svelte";
  import EffectsPanel from "./lib/EffectsPanel.svelte";
  import FilterPanel from "./lib/FilterPanel.svelte";
  import OutlinePanel from "./lib/OutlinePanel.svelte";
  import PaddingPanel from "./lib/PaddingPanel.svelte";
  import RingPanel from "./lib/RingPanel.svelte";

  let show_code: boolean = true;
  let panel_toggle: string = "border";

  function value_panel_toggle(panel: string) {
    panel_toggle = panel;
  }

  function value_panel_keydown(e: KeyboardEvent, s: string) {
    e.preventDefault();
    panel_toggle = s;
  }

  //NOTE Add autocompletion to the select files
  //NOTE Maybe add skeleton ui for easy shipping
  //NOTE Regex for decimals
  //NOTE Where I need to edit and how will it be achieved
  //NOTE So I need abstract the left right top and bottom
  //NOTE abstract border and padding
  //NOTE Changed the selection to a Keyboard shortcuts, change values through keyboard
</script>

<!--

  Add the properties of flex box, width, height, color, font
  Second if a simple component is made, display it's properties on the side
-->
<main class="flex flex-col w-12/12">
  <section
    class="w-12/12 flex flex-row justify-start items-start border-4 border-primary p-4 m-2 rounded-md gap-2"
  >
    <button on:click={() => (show_code = !show_code)} class="btn"
      >Show {show_code ? "Code" : "Picture"}
    </button>

    <ColorPicker />

    <div class="mt-1 mb-2 mx-1 grid grid-cols-3 grid-rows-2 gap-2">
      <button
        on:click={() => (panel_toggle = "border")}
        class="mb-2 mx-1 p-1 border-black border-double border-4 rounded-md ring ring-offset-4"
      >
        Border
      </button>
      <button
        on:click={() => (panel_toggle = "padding")}
        class="mb-2 mx-1 p-1 border-black border-double border-4 rounded-md ring ring-offset-4"
      >
        Padding
      </button>
      <button
        on:click={() => (panel_toggle = "ring")}
        class="mb-2 mx-1 p-1 border-black border-double border-4 rounded-md ring ring-offset-4"
      >
        Ring
      </button>
      <button
        on:click={() => (panel_toggle = "outline")}
        class="mb-2 mx-1 p-1 border-black border-double border-4 rounded-md ring ring-offset-4"
      >
        Outline
      </button>
      <button
        on:click={() => (panel_toggle = "effects")}
        class="mb-2 mx-1 p-1 border-black border-double border-4 rounded-md ring ring-offset-4"
      >
        Effects
      </button>
      <button
        on:click={() => (panel_toggle = "filter")}
        class="mb-2 mx-1 p-1 border-black border-double border-4 rounded-md ring ring-offset-4"
      >
        Filter
      </button>
    </div>

    <div class={`${panel_toggle === "border" ? "" : "hidden"}`}>
      <BorderPanel />
    </div>
    <div class={`${panel_toggle === "effects" ? "" : "hidden"}`}>
      <EffectsPanel />
    </div>
    <div class={`${panel_toggle === "filter" ? "" : "hidden"}`}>
      <FilterPanel />
    </div>
    <div class={`${panel_toggle === "outline" ? "" : "hidden"}`}>
      <OutlinePanel />
    </div>
    <div class={`${panel_toggle === "padding" ? "" : "hidden"}`}>
      <PaddingPanel />
    </div>
    <div class={`${panel_toggle === "ring" ? "" : "hidden"}`}>
      <RingPanel />
    </div>
    <div class="border-4 border-base-200 p-2 justify-self-end">
      <h1>Tailwind CSS Style Generator</h1>
    </div>
  </section>

  <DrawingComponent {show_code} />
</main>

<svelte:window
  on:keypress|preventDefault={(e) => {
    switch (e.key) {
      case "b":
        panel_toggle = "border";
        break;
      case "e":
        panel_toggle = "effects";
        break;
      case "f":
        panel_toggle = "filter";
        break;
      case "o":
        panel_toggle = "outline";
        break;
      case "p":
        panel_toggle = "padding";
        break;
      case "r":
        panel_toggle = "ring";
        break;
    }
  }}
/>
<!-- <style>
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
     </style> -->
