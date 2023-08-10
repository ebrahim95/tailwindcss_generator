<script lang="ts">
  import { border_style, border_width, border_radius } from "./stores";

  interface border_direction {
    value: number;
    toggle: boolean;
  }
  let width = "0";
  let style = "";

  let border_width_collection = ["", "", "", ""];
  let border_radius_collection = "";

  let toggle_sides = false;

  //TODO maybe add a map structure - to reduce the code
  // I need to add seperate selection catergories so that it will be easier to set the border properties
  // add data attributes

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

  $: border_width.update(() => {
    return border_width_collection
      .map((value) => value.replace("-1", ""))
      .join(" ");
  });

  $: border_radius.update(() => border_radius_collection);

  $: border_style.update(() => $border_style.set("style", style));

  $: if (bt.toggle && bb.toggle && bl.toggle && br.toggle) {
    //border_width_collection[4] = "border-" + width;
    border_style.update(() => {
      $border_style.set("border-y", "");
      $border_style.set("border-x", "");
      return $border_style.set("border", "border" + width);
    });
    width = width === "" ? "1" : width.slice(1);
    bt.value = Number(width);
    bb.value = Number(width);
    bl.value = Number(width);
    br.value = Number(width);
  } else if (bt.toggle && bb.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      return $border_style.set("border-y", "border-y" + width);
    });

    width = width === "" ? "1" : width.slice(1);
    bt.value = Number(width);
    bb.value = Number(width);
  } else if (br.toggle && bl.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      return $border_style.set("border-x", "border-x" + width);
    });

    width = width === "" ? "1" : width.slice(1);
    br.value = Number(width);
    bl.value = Number(width);
  } else if (bt.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-y", "");
      return $border_style.set("border-t", "border-t" + width);
    });

    width = width === "" ? "1" : width.slice(1);
    bt.value = Number(width);
  } else if (bb.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-y", "");
      return $border_style.set("border-b", "border-b" + width);
    });

    width = width === "" ? "1" : width.slice(1);
    bb.value = Number(width);
  } else if (bl.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-x", "");
      return $border_style.set("border-l", "border-l" + width);
    });

    width = width === "" ? "1" : width.slice(1);
    bl.value = Number(width);
  } else if (br.toggle) {
    border_style.update(() => {
      $border_style.set("border", "");
      $border_style.set("border-x", "");
      return $border_style.set("border-r", "border-r" + width);
    });

    width = width === "" ? "1" : width.slice(1);
    br.value = Number(width);
  }
</script>

<div id="border-control">
  <!--- Map a new array, by removing the -1 -->
  <div id="group-buttons" class="grid grid-cols-2 grid-rows-3 my-1 w-28">
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
  <div id="border-width-section" class="my-1 join">
    <label class="label px-3 bg-base-200 join-item" for="border-width"
      >Width</label
    >
    <select
      class="select select-bordered join-item"
      bind:value={width}
      id="border-width"
    >
      <option value="-0">0</option>
      <option value="">1</option>
      <option value="-2">2</option>
      <option value="-4">4</option>
      <option value="-8">8</option>
    </select>
  </div>
  <br />
  <div class="join my-1" id="border-radius-section">
    <label class="label px-3 bg-base-200 join-item" for="border-radius"
      >Radius</label
    >
    <select
      class="select select-bordered join-item"
      bind:value={border_radius_collection}
      on:change={() => border_radius.update(() => border_radius_collection)}
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
