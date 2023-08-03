<script lang="ts">
  import { onMount } from "svelte";
  export let show_code: boolean;
  //TODO need to create Ids so that I can delete the component more easily
  //TODO need to get a class and keep updating that specific class

  import {
    padding,
    border_width,
    border_radius,
    border_style,
    //  tag_to_add,
    color,
    // editable_component,
    outline_property,
    ring_property,
  } from "./stores";

  let bg_color = "";
  let border_color = "border-black";
  let ring_color = "";
  let outline_color = "";

  $: outline_property_array = Array.from($outline_property.values()).join(" ");
  $: ring_property_array = Array.from($ring_property.values()).join(" ");

  $: border_property_array = Array.from($border_style.values()).join(" ");

  $: if ($color.includes("bg")) {
    bg_color = $color;
  } else if ($color.includes("border")) {
    border_color = $color;
  } else if ($color.includes("ring")) {
    ring_color = $color;
  } else {
    outline_color = $color;
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

<div
  id="pendu"
  class="flex flex-col w-full place-items-center place-content-center"
>
  {#if show_code}
    <div
      id="first"
      class={`my-auto w-[400px] h-[400px]  ${$padding} ${bg_color}  
      ${border_color} ${$border_radius} ${border_property_array}
      ${ring_property_array} ${ring_color}  ${outline_property_array} ${outline_color}`}
    />
  {:else}
    <div class="w-[600px] mockup-code">
      <pre data-prefix="~">
        <code>

      {`my-auto w-[400px] h-[400px] ${$padding} ${bg_color} 
      ${border_property_array} ${border_color} ${$border_radius} ${ring_property_array} ${ring_color}
${outline_property_array} ${outline_color}`}

        </code>
      </pre>
    </div>
  {/if}
</div>
