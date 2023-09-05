import { writable } from "svelte/store";

// export const tag_to_add = writable("div");
// export const editable_component = writable("")


export const padding = writable("");
export const color = writable("");


//border properties
export const ring_property = writable(new Map())
export const outline_property = writable(new Map())
export const border_property = writable(new Map())


export const effects_property = writable(new Map())
export const filter_property = writable(new Map())
