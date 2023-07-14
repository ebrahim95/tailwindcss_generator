<script lang="ts">
    import { ring_width } from "./stores";

    let ring_value = "";

    $: ring_width.update(() => {
        return ring_value;
    });
</script>

<div class="join my-2">
    <label class="label px-3 bg-slate-100 join-item" for="ring-panel"
        >Width
    </label>
    <select
        id="ring-panel"
        class="select select-bordered join-item"
        bind:value={ring_value}
    >
        <option value="ring-0">Ring 0</option>
        <option value="ring-1">Ring 1</option>
        <option value="ring-2">Ring 2</option>
        <option value="ring">Ring</option>
        <option value="ring-4">Ring 4</option>
        <option value="ring-8">Ring 8</option>
    </select>
</div>
