<script lang="ts">
  import { effects_property } from "./stores";

  let box_shadow_value: string = "";
  let opacity_value: string = "";
  let mix_blend_value: string = "";
</script>

<section id="effects-panel">
  <div class="join my-1" id="box-shadow">
    <label class="label px-3 bg-base-200 join-item" for="box-shadow"
      >Box Shadow</label
    >
    <select
      class="select select-bordered join-item"
      bind:value={box_shadow_value}
      on:change={() =>
        effects_property.update(() =>
          $effects_property.set("box_shadow", box_shadow_value)
        )}
    >
      <option value="shadow-sm">sm</option>
      <option value="shadow">Default</option>
      <option value="shadow-md">md</option>
      <option value="shadow-lg">lg</option>
      <option value="shadow-xl">xl</option>
      <option value="shadow-2xl">2xl</option>
      <option value="shadow-inner">Inner</option>
      <option value="shadow-none">None</option>
    </select>
  </div>
  <div class="join my-1" id="opacity">
    <label class="label px-3 bg-base-200 join-item" for="opacity">
      Opacity
    </label>
    <select
      class="select select-bordered join-item"
      bind:value={opacity_value}
      on:change={() =>
        effects_property.update(() =>
          $effects_property.set("opacity", opacity_value)
        )}
    >
      <option value="opacity-0">0</option>
      <option value="opacity-5">5</option>
      <option value="opacity-10">10</option>
      <option value="opacity-20">20</option>
      <option value="opacity-25">25</option>
      <option value="opacity-30">30</option>
      <option value="opacity-40">40</option>
      <option value="opacity-50">50</option>
      <option value="opacity-60">60</option>
      <option value="opacity-70">70</option>
      <option value="opacity-75">75</option>
      <option value="opacity-80">80</option>
      <option value="opacity-90">90</option>
      <option value="opacity-95">95</option>
      <option value="opacity-100">100</option>
    </select>
  </div>
  <div class="join my-1" id="mix-blend-mode">
    <label class="label px-3 bg-base-200 join-item" for="mix-blend">
      Mix Blend
    </label>
    <select
      class="select select-bordered join-item"
      bind:value={mix_blend_value}
      on:change={() =>
        effects_property.update(() =>
          $effects_property.set("mix-blend", mix_blend_value)
        )}
    >
      <option value="mix-blend-normal">Normal</option>
      <option value="mix-blend-multiply">Multiply</option>
      <option value="mix-blend-screen">Screen</option>
      <option value="mix-blend-overlay">Overlay</option>
      <option value="mix-blend-darken">Darken</option>
      <option value="mix-blend-lighten">Lighten</option>
      <option value="mix-blend-color-dodge">Dodge</option>
      <option value="mix-blend-color-burn">Burn</option>
      <option value="mix-blend-hard-light">Hard Light</option>
      <option value="mix-blend-soft-light">Soft Light</option>
      <option value="mix-blend-difference">Difference</option>
      <option value="mix-blend-exclusion">Exclusion</option>
      <option value="mix-blend-hue">Hue</option>
      <option value="mix-blend-saturation">Saturation</option>
      <option value="mix-blend-color">Color</option>
      <option value="mix-blend-luminosity">Luminosity</option>
      <option value="mix-blend-plus-lighter">Plus Lighter</option>
    </select>
  </div>
</section>
