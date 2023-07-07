<script lang="ts">
    import { tag_to_add } from "./stores";
    const tag_collection = [
        "<div></div>",
        "<button class='btn'>hello</button>",
    ];
    let index_select = "";
</script>

<div>
    <label for="addHtmlComponent" class="label">Add Html Component</label>
    <select
        bind:value={index_select}
        id="addHtmlComponent"
        class="select select-bordered"
    >
        <option value="0"> Div</option>
        <option value="1">Button</option>
    </select>
    <button
        class="btn"
        on:click={() => tag_to_add.update(() => tag_collection[index_select])}
    >
        Add
    </button>
</div>
