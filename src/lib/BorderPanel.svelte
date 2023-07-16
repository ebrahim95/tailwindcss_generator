<script lang="ts">
  import { border_width, border_radius } from "./stores";

  interface border_direction {
    value: number;
    toggle: boolean;
  }
  let width = "0";
  let border_width_collection = ["", "", "", ""];
  let border_radius_collection = "";

  //TODO maybe add a map structure - to reduce the code

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

  $: if (bt.toggle && bb.toggle && bl.toggle && br.toggle) {
    //border_width_collection[4] = "border-" + width;

    border_width_collection[0] = "border-t-" + width;
    border_width_collection[1] = "border-b-" + width;
    border_width_collection[2] = "border-r-" + width;
    border_width_collection[3] = "border-l-" + width;
    bt.value = Number(width);
    bb.value = Number(width);
    bl.value = Number(width);
    br.value = Number(width);
  } else if (bt.toggle && bb.toggle) {
    border_width_collection[0] = "border-t-" + width;
    border_width_collection[1] = "border-b-" + width;

    bt.value = Number(width);
    bb.value = Number(width);
  } else if (br.toggle && bl.toggle) {
    border_width_collection[2] = "border-r-" + width;
    border_width_collection[3] = "border-l-" + width;
    br.value = Number(width);
    bl.value = Number(width);
  } else if (bt.toggle) {
    border_width_collection[0] = "border-t-" + width;
    bt.value = Number(width);
  } else if (bb.toggle) {
    border_width_collection[1] = "border-b-" + width;
    bb.value = Number(width);
  } else if (br.toggle) {
    border_width_collection[2] = "border-r-" + width;
    br.value = Number(width);
  } else if (bl.toggle) {
    border_width_collection[3] = "border-l-" + width;
    bl.value = Number(width);
  }
</script>

<div class="my-1" id="border-control">
  <!--- Map a new array, by removing the -1 -->
  <div>
    <div id="group-buttons" class="grid grid-cols-2 grid-rows-2 my-2 w-24">
      <button
        class={`rounded-tl-lg ${bt.toggle ? "active" : ""}`}
        on:click={() => (bt.toggle = !bt.toggle)}
      >
        {bt.value}</button
      >
      <button
        class={`rounded-tr-lg ${bb.toggle ? "active" : ""}`}
        on:click={() => (bb.toggle = !bb.toggle)}
      >
        {bb.value}</button
      >
      <button
        class={`rounded-bl-lg ${bl.toggle ? "active" : ""}`}
        on:click={() => (bl.toggle = !bl.toggle)}
      >
        {bl.value}</button
      >
      <button
        class={`rounded-br-lg ${br.toggle ? "active" : ""}`}
        on:click={() => (br.toggle = !br.toggle)}
      >
        {br.value}</button
      >
    </div>
    <div id="border-width-section" class="my-1 join">
      <label class="label px-3 bg-base-200 join-item" for="border-width"
        >Width</label
      >
      <select
        class="select select-bordered join-item"
        bind:value={width}
        id="border-width"
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
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
  </div>

  <br />
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
