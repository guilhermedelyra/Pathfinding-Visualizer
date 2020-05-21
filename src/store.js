import { writable } from "svelte/store";
import { getInitialGrid } from "./grid.js";

export const mouseIsPressed = writable(false);
export const lastToggledCell = writable({ row: -1, col: -1 });
export const grid = writable(getInitialGrid());
export const selected_algorithm = writable();
