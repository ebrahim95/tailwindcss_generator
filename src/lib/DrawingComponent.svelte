<script lang="ts">
  export let show_code: boolean;
  //TODO need to rework the code section

  //NOTE No clue what I just said below
  //TODO need to create Ids so that I can delete the component more easily
  //TODO need to get a class and keep updating that specific class

  import {
    padding,
    border_property,
    //  tag_to_add,
    color,
    // editable_component,
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

  //NOTE need to rework the part
  //let first = `w-[400px] h-[400px] ${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius} ${$ring_width} ${ring_color}`;
  //let second = ``;
  // $: second_element = document.createElement($tag_to_add);
  // $: second_element.setAttribute("class", second);
  // $: document?.getElementById("first")?.appendChild(second_element);
  //
  // $: if ($editable_component === "outside") {
  //     first = `w-[400px] h-[400px] ${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius} ${$ring_width} ${ring_color}`;
  // } else {
  //     second = `w-[200px] h-[200px] ${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius} ${$ring_width} ${ring_color}`;
  // }
</script>

<div id="pendu" class="flex flex-col w-full my-auto items-center">
  {#if show_code}
    <div
      id="first"
      class={`my-auto w-[400px] h-[400px]  ${$padding} ${bg_color} ${border_color} ${border_property_array}
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
      {`my-auto w-[400px] h-[400px] ${$padding} ${bg_color} ${border_color} ${border_property_array} ` +
              `${ring_property_array} ${ring_color} ${ring_offset_color} ${outline_property_array} ${outline_color} ` +
              `${effects_property_array} ${shadow_color} ${filter_property_array}`}
        </code>
      </pre>
      </div>
    </div>
  {/if}
</div>
