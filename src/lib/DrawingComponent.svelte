<script lang="ts">
  export let border_radius: string;
  export let padding: string;
  export let bg_color: string;
  export let border_color: string;
  export let border_width: string;
  export let show_code: boolean;
</script>

<div
  id="pendu"
  class="flex flex-col w-full place-items-center place-content-center"
>
  {#if show_code}
    <div
      class={`my-auto w-[400px] h-[400px] ${padding} ${bg_color} ${border_width} ${border_color} ${border_radius}`}
    >
      hello
    </div>
  {:else}
    <div class="mockup-code">
      <pre>
        <code>

      {`my-auto w-[400px] h-[400px] ${padding} ${bg_color} ${border_width} ${border_color} ${border_radius}`}
        </code>
      </pre>
    </div>
  {/if}
</div>
