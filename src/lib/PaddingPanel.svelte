<script lang="ts">
  import { padding } from "./stores";
  let padding_value: number = 0;
  let padding_direction: string[] = ["pt", "pb", "pr", "pl"];
  $: padding_tailwind = padding_direction.join(" ");

  interface padding_object {
    toggle: boolean;
    value: number;
  }
  let pt: padding_object = {
    toggle: false,
    value: 0,
  };
  let pb: padding_object = {
    toggle: false,
    value: 0,
  };
  let pr: padding_object = {
    toggle: false,
    value: 0,
  };
  let pl: padding_object = {
    toggle: false,
    value: 0,
  };

  $: if (pt.toggle && pb.toggle && pr.toggle && pl.toggle) {
    padding_direction[0] = "pt-" + padding_value.toString();
    padding_direction[1] = "pb-" + padding_value.toString();
    padding_direction[2] = "pr-" + padding_value.toString();
    padding_direction[3] = "pl-" + padding_value.toString();
    pt.value = padding_value;
    pb.value = padding_value;
    pr.value = padding_value;
    pl.value = padding_value;
  } else if (pr.toggle && pl.toggle) {
    padding_direction[2] = "pr-" + padding_value.toString();
    padding_direction[3] = "pl-" + padding_value.toString();
    pr.value = padding_value;
    pl.value = padding_value;
  } else if (pt.toggle && pb.toggle) {
    padding_direction[0] = "pt-" + padding_value.toString();
    padding_direction[1] = "pb-" + padding_value.toString();
    pt.value = padding_value;
    pb.value = padding_value;
  } else if (pt.toggle) {
    padding_direction[0] = "pt-" + padding_value.toString();
    pt.value = padding_value;
  } else if (pb.toggle) {
    padding_direction[1] = "pb-" + padding_value.toString();
    pb.value = padding_value;
  } else if (pr.toggle) {
    padding_direction[2] = "pr-" + padding_value.toString();
    pr.value = padding_value;
  } else if (pl.toggle) {
    padding_direction[3] = "pl-" + padding_value.toString();
    pl.value = padding_value;
  }
</script>

<div
  id="padding-control"
  class="flex items-start gap-4 absolute top-2 right-2 border-4 border-black rounded-lg p-4 bg-amber-50"
>
  <div id="group-buttons" class="grid grid-cols-3 grid-rows-3 my-1 w-28">
    <!-- <select class="select select-bordered" /> -->
    <button
      class={`col-span-1 col-start-2 col-end-2  rounded-t-lg ${
        pt.toggle ? "active" : ""
      }`}
      on:click={() => (pt.toggle = !pt.toggle)}
    >
      {pt.value}
    </button>
    <button
      class={`${
        pl.toggle ? "active" : ""
      } row-start-2 row-end-2  rounded-l-lg `}
      on:click={() => (pl.toggle = !pl.toggle)}
    >
      {pl.value}</button
    >
    <button
      class={`${
        pr.toggle ? "active" : ""
      } row-start-2 row-end-2 col-start-3 col-end-3  rounded-r-lg `}
      on:click={() => (pr.toggle = !pr.toggle)}
    >
      {pr.value}</button
    >
    <button
      class={`col-span-1 col-start-2 col-end-2 rounded-b-lg ${
        pb.toggle ? "active" : ""
      } row-start-3 row-end-3`}
      on:click={() => (pb.toggle = !pb.toggle)}
    >
      {pb.value}</button
    >
  </div>
  <div id="padding-selector">
    <label for="padding-range">Padding Selector</label>
    <input
      class="range mb-2"
      id="padding-range"
      type="range"
      min="0"
      max="10"
      step="0.5"
      bind:value={padding_value}
      on:input={() => {
        padding.update(() => padding_tailwind);
      }}
    />
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
