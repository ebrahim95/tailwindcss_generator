import { writable } from "svelte/store";

export const tag_to_add = writable("div");
export const padding = writable("");
export const color = writable("");


export const border_style = writable(new Map())
export const border_width = writable("");
export const border_radius = writable("");


export const editable_component = writable("")
export const ring_property = writable(new Map())
export const outline_property = writable(new Map())


export const effects_property = writable(new Map())
