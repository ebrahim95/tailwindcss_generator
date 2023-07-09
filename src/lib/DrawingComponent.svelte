<script lang="ts">
  export let bg_color: string;
  export let border_color: string;
  export let show_code: boolean;

  import { padding, border_width, border_radius, tag_to_add } from "./stores";
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
