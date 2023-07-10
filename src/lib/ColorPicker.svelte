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

<div id="bg-color-picker">
    <h2>Color Picker</h2>

    <select
        bind:value={id_change}
        id="edit-component"
        class="select select-bordered my-2"
    >
        <option value="bg">Background</option>
        <option value="border">Border</option>
    </select>
    <div
        on:keypress={handle_color}
        on:click={handle_color}
        id="color-panel"
        class="grid grid-cols-5 gap-2"
    >
        <button
            id="slate-500"
            class="w-12 h-12 border-2 border-black bg-slate-500"
        />
        <button
            id="grey-500"
            class="w-12 h-12 border-2 border-black bg-grey-500"
        />
        <button
            id="zinc-500"
            class="w-12 h-12 border-2 border-black bg-zinc-500"
        />
        <button
            id="neutral-500"
            class="w-12 h-12 border-2 border-black bg-neutral-500"
        />
        <button
            id="stone-500"
            class="w-12 h-12 border-2 border-black bg-stone-500"
        />
        <button
            id="red-500"
            class="w-12 h-12 border-2 border-black bg-red-500"
        />
        <button
            id="orange-500"
            class="w-12 h-12 border-2 border-black bg-orange-500"
        />
        <button
            id="amber-500"
            class="w-12 h-12 border-2 border-black bg-amber-500"
        />
        <button
            id="yellow-500"
            class="w-12 h-12 border-2 border-black bg-yellow-500"
        />
        <button
            id="lime-500"
            class="w-12 h-12 border-2 border-black bg-lime-500"
        />
        <button
            id="green-500"
            class="w-12 h-12 border-2 border-black bg-green-500"
        />
        <button
            id="emerald-500"
            class="w-12 h-12 border-2 border-black bg-emerald-500"
        />
        <button
            id="teal-500"
            class="w-12 h-12 border-2 border-black bg-teal-500"
        />
        <button
            id="cyan-500"
            class="w-12 h-12 border-2 border-black bg-cyan-500"
        />
        <button
            id="sky-500"
            class="w-12 h-12 border-2 border-black bg-sky-500"
        />
        <button
            id="blue-500"
            class="w-12 h-12 border-2 border-black bg-blue-500"
        />
        <button
            id="indigo-500"
            class="w-12 h-12 border-2 border-black bg-indigo-500"
        />
        <button
            id="violet-500"
            class="w-12 h-12 border-2 border-black bg-violet-500"
        />
        <button
            id="purple-500"
            class="w-12 h-12 border-2 border-black bg-purple-500"
        />
        <button
            id="fuchsia-500"
            class="w-12 h-12 border-2 border-black bg-fuchsia-500"
        />
        <button
            id="pink-500"
            class="w-12 h-12 border-2 border-black bg-pink-500"
        />
        <button
            id="rose-500"
            class="w-12 h-12 border-2 border-black bg-rose-500"
        />
    </div>
</div>

<style>
    #color-panel > button:hover {
        border: 4px solid black;
    }
</style>
