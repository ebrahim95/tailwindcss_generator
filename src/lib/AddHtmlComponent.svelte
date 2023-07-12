<script lang="ts">
  import { tag_to_add, editable_component } from "./stores";
  const tag_collection = ["div", "button"];
  let index_select = "";
  let editable_value = "";
</script>

<div>
  <label class="label" for="editable component">Selected Component</label>
  <select
    bind:value={editable_value}
    id="editable component"
    class="select select-bordered"
    on:change={() => editable_component.update(() => editable_value)}
  >
    <option value="outside">outside</option>
    <option value="inside">inside</option>
  </select>
  <label for="addHtmlComponent" class="label">Add Html Component</label>
  <select
    bind:value={index_select}
    id="addHtmlComponent"
    class="select select-bordered"
  >
    <option value="0">Div</option>
    <option value="1">Button</option>
  </select>
  <button
    class="btn"
    on:click={() => tag_to_add.update(() => tag_collection[index_select])}
  >
    Add
  </button>
</div>
