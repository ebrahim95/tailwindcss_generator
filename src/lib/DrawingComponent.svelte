<script lang="ts">
    export let show_code: boolean;

    import {
        padding,
        border_width,
        border_radius,
        tag_to_add,
        color,
    } from "./stores";

    let bg_color = "";
    let border_color = "";

    $: if ($color.includes("bg")) {
        bg_color = $color;
    } else {
        border_color = $color;
    }

    //NOTE Maybe I should use create element for tag to add and append the variable to the class attribute

    let first = `${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius}`;
    let second = `${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius}`;
</script>

<div
    id="pendu"
    class="flex flex-col w-full place-items-center place-content-center"
>
    {#if show_code}
        <div
            class={`my-auto w-[400px] h-[400px] ${$padding} ${bg_color} ${$border_width} ${border_color} ${$border_radius}`}
        >
            {@html $tag_to_add}
        </div>
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
