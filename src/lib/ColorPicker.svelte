<script lang="ts">
  import { color } from "./stores";

  function handle_color() {
    const id: string = document.querySelector(
      "#color-panel > button:focus"
    )?.id;

    color.update(() => id_change + "-" + id);
  }
  let id_change = "bg";
  let color_shade = "500";
  //TODO add Aria role
  //TODO need to seperate color panel
  //TODO you need change the state, might also have to add some positioning.
</script>

<div id="color-picker" class="mb-3">
  <div id="color-component-selector" class="mb-2">
    <label class="label" for="edit-component">Color Picker</label>

    <select
      bind:value={id_change}
      id="edit-component"
      class="select select-bordered"
    >
      <option value="bg">Background</option>
      <option value="border">Border</option>
      <option value="ring">Ring</option>
      <option value="outline">Outline</option>
      <option value="shadow">Shadow</option>
    </select>
    <select
      bind:value={color_shade}
      id="shade-of-color"
      class="select select-bordered"
    >
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="200">200</option>
      <option value="300">300</option>
      <option value="400">400</option>
      <option value="500">500</option>
      <option value="600">600</option>
      <option value="700">700</option>
      <option value="800">800</option>
      <option value="900">900</option>
    </select>
  </div>
  <div
    on:keypress={handle_color}
    on:click={handle_color}
    id="color-panel"
    class="grid grid-cols-5"
    role="menu"
    tabindex="0"
  >
    <button id={`slate-${color_shade}`} class={`bg-slate-${color_shade}`} />
    <button id={`gray-${color_shade}`} class={`bg-gray-${color_shade}`} />
    <button id={`zinc-${color_shade}`} class={`bg-zinc-${color_shade}`} />
    <button id={`neutral-${color_shade}`} class={`bg-neutral-${color_shade}`} />
    <button id={`stone-${color_shade}`} class={`bg-stone-${color_shade}`} />
    <button id={`red-${color_shade}`} class={`bg-red-${color_shade}`} />
    <button id={`orange-${color_shade}`} class={`bg-orange-${color_shade}`} />
    <button id={`amber-${color_shade}`} class={` bg-amber-${color_shade}`} />
    <button id={`yellow-${color_shade}`} class={` bg-yellow-${color_shade}`} />
    <button id={`lime-${color_shade}`} class={` bg-lime-${color_shade}`} />
    <button id={`green-${color_shade}`} class={` bg-green-${color_shade}`} />
    <button
      id={`emerald-${color_shade}`}
      class={` bg-emerald-${color_shade}`}
    />
    <button id={`teal-${color_shade}`} class={` bg-teal-${color_shade}`} />
    <button id={`cyan-${color_shade}`} class={` bg-cyan-${color_shade}`} />
    <button id={`sky-${color_shade}`} class={` bg-sky-${color_shade}`} />
    <button id={`blue-${color_shade}`} class={` bg-blue-${color_shade}`} />
    <button id={`indigo-${color_shade}`} class={` bg-indigo-${color_shade}`} />
    <button id={`violet-${color_shade}`} class={` bg-violet-${color_shade}`} />
    <button id={`purple-${color_shade}`} class={` bg-purple-${color_shade}`} />
    <button
      id={`fuchsia-${color_shade}`}
      class={` bg-fuchsia-${color_shade}`}
    />
    <button id={`pink-${color_shade}`} class={` bg-pink-${color_shade}`} />
    <button id={`rose-${color_shade}`} class={` bg-rose-${color_shade}`} />
  </div>
</div>

<style>
  #color-panel > button:hover {
    border: 4px solid black;
  }

  #color-panel > button {
    border: 2px solid black;
    width: 3rem;
    height: 3rem;
  }
</style>
