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

<div id="padding-control">
  <h2>Padding</h2>
  <div id="group-buttons" class="grid grid-cols-2 grid-rows-2 my-2 w-24">
    <button
      class={`rounded-tl-lg ${pt.toggle ? "active" : ""}`}
      on:click={() => (pt.toggle = !pt.toggle)}
    >
      {pt.value}</button
    >
    <button
      class={`rounded-tr-lg ${pb.toggle ? "active" : ""}`}
      on:click={() => (pb.toggle = !pb.toggle)}
    >
      {pb.value}</button
    >
    <button
      class={`rounded-bl-lg ${pl.toggle ? "active" : ""}`}
      on:click={() => (pl.toggle = !pl.toggle)}
    >
      {pl.value}</button
    >
    <button
      class={`rounded-br-lg ${pr.toggle ? "active" : ""}`}
      on:click={() => (pr.toggle = !pr.toggle)}
    >
      {pr.value}</button
    >
  </div>

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

  <!-- step="1" -->
  <!-- <div class="w-full flex justify-between text-xs px-2">
         <span>|</span>
         <span>|</span>
         <span>|</span>
         <span>|</span>
         <span>|</span>
         <span>|</span>
         <span>|</span>
         <span>|</span>
         <span>|</span>
         <span>|</span>
         </div> -->

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
