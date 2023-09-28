<script lang="ts">
  import { border_property } from "./stores";

  interface border_direction {
    value: number;
    toggle: boolean;
  }

  let border_width_pos: number = 2;
  let border_width_values: Array<string> = ["-0", "", "-2", "-4", "-8"];
  $: border_width = border_width_values[border_width_pos];
  $: sliced_width = border_width === "" ? 1 : border_width.slice(1);

  let style = "";
  let border_radius_collection = "";

  //NOTE Read more about data attributes

  //TODO make sure that direction panel is abstracted
  //TODO needs to be a functional component

  //TODO need to create different b* values for bx/by/b

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
  let b: border_direction = {
    value: 0,
    toggle: false,
  };

  let bx: border_direction = {
    value: 0,
    toggle: false,
  };

  let by: border_direction = {
    value: 0,
    toggle: false,
  };

  $: border_property.update(() => $border_property.set("style", style));
  // TODO split the if statements
  $: if (bt.toggle && bb.toggle && bl.toggle && br.toggle) {
    border_property.update(() => {
      $border_property.set("border-y", "");
      $border_property.set("border-x", "");
      $border_property.set("border-t", "");
      $border_property.set("border-b", "");
      $border_property.set("border-l", "");
      $border_property.set("border-r", "");
      return $border_property.set("border", "border" + border_width);
    });

    bt.value = Number(sliced_width);
    bb.value = Number(sliced_width);
    bl.value = Number(sliced_width);
    br.value = Number(sliced_width);
  } else if (bt.toggle && bb.toggle) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-t", "");
      $border_property.set("border-b", "");
      return $border_property.set("border-y", "border-y" + border_width);
    });

    bt.value = Number(sliced_width);
    bb.value = Number(sliced_width);
  } else if (br.toggle && bl.toggle) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-l", "");
      $border_property.set("border-r", "");
      return $border_property.set("border-x", "border-x" + border_width);
    });

    br.value = Number(sliced_width);
    bl.value = Number(sliced_width);
  } else if (bt.toggle) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-y", "");
      return $border_property.set("border-t", "border-t" + border_width);
    });

    bt.value = Number(sliced_width);
  } else if (bb.toggle) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-y", "");
      return $border_property.set("border-b", "border-b" + border_width);
    });

    bb.value = Number(sliced_width);
  } else if (bl.toggle) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-x", "");
      return $border_property.set("border-l", "border-l" + border_width);
    });

    bl.value = Number(sliced_width);
  } else if (br.toggle) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-x", "");
      return $border_property.set("border-r", "border-r" + border_width);
    });
    br.value = Number(sliced_width);
  }
</script>

<div id="border-control" class="flex items-start">
  <div id="group-buttons" class="grid grid-cols-3 grid-rows-3 my-1 w-28">
    <!-- <select class="select select-bordered" /> -->
    <button
      class={`col-span-1 col-start-2 col-end-2  rounded-t-lg ${
        bt.toggle ? "active" : ""
      }`}
      on:click={() => (bt.toggle = !bt.toggle)}
    >
      {bt.value}
    </button>
    <button
      class={`${
        bl.toggle ? "active" : ""
      } row-start-2 row-end-2  rounded-l-lg `}
      on:click={() => (bl.toggle = !bl.toggle)}
    >
      {bl.value}</button
    >
    <button
      class={`${
        br.toggle ? "active" : ""
      } row-start-2 row-end-2 col-start-3 col-end-3  rounded-r-lg `}
      on:click={() => (br.toggle = !br.toggle)}
    >
      {br.value}</button
    >
    <button
      class={`col-span-1 col-start-2 col-end-2 rounded-b-lg ${
        bb.toggle ? "active" : ""
      } row-start-3 row-end-3`}
      on:click={() => (bb.toggle = !bb.toggle)}
    >
      {bb.value}</button
    >
  </div>
  <!-- 
   Width Selector
-->
  <div id="border-width-section" class="mb-1 mt-2">
    <label class="label px-3" for="border-width">Width: {sliced_width}</label>
    <input
      id="border-width"
      type="range"
      class="range mx-1"
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
        border_property.update(() =>
          $border_property.set("radius", border_radius_collection)
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
