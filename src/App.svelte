<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
</script>
<!--
  
  First lets create a simple box creator
  -- Add the properties of flex box, width, height, color, border, margin, padding.
  Second if a simple component is made, display it's properties on the side

--> 

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>
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

  <div class="card">
    <Counter />
  </div>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
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
  .read-the-docs {
    color: #888;

  #color-panel > div:hover {
    border: 4px solid black;
  }
</style>
