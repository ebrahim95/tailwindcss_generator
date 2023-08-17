<script lang="ts">
  // Use Icons to represent properties
  import { filter_property } from "./stores";
  let blur_value: string = "";
  let drop_shadow_value: string = "";

  let grayscale_toggle = false;
  $: grayscale_value = grayscale_toggle === true ? "grayscale" : "grayscale-0";

  let contrast_value: number = 3;
  let contrast_value_array: Array<string> = [
    "contrast-0",
    "contrast-50",
    "contrast-75",
    "contrast-100",
    "contrast-125",
    "contrast-150",
    "contrast-200",
  ];

  let brightness_value: number = 5;
  let brightness_value_array: Array<string> = [
    "brightness-0",
    "brightness-50",
    "brightness-75",
    "brightness-90",
    "brightness-95",
    "brightness-100",
    "brightness-105",
    "brightness-110",
    "brightness-125",
    "brightness-150",
    "brightness-200",
  ];
</script>

<section>
  <div class="join my-1" id="blur-mode">
    <label class="label px-3 bg-base-200 join-item" for="blur-mode">Blur</label>
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
  <div id="brightness-selector join">
    <label class="label" for="brightness-range"
      >Brightness Selector: {brightness_value_array[brightness_value].split(
        "-"
      )[1]}</label
    >
    <input
      type="range"
      min="0"
      max="10"
      class="range mb-2"
      id="brightness-range"
      bind:value={brightness_value}
      on:input={() => {
        filter_property.update(() =>
          $filter_property.set(
            "brightness",
            brightness_value_array[brightness_value]
          )
        );
      }}
    />
  </div>

  <div id="contrast-selector">
    <label class="label" for="contrast-range"
      >Contrast Selector: {contrast_value_array[contrast_value].split(
        "-"
      )[1]}</label
    >

    <input
      type="range"
      class="range mb-2"
      id="contrast-range"
      min="0"
      max="6"
      bind:value={contrast_value}
      on:input={() => {
        filter_property.update(() =>
          $filter_property.set("contrast", contrast_value_array[contrast_value])
        );
      }}
    />
  </div>

  <div class="join my-1" id="drop-shadow">
    <label class="label px-3 bg-base-200 join-item" for="drop-shadow"
      >Box Shadow</label
    >
    <select
      class="select select-bordered join-item"
      bind:value={drop_shadow_value}
      on:change={() =>
        filter_property.update(() =>
          $filter_property.set("drop_shadow", drop_shadow_value)
        )}
    >
      <option value="drop-shadow-sm">sm</option>
      <option value="drop-shadow">Default</option>
      <option value="drop-shadow-md">md</option>
      <option value="drop-shadow-lg">lg</option>
      <option value="drop-shadow-xl">xl</option>
      <option value="drop-shadow-2xl">2xl</option>
      <option value="drop-shadow-inner">Inner</option>
      <option value="drop-shadow-none">None</option>
    </select>
  </div>
  <br />
  <div class="join my-1" id="grayscale-toggle">
    <label class="label px-3 bg-base-200 join-item" for="grayscale-toggle"
      >Grayscale</label
    >
    <input
      bind:checked={grayscale_toggle}
      class="toggle toggle-lg p-5 join-item"
      type="checkbox"
      on:change={() =>
        filter_property.update(() =>
          $filter_property.set("grayscale", grayscale_value)
        )}
    />
  </div>
</section>
