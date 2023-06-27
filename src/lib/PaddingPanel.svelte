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
  <div class="join">
    <button
      class={`btn btn-primary join-item ${pt.toggle ? "btn-active" : ""}`}
      on:click={() => (pt.toggle = !pt.toggle)}>TOP {pt.value}</button
    >
    <button
      class={`btn btn-primary join-item ${pb.toggle ? "btn-active" : ""}`}
      on:click={() => (pb.toggle = !pb.toggle)}>BOTTOM {pb.value}</button
    >
    <button
      class={`btn btn-primary join-item ${pl.toggle ? "btn-active" : ""}`}
      on:click={() => (pl.toggle = !pl.toggle)}>LEFT {pl.value}</button
    >
    <button
      class={`btn btn-primary join-item ${pr.toggle ? "btn-active" : ""}`}
      on:click={() => (pr.toggle = !pr.toggle)}>RIGHT {pr.value}</button
    >
  </div>
</div>
