<script lang="ts">
    import { effects_property } from "./stores";

    let box_shadow_value: string = "";
</script>

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
