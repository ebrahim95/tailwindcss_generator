<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";

  let color_value = "";
  let id_change = "bg";
  let bg_color: string = "";
  let border_color: string = "border-black";
  let border_width: string = "";
  let padding_value = 0;
  $: padding = "p-" + padding_value;

  let toggled = false;

  $: if (id_change === "bg") {
    bg_color = id_change + "-" + color_value;
  } else if (id_change === "border") {
    border_color = id_change + "-" + color_value;
  }

  function handle_color() {
    const id: string = document.querySelector(
      "#color-panel > button:focus"
    )?.id;
    color_value = id;
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
    <div id="bg-color-picker">
      <h2>Color Picker</h2>
      <div
        on:keypress={handle_color}
        on:click={handle_color}
        id="color-panel"
        class="grid grid-cols-5 gap-2"
      >
        <button
          id="slate-500"
          class="w-12 h-12 border-2 border-black bg-slate-500"
        />
        <button
          id="grey-500"
          class="w-12 h-12 border-2 border-black bg-grey-500"
        />
        <button
          id="zinc-500"
          class="w-12 h-12 border-2 border-black bg-zinc-500"
        />
        <button
          id="neutral-500"
          class="w-12 h-12 border-2 border-black bg-neutral-500"
        />
        <button
          id="stone-500"
          class="w-12 h-12 border-2 border-black bg-stone-500"
        />
        <button
          id="red-500"
          class="w-12 h-12 border-2 border-black bg-red-500"
        />
        <button
          id="orange-500"
          class="w-12 h-12 border-2 border-black bg-orange-500"
        />
        <button
          id="amber-500"
          class="w-12 h-12 border-2 border-black bg-amber-500"
        />
        <button
          id="yellow-500"
          class="w-12 h-12 border-2 border-black bg-yellow-500"
        />
        <button
          id="lime-500"
          class="w-12 h-12 border-2 border-black bg-lime-500"
        />
        <button
          id="green-500"
          class="w-12 h-12 border-2 border-black bg-green-500"
        />
        <button
          id="emerald-500"
          class="w-12 h-12 border-2 border-black bg-emerald-500"
        />
        <button
          id="teal-500"
          class="w-12 h-12 border-2 border-black bg-teal-500"
        />
        <button
          id="cyan-500"
          class="w-12 h-12 border-2 border-black bg-cyan-500"
        />
        <button
          id="sky-500"
          class="w-12 h-12 border-2 border-black bg-sky-500"
        />
        <button
          id="blue-500"
          class="w-12 h-12 border-2 border-black bg-blue-500"
        />
        <button
          id="indigo-500"
          class="w-12 h-12 border-2 border-black bg-indigo-500"
        />
        <button
          id="violet-500"
          class="w-12 h-12 border-2 border-black bg-violet-500"
        />
        <button
          id="purple-500"
          class="w-12 h-12 border-2 border-black bg-purple-500"
        />
        <button
          id="fuchsia-500"
          class="w-12 h-12 border-2 border-black bg-fuchsia-500"
        />
        <button
          id="pink-500"
          class="w-12 h-12 border-2 border-black bg-pink-500"
        />
        <button
          id="rose-500"
          class="w-12 h-12 border-2 border-black bg-rose-500"
        />
      </div>
    </div>
    <div id="border-control">
      <h2>Border</h2>
      <select bind:value={border_width} id="border-width">
        <option value="">0</option>
        <option value="border">1</option>
        <option value="border-2">2</option>
        <option value="border-4">4</option>
        <option value="border-8">8</option>
      </select>
      <label for="border-width">Border-Width</label>
      <br />

      <input id="border-radius" type="range" min="1" max="50" value="25" />
      <label for="border-radius">Border-Width</label>
      <br />
    </div>
    <div id="padding-control">
      <h2>Padding</h2>
      <input
        id="padding-top"
        type="range"
        min="0"
        max="10"
        bind:value={padding_value}
      />
      <label for="padding-top">Padding Top</label>
      <br />
      <input id="padding-bottom" type="range" min="0" max="50" />
      <label for="padding-bottom">Padding Bottom</label>
      <br />

      <input id="padding-left" type="range" min="0" max="50" />
      <label for="padding-left">Padding Left</label>
      <br />

      <input id="padding-right" type="range" min="0" max="50" />
      <label for="padding-right">Padding Right</label>
    </div>
  </section>
  {#key toggled}
    <div
      id="pendu"
      class={`w-[400px] h-[400px] ${padding} ${bg_color} ${border_width} ${border_color} `}
    >
      Hello
    </div>
  {/key}

  <button on:click={() => (toggled = !toggled)}> Rerender </button>
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

  #color-panel > button:hover {
    border: 4px solid black;
  }
</style>
