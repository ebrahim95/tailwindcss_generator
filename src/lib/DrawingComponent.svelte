<script lang="ts">
  import { onMount } from "svelte";
  export let show_code: boolean;

  import {
    padding,
    border_width,
    border_radius,
    tag_to_add,
    color,
    editable_component,
  } from "./stores";

  let bg_color = "";
  let border_color = "border-black";

  $: if ($color.includes("bg")) {
    bg_color = $color;
  } else {
    border_color = $color;
  }

  //NOTE Maybe I should use create element for tag to add and append the variable to the class attribute

  let first = `w-[400px] h-[400px] ${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius}`;
  let second = ``;

  $: second_element = document.createElement($tag_to_add);
  $: second_element.setAttribute("class", second);

  onMount(() => document.getElementById("first").appendChild(second_element));

  $: document?.getElementById("first")?.appendChild(second_element);

  $: if ($editable_component === "outside") {
    first = `w-[400px] h-[400px] ${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius}`;
  } else {
    second = `w-[200px] h-[200px] ${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius}`;
  }
</script>

<div
  id="pendu"
  class="flex flex-col w-full place-items-center place-content-center"
>
  {#if show_code}
    <div id="first" class={`my-auto ${first}`} />
  {:else}
    <div class="mockup-code">
      <pre>
        <code>

      {`my-auto w-[400px] h-[400px] ${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius}`}
        </code>
      </pre>
    </div>
  {/if}
</div>
