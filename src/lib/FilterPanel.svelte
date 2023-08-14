<script lang="ts">
  import { filter_property } from "./stores";
  let blur_value: string = "";
  let brightness_value: string = "";
</script>

<section>
  <div class="join my-1" id="blue-mode">
    <label class="label px-3 bg-base-200 join-item" for="blue-mode">Blur</label>
    <select
      class="select select-bordered join-item"
      bind:value={blur_value}
      on:change={() =>
        filter_property.update(() => $filter_property.set("blue", blur_value))}
    >
      <option value="blur-none">None</option>
      <option value="blur-sm">sm</option>
      <option value="blur">default</option>
      <option value="blur-md">md</option>
      <option value="blur-lg">lg</option>
      <option value="blur-xl">xl</option>
      <option value="blur-2xl">2xl</option>
      <option value="blur-3xl">3xl</option>
    </select>
  </div>
  <div id="brightness-selector">
    <label class="label" for="brightness-range">Brightness Selector</label>
    <select
      class="select select-bordered mb-2"
      id="brightness-range"
      bind:value={brightness_value}
      on:input={() => {
        filter_property.update(() =>
          $filter_property.set("brightness", brightness_value)
        );
      }}
    >
      <option value="brightness-0">brightness-0</option>
      <option value="brightness-50">brightness-50</option>
      <option value="brightness-75">brightness-75</option>
      <option value="brightness-90">brightness-90</option>
      <option value="brightness-95">brightness-90</option>
      <option value="brightness-100">brightness-100</option>
      <option value="brightness-105">brightness-105</option>
      <option value="brightness-110">brightness-110</option>
      <option value="brightness-125">brightness-125</option>
      <option value="brightness-150">brightness-150</option>
      <option value="brightness-200">brightness-200</option>
    </select>
  </div>
</section>
