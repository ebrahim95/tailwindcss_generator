<script lang="ts">
  import { border_style } from "./stores";

  interface border_direction {
    value: number;
    toggle: boolean;
  }

  let border_width_pos: number = 2;
  let border_width_values: Array<string> = ["-0", "", "-2", "-4", "-8"];
  $: width = border_width_values[border_width_pos];
  $: sliced_width = width === "" ? 1 : width.slice(1);

  let style = "";
  let border_radius_collection = "";

  //NOTE Read more about data attributes
  //TODO make sure that direction panel is abstracted
  //TODO needs to be a functional component

  let bt: border_direction = {
    value: 0,
    toggle: false,
  };
  let bb: border_direction = {
    value: 0,
    toggle: false,
  };

  let bl: border_direction = {
    value: 0,
    toggle: false,
  };

  let br: border_direction = {
    value: 0,
    toggle: false,
  };

  $: border_style.update(() => $border_style.set("style", style));

  $: if (bt.toggle && bb.toggle && bl.toggle && br.toggle) {
    border_style.update(() => {
      $border_style.set("border-y", "");
      $border_style.set("border-x", "");
      $border_style.set("border-t", "");
      $border_style.set("border-b", "");
      $border_style.set("border-l", "");
      $border_style.set("border-r", "");
      return $border_style.set("border", "border" + width);
    });

    bt.value = Number(sliced_width);
    bb.value = Number(sliced_width);
    bl.value = Number(sliced_width);
    br.value = Number(sliced_width);
  } else if (bt.toggle && bb.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-t", "");
      $border_style.set("border-b", "");
      return $border_style.set("border-y", "border-y" + width);
    });

    bt.value = Number(sliced_width);
    bb.value = Number(sliced_width);
  } else if (br.toggle && bl.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-l", "");
      $border_style.set("border-r", "");
      return $border_style.set("border-x", "border-x" + width);
    });

    br.value = Number(sliced_width);
    bl.value = Number(sliced_width);
  } else if (bt.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-y", "");
      return $border_style.set("border-t", "border-t" + width);
    });

    bt.value = Number(sliced_width);
  } else if (bb.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-y", "");
      return $border_style.set("border-b", "border-b" + width);
    });

    bb.value = Number(sliced_width);
  } else if (bl.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-x", "");
      return $border_style.set("border-l", "border-l" + width);
    });

    bl.value = Number(sliced_width);
  } else if (br.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-x", "");
      return $border_style.set("border-r", "border-r" + width);
    });
    br.value = Number(sliced_width);
  }
</script>

<div id="border-control">
  <div id="group-buttons" class="grid grid-cols-2 grid-rows-3 my-1 w-28">
    <select class="select select-bordered" />
    <button
      class={`col-span-2  rounded-t-lg ${bt.toggle ? "active" : ""}`}
      on:click={() => (bt.toggle = !bt.toggle)}
    >
      {bt.value}
    </button>
    <button
      class={`${bl.toggle ? "active" : ""}`}
      on:click={() => (bl.toggle = !bl.toggle)}
    >
      {bl.value}</button
    >
    <button
      class={`${br.toggle ? "active" : ""}`}
      on:click={() => (br.toggle = !br.toggle)}
    >
      {br.value}</button
    >
    <button
      class={`col-span-2 rounded-b-lg ${bb.toggle ? "active" : ""}`}
      on:click={() => (bb.toggle = !bb.toggle)}
    >
      {bb.value}</button
    >
  </div>
  <!-- 
   Width Selector
-->
  <div id="border-width-section" class="mb-1 mt-2">
    <label class="label px-3 bg-base-200" for="border-width"
      >Width: {sliced_width}</label
    >
    <input
      id="border-width"
      type="range"
      class="range"
      min="0"
      max="4"
      bind:value={border_width_pos}
    />
  </div>
  <div class="join my-1" id="border-radius-section">
    <label class="label px-3 bg-base-200 join-item" for="border-radius"
      >Radius</label
    >
    <select
      class="select select-bordered join-item"
      bind:value={border_radius_collection}
      on:change={() =>
        border_style.update(() =>
          $border_style.set("radius", border_radius_collection)
        )}
    >
      <option value="rounded-sm">sm</option>
      <option value="rounded">Default</option>
      <option value="rounded-md">md</option>
      <option value="rounded-lg">lg</option>
      <option value="rounded-xl">xl</option>
      <option value="rounded-2xl">2xl</option>
      <option value="rounded-3xl">3xl</option>
      <option value="rounded-full">full</option>
    </select>
  </div>
  <br />
  <div id="border-style-section" class="my-1 join">
    <label class="label px-3 bg-base-200 join-item" for="border-style"
      >Style</label
    >
    <select
      class="select select-bordered join-item"
      bind:value={style}
      id="border-style"
    >
      <option value="border-solid">Solid</option>
      <option value="border-dashed">Dashed</option>
      <option value="border-dotted">Dotted</option>
      <option value="border-double">Double</option>
    </select>
  </div>
</div>

<style>
  #group-buttons > button {
    border-color: black;
    border-width: 2px;
    padding: 5px 10px;
  }

  #group-buttons > button:hover {
    background-color: chocolate;
  }

  #group-buttons > .active {
    background-color: lightblue;
  }
</style>
