import { writable } from "svelte/store";
import { getInitialGrid } from "./grid.js";

import {
    START_NODE_ROW,
    START_NODE_COL,
    FINISH_NODE_ROW,
    FINISH_NODE_COL,
} from "./constValues";

export const start_node_pos = writable({
    row: START_NODE_ROW,
    col: START_NODE_COL,
});

export const finish_node_pos = writable({
    row: FINISH_NODE_ROW,
    col: FINISH_NODE_COL,
});

export const mouseIsPressed = writable(false);
export const lastToggledCell = writable({ row: -1, col: -1 });
export const lastTerminalType = writable("");
export const grid = writable(getInitialGrid());
export const selected_algorithm = writable();
