<script lang="ts">
  import { border_width, border_radius } from "./stores";

  interface border_direction {
    value: number;
    toggle: boolean;
  }
  let width = "0";
  let border_width_collection = ["0", "0", "0", "0"];
  let border_radius_collection = "";

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

  $: border_collection_mapped = border_width.update(() => {
    return border_width_collection
      .map((value) => value.replace("-1", ""))
      .join(" ");
  });

  $: border_radius_update = border_radius.update(
    () => border_radius_collection
  );

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

<div class="my-4" id="border-control">
  <h2>Border</h2>

  <!--- Map a new array, by removing the -1 -->
  <label class="label" for="border-width">Width</label>
  <select
    class="select select-bordered mb-2"
    bind:value={width}
    id="border-width"
  >
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="4">4</option>
    <option value="8">8</option>
  </select>
  <br />

  <div class="join">
    <button
      class={`btn btn-primary join-item ${bt.toggle ? "btn-active" : ""}`}
      on:click={() => {
        return (bt.toggle = !bt.toggle);
      }}>TOP {bt.value}</button
    >
    <button
      class={`btn btn-primary join-item ${bb.toggle ? "btn-active" : ""}`}
      on:click={() => (bb.toggle = !bb.toggle)}>BOTTOM {bb.value}</button
    >
    <button
      class={`btn btn-primary join-item ${bl.toggle ? "btn-active" : ""}`}
      on:click={() => (bl.toggle = !bl.toggle)}>LEFT {bl.value}</button
    >
    <button
      class={`btn btn-primary join-item ${br.toggle ? "btn-active" : ""}`}
      on:click={() => (br.toggle = !br.toggle)}>RIGHT {br.value}</button
    >
  </div>
  <br />
  <label class="label" for="border-radius">Border-Radius</label>
  <select class="select select-bordered" bind:value={border_radius_collection}>
    <option value="rounded-sm">"sm"</option>
    <option value="rounded">"Default"</option>
    <option value="rounded-md">"md"</option>
    <option value="rounded-lg">"lg"</option>
    <option value="rounded-xl">"xl"</option>
    <option value="rounded-2xl">"2xl"</option>
    <option value="rounded-3xl">"3xl"</option>
    <option value="rounded-full">"full"</option>
  </select>
</div>
