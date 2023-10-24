<script lang="ts">
  import { padding_property } from "./stores";
  let padding_value: string = "0";

  interface padding_object {
    value: string;
  }
  let pt: padding_object = {
    value: "0",
  };
  let pb: padding_object = {
    value: "0",
  };
  let pr: padding_object = {
    value: "0",
  };
  let pl: padding_object = {
    value: "0",
  };

  $: if (pt.value !== pb.value || pr.value !== pl.value) {
    padding_property.update(() => {
      $padding_property.set("p-", "");
      $padding_property.set("py-", "");
      $padding_property.set("px-", "");
      $padding_property.set("pt-", "pt-" + pt.value);
      $padding_property.set("pb-", "pb-" + pb.value);
      $padding_property.set("pl-", "pl-" + pl.value);
      return $padding_property.set("pr-", "pr-" + pr.value);
    });
  }

  $: if (pt.value === pb.value) {
    padding_property.update(() => {
      $padding_property.set("p-", "");
      $padding_property.set("pt-", "");
      $padding_property.set("pb-", "");

      return $padding_property.set("py-", "py-" + pt.value);
    });
  }

  $: if (pr.value === pl.value) {
    padding_property.update(() => {
      $padding_property.set("p-", "");
      $padding_property.set("pl-", "");
      $padding_property.set("pr-", "");
      return $padding_property.set("px-", "px-" + pr.value);
    });
  }

  $: if (
    pt.value === pb.value &&
    pr.value === pl.value &&
    pt.value === pr.value &&
    pb.value === pl.value &&
    pt.value === pl.value &&
    pb.value === pr.value
  ) {
    padding_property.update(() => {
      $padding_property.set("py-", "");
      $padding_property.set("px-", "");
      $padding_property.set("pt-", "");
      $padding_property.set("pb-", "");
      $padding_property.set("pl-", "");
      $padding_property.set("pr-", "");
      return $padding_property.set("p-", "p-" + pt.value);
    });
  }
</script>

<div
  id="padding-control"
  class="flex items-start gap-4 absolute top-2 right-2 border-4 border-black rounded-lg p-4 bg-amber-50"
>
  <div id="group-buttons" class="grid grid-cols-3 grid-rows-3 my-1 w-36 h-36">
    <div class="row-start-2 row-end-2 col-start-2 col-end-2 bg-black" />
    <button
      class={`col-span-1 col-start-2 col-end-2 rounded-t-lg`}
      on:click={() => (pt.value = padding_value)}
    >
      {pt.value}
    </button>
    <button
      class={`row-start-2 row-end-2  rounded-l-lg `}
      on:click={() => (pl.value = padding_value)}
    >
      {pl.value}</button
    >
    <button
      class={`row-start-2 row-end-2 col-start-3 col-end-3  rounded-r-lg `}
      on:click={() => (pr.value = padding_value)}
    >
      {pr.value}</button
    >
    <button
      class={`col-span-1 col-start-2 col-end-2 rounded-b-lg row-start-3 row-end-3`}
      on:click={() => (pb.value = padding_value)}
    >
      {pb.value}</button
    >
  </div>
  <div id="padding-selector">
    <label for="padding-range">Padding Selector: {padding_value}</label>
    <input
      class="range mb-2"
      id="padding-range"
      type="range"
      min="0"
      max="10"
      step="0.5"
      bind:value={padding_value}
    />
  </div>
  <pr />
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
