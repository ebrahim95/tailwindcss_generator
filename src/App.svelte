<script lang="ts">
    // import svelteLogo from "./assets/svelte.svg";
    // import viteLogo from "/vite.svg";
    import PaddingPanel from "./lib/PaddingPanel.svelte";
    import DrawingComponent from "./lib/DrawingComponent.svelte";
    import ColorPicker from "./lib/ColorPicker.svelte";
    import BorderPanel from "./lib/BorderPanel.svelte";
    import AddHtmlComponent from "./lib/AddHtmlComponent.svelte";

    let show_code: boolean = true;
    let panel_toggle: string = "border";

    //NOTE Add autocompletion to the select files
    //NOTE Maybe add skeleton ui for easy shipping
    //NOTE Regex for decimals
    //NOTE Where I need to edit and how will it be achieved
    //NOTE So I need abstract the left right top and bottom
    //NOTE abstract border and padding
</script>

<!--

  Add the properties of flex box, width, height, color, font
  Second if a simple component is made, display it's properties on the side
-->
<main class="flex flex-row w-12/12">
    <section
        class="w-3/12 flex flex-col items-start border-black border-r-4 p-4"
    >
        <h1>Tailwind CSS Component Generator</h1>
        <button on:click={() => (show_code = !show_code)} class="btn"
            >Show Code</button
        >

        <button />

        <AddHtmlComponent />
        <ColorPicker />
        <select
            bind:value={panel_toggle}
            id="panel_toggle"
            class="select select-bordered mt-3"
        >
            <option value="border">Border</option>
            <option value="padding">Padding</option>
        </select>
        {#if panel_toggle === "border"}
            <BorderPanel />
        {:else}
            <PaddingPanel />
        {/if}
    </section>
    <DrawingComponent {show_code} />
</main>

<style>
    /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    }
    .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
    } */
</style>
