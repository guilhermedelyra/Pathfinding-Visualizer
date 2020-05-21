import { grid, mouseIsPressed, lastToggledCell } from "./store.js";
import { get } from "svelte/store";
import { getNewGridWithWallToggled } from "./grid.js";

export const Down = (row, col) => {
  grid.update((existing) => getNewGridWithWallToggled(existing, row, col));
  mouseIsPressed.update(() => true);
  const current_cel = {
    row,
    col,
  };
  lastToggledCell.update(() => current_cel);
};

export const Enter = (row, col) => {
  const current_cel = {
    row,
    col,
  };
  if (
    !get(mouseIsPressed) ||
    Object.entries(get(lastToggledCell)).toString() ===
      Object.entries(current_cel).toString()
  )
    return;
  grid.update((existing) => getNewGridWithWallToggled(existing, row, col));
  lastToggledCell.update(() => current_cel);
};

export const Up = () => {
  mouseIsPressed.update(() => false);
};
