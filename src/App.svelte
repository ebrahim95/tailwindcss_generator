<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";

  let control_values = "";
</script>

<!--
  
  First lets create a simple box creator
  -- Add the properties of flex box, width, height, color, border, margin, padding, font
  Second if a simple component is made, display it's properties on the side

-->
<main
  class="my-6 flex flex-row place-content-center justify-items-center items-center w-9/12 mx-auto gap-5"
>
  <section>
    <h1>Tailwind CSS Component Generator</h1>

    <div id="color-picker">
      <h2>Color Picker</h2>
      <div id="color-panel" class="grid grid-cols-5 gap-2">
        <div
          id="bg-slate-500"
          class="h-12 border-2 border-black bg-slate-500"
        />
        <div
          id="bg-grey-500"
          class="w-12 h-12 border-2 border-black bg-grey-500"
        />
        <div
          id="bg-zinc-500"
          class="w-12 h-12 border-2 border-black bg-zinc-500"
        />
        <div
          id="bg-neutral-500"
          class="w-12 h-12 border-2 border-black bg-neutral-500"
        />
        <div
          id="bg-stone-500"
          class="w-12 h-12 border-2 border-black bg-stone-500"
        />
        <div
          id="bg-red-500"
          class="w-12 h-12 border-2 border-black bg-red-500"
        />
        <div
          id="bg-orange-500"
          class="w-12 h-12 border-2 border-black bg-orange-500"
        />
        <div
          id="bg-amber-500"
          class="w-12 h-12 border-2 border-black bg-amber-500"
        />
        <div
          id="bg-yellow-500"
          class="w-12 h-12 border-2 border-black bg-yellow-500"
        />
        <div
          id="bg-lime-500"
          class="w-12 h-12 border-2 border-black bg-lime-500"
        />
        <div
          id="bg-green-500"
          class="w-12 h-12 border-2 border-black bg-green-500"
        />
        <div
          id="bg-emerald-500"
          class="w-12 h-12 border-2 border-black bg-emerald-500"
        />
        <div
          id="bg-teal-500"
          class="w-12 h-12 border-2 border-black bg-teal-500"
        />
        <div
          id="bg-cyan-500"
          class="w-12 h-12 border-2 border-black bg-cyan-500"
        />
        <div
          id="bg-sky-500"
          class="w-12 h-12 border-2 border-black bg-sky-500"
        />
        <div
          id="bg-blue-500"
          class="w-12 h-12 border-2 border-black bg-blue-500"
        />
        <div
          id="bg-indigo-500"
          class="w-12 h-12 border-2 border-black bg-indigo-500"
        />
        <div
          id="bg-violet-500"
          class="w-12 h-12 border-2 border-black bg-violet-500"
        />
        <div
          id="bg-purple-500"
          class="w-12 h-12 border-2 border-black bg-purple-500"
        />
        <div
          id="bg-fuchsia-500"
          class="w-12 h-12 border-2 border-black bg-fuchsia-500"
        />
        <div
          id="bg-pink-500"
          class="w-12 h-12 border-2 border-black bg-pink-500"
        />
        <div
          id="bg-rose-500"
          class="w-12 h-12 border-2 border-black bg-rose-500"
        />
      </div>
    </div>
    <div id="border-control">
      <h2>Border</h2>
      <input id="border-width" type="range" min="1" max="50" value="25" />
      <label for="border-width">Border-Width</label>
      <br />

      <input id="border-radius" type="range" min="1" max="50" value="25" />
      <label for="border-radius">Border-Width</label>
      <br />
    </div>
    <div id="padding-control">
      <h2>Padding</h2>
      <input id="padding-top" type="range" min="1" max="50" />
      <label for="padding-top">Padding Top</label>
      <br />
      <input id="padding-bottom" type="range" min="1" max="50" />
      <label for="padding-bottom">Padding Bottom</label>
      <br />

      <input id="padding-left" type="range" min="1" max="50" />
      <label for="padding-left">Padding Left</label>
      <br />

      <input id="padding-right" type="range" min="1" max="50" />
      <label for="padding-right">Padding Right</label>
    </div>
  </section>

  <div class="w-[400px] h-[400px] border-black border-2">
    <div class={control_values} />
  </div>

  <!--   <div class="card">
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

  #color-panel > div:hover {
    border: 4px solid black;
  }
</style>
