<script lang="ts">
    import { color } from "./stores";

    function handle_color() {
        const id: string = document.querySelector(
            "#color-panel > button:focus"
        )?.id;

        color.update(() => id_change + "-" + id);
    }
    let id_change = "bg";
</script>

<div id="color-picker" class="mb-3">
    <label class="label" for="edit-component">Color Picker</label>

    <select
        bind:value={id_change}
        id="edit-component"
        class="select select-bordered my-2"
    >
        <option value="bg">Background</option>
        <option value="border">Border</option>
        <option value="ring">Ring</option>

        <option value="outline">Outline</option>
    </select>
    <div
        on:keypress={handle_color}
        on:click={handle_color}
        id="color-panel"
        class="grid grid-cols-5 gap-2"
    >
        <button id="slate-500" class="bg-slate-500" />
        <button id="grey-500" class="bg-grey-500" />
        <button id="zinc-500" class="bg-zinc-500" />
        <button id="neutral-500" class="bg-neutral-500" />
        <button id="stone-500" class="bg-stone-500" />
        <button id="red-500" class="bg-red-500" />
        <button id="orange-500" class="bg-orange-500" />
        <button id="amber-500" class=" bg-amber-500" />
        <button id="yellow-500" class=" bg-yellow-500" />
        <button id="lime-500" class=" bg-lime-500" />
        <button id="green-500" class=" bg-green-500" />
        <button id="emerald-500" class=" bg-emerald-500" />
        <button id="teal-500" class=" bg-teal-500" />
        <button id="cyan-500" class=" bg-cyan-500" />
        <button id="sky-500" class=" bg-sky-500" />
        <button id="blue-500" class=" bg-blue-500" />
        <button id="indigo-500" class=" bg-indigo-500" />
        <button id="violet-500" class=" bg-violet-500" />
        <button id="purple-500" class=" bg-purple-500" />
        <button id="fuchsia-500" class=" bg-fuchsia-500" />
        <button id="pink-500" class=" bg-pink-500" />
        <button id="rose-500" class=" bg-rose-500" />
    </div>
</div>

<style>
    #color-panel > button:hover {
        border: 4px solid black;
    }

    #color-panel > button {
        border: 2px solid black;
        width: 3rem;
        height: 3rem;
    }
</style>
