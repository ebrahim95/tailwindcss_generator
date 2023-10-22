<script lang="ts">
  import { border_property } from "./stores";

  interface border_direction {
    value: string;
    display_value: string;
  }

  let bt: border_direction = {
    value: "-0",
    display_value: "0",
  };
  let bb: border_direction = {
    value: "-0",
    display_value: "0",
  };

  let bl: border_direction = {
    value: "-0",
    display_value: "0",
  };

  let br: border_direction = {
    value: "-0",
    display_value: "0",
  };

  let border_width_pos: number = 2;
  let border_width_values: Array<string> = ["-0", "", "-2", "-4", "-8"];
  $: border_width = border_width_values[border_width_pos];
  $: sliced_width = border_width === "" ? "1" : border_width.slice(1);

  let style = "";
  let border_radius_collection = "";

  //NOTE Read more about data attributes

  $: border_property.update(() => $border_property.set("style", style));
  // TODO basically I need to seperate the logic into two
  // First I need to only change the value
  // then I scan the value to make sure the correct tailwind styles are working

  $: if (bt.value !== bb.value || br.value !== bl.value) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-y", "");
      $border_property.set("border-x", "");
      $border_property.set("border-t", "border-t" + bt.value);
      $border_property.set("border-b", "border-b" + bb.value);
      $border_property.set("border-l", "border-l" + bl.value);
      return $border_property.set("border-r", "border-r" + br.value);
    });
  }

  $: if (bt.value === bb.value) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-t", "");
      $border_property.set("border-b", "");

      return $border_property.set("border-y", "border-y" + bt.value);
    });
  }

  $: if (br.value === bl.value) {
    border_property.update(() => {
      $border_property.set("border", "");
      $border_property.set("border-l", "");
      $border_property.set("border-r", "");
      return $border_property.set("border-x", "border-x" + br.value);
    });
  }

  $: if (
    bt.value === bb.value &&
    br.value === bl.value &&
    bt.value === br.value &&
    bb.value === bl.value &&
    bt.value === bl.value &&
    bb.value === br.value
  ) {
    border_property.update(() => {
      $border_property.set("border-y", "");
      $border_property.set("border-x", "");
      $border_property.set("border-t", "");
      $border_property.set("border-b", "");
      $border_property.set("border-l", "");
      $border_property.set("border-r", "");
      return $border_property.set("border", "border" + bt.value);
    });
  }
</script>

<div
  id="border-control"
  class="flex items-start gap-3 right-2 top-2 absolute border-4 border-black rounded-lg p-4 bg-amber-50"
>
  <div id="group-buttons" class="grid grid-cols-3 grid-rows-3 my-1 w-28">
    <!-- changed style when click, click to change width, also color the middle -->
    <div class="row-start-2 row-end-2 col-start-2 col-end-2 bg-black" />
    <button
      class={`col-span-1 col-start-2 col-end-2 rounded-t-lg`}
      id="top-button"
      on:click={() => {
        bt.value = border_width_values[border_width_pos];
        bt.display_value = sliced_width;

        const button = document.querySelector("#top-button");

        setTimeout(() => {
          button.style.backgroundColor = "";
        }, 175);
        button.style.backgroundColor = "lightblue";
      }}
    >
      {bt.display_value}
    </button>
    <button
      class={`
       row-start-2 row-end-2  rounded-l-lg `}
      id="left-button"
      on:click={() => {
        bl.value = border_width_values[border_width_pos];
        bl.display_value = sliced_width;

        const button = document.querySelector("#left-button");
        setTimeout(() => {
          button.style.backgroundColor = "";
        }, 175);
        button.style.backgroundColor = "lightblue";
      }}
    >
      {bl.display_value}</button
    >
    <button
      class={`
       row-start-2 row-end-2 col-start-3 col-end-3  rounded-r-lg `}
      id="right-button"
      on:click={() => {
        br.value = border_width_values[border_width_pos];
        br.display_value = sliced_width;

        const button = document.querySelector("#right-button");
        setTimeout(() => {
          button.style.backgroundColor = "";
        }, 175);
        button.style.backgroundColor = "lightblue";
      }}
    >
      {br.display_value}</button
    >
    <button
      class={`col-span-1 col-start-2 col-end-2 rounded-b-lg row-start-3 row-end-3`}
      id="bottom-button"
      on:click={() => {
        bb.value = border_width_values[border_width_pos];

        bb.display_value = sliced_width;

        const button = document.querySelector("#bottom-button");
        setTimeout(() => {
          button.style.backgroundColor = "";
        }, 175);
        button.style.backgroundColor = "lightblue";
      }}
    >
      {bb.display_value}</button
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
    <label
      class="label border-2 border-black px-3 ml-1 bg-amber-50 join-item"
      for="border-radius">Radius</label
    >
    <select
      class="select select-bordered bg-amber-50 join-item"
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
  <div id="border-style-section" class="my-1 join">
    <label
      class="label border-2 border-black px-3 bg-amber-50 join-item"
      for="border-style">Style</label
    >
    <select
      class="select select-bordered bg-amber-50 join-item"
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
    outline-style: solid;
    outline-width: 3px;
    background-color: chocolate;
  }

  #group-buttons > .active {
    background-color: lightblue;
  }
</style>
