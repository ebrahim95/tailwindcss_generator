<script lang="ts">
  export let show_code: boolean;
  //TODO need to rework the code section
  //TODO need to create Ids so that I can delete the component more easily
  //TODO need to get a class and keep updating that specific class

  import {
    padding_property,
    border_property,
    color,
    outline_property,
    ring_property,
    effects_property,
    filter_property,
  } from "./stores";

  let bg_color = "";
  let border_color = "";
  let ring_color = "";
  let ring_offset_color = "";
  let outline_color = "";
  let shadow_color = "";

  $: outline_property_array = Array.from($outline_property.values()).join(" ");
  $: ring_property_array = Array.from($ring_property.values()).join(" ");
  $: effects_property_array = Array.from($effects_property.values()).join(" ");
  $: filter_property_array = Array.from($filter_property.values()).join(" ");
  $: border_property_array = Array.from($border_property.values()).join(" ");
  $: padding_property_array = Array.from($padding_property.values()).join(" ");

  $: if ($color.includes("bg")) {
    bg_color = $color;
  } else if ($color.includes("border")) {
    border_color = $color;
  } else if ($color.includes("ring")) {
    ring_color = $color;
  } else if ($color.includes("outline")) {
    outline_color = $color;
  } else if ($color.includes("shadow")) {
    shadow_color = $color;
  } else {
    ring_offset_color = $color;
  }

  let showAlert: boolean = false;
  function copyToClipboard() {
    let copyText = document.querySelector("#tailwind-classes");
    navigator.clipboard.writeText(copyText.textContent);

    showAlert = true;
    setTimeout(() => {
      showAlert = false;
    }, 5000);
  }

  //TODO need to add the abiilty to zoom out of canvas.
  //TODO need to add the ability to add components
</script>

<div id="canvas" class="flex flex-col w-full my-auto items-center">
  {#if show_code}
    <div
      id="first"
      class={`my-auto w-[400px] h-[400px]  ${padding_property_array} ${bg_color} ${border_color} ${border_property_array}
      ${ring_property_array}  ${ring_color} ${ring_offset_color}  ${outline_property_array} ${outline_color} ${effects_property_array}
      ${shadow_color} ${filter_property_array}`}
    />
  {:else}
    <div class="w-[600px]">
      <button
        id="copy-to-clipboard"
        on:click={copyToClipboard}
        class="btn btn-secondary mb-2"
      >
        COPY
      </button>
      <div
        id="alert-box"
        class={`alert alert-success ${showAlert ? "" : "hidden"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
        <span>Copied to clipboard</span>
      </div>
      <div class="mockup-code mt-2">
        <pre data-prefix="~">
        <code id="tailwind-classes">
      {`my-auto w-[400px] h-[400px] ${padding_property_array} ${bg_color} ${border_color} ${border_property_array} ` +
              `${ring_property_array} ${ring_color} ${ring_offset_color} ${outline_property_array} ${outline_color} ` +
              `${effects_property_array} ${shadow_color} ${filter_property_array}`}
        </code>
      </pre>
      </div>
    </div>
  {/if}
</div>
