import {
  grid,
  mouseIsPressed,
  lastToggledCell,
  lastTerminalType,
  start_node_pos,
  finish_node_pos,
} from "./store.js";
import { get } from "svelte/store";
import { getNewGridWithWallToggled, moveTerminalNode } from "./grid.js";
import { NODE_TYPE } from "./constValues";
import { compareObj } from "./helpers";

export const Down = (row, col) => {
  grid.update((current_grid) => {
    if (
      current_grid[row][col].type !== NODE_TYPE.Visited &&
      current_grid[row][col].type !== NODE_TYPE.ShortestPath
    ) {
      mouseIsPressed.update(() => true);
      const current_cel = { row, col };
      lastToggledCell.update(() => current_cel);

      if (
        current_grid[row][col].type === NODE_TYPE.None ||
        current_grid[row][col].type === NODE_TYPE.Wall
      ) {
        return getNewGridWithWallToggled(current_grid, row, col);
      } else {
        lastTerminalType.update(() => current_grid[row][col].type); // START or FINISH type
      }
    }
    return current_grid;
  });
};

function updateTerminalNode(current_grid, last_cell, current_cell, type) {
  lastToggledCell.update(() => current_cell);

  var update_pos = {
    [NODE_TYPE.Start]: start_node_pos,
    [NODE_TYPE.Finish]: finish_node_pos,
  };
  update_pos[type].update(() => current_cell);
  return moveTerminalNode(current_grid, last_cell, current_cell, type);
}

function validNewTerminalPosition(node, type) {
  const types = [NODE_TYPE.Start, NODE_TYPE.Finish];
  const typeIdx = type === types[0] ? 0 : 1;
  return types.includes(type) && node.type !== types[1 - typeIdx];
}

export const Enter = (row, col) => {
  const current_cell = { row, col };
  const last_cell = get(lastToggledCell);

  if (!get(mouseIsPressed) || compareObj(last_cell, current_cell)) return;

  grid.update((current_grid) => {
    const type = get(lastTerminalType);
    if (type === NODE_TYPE.None) {
      lastToggledCell.update(() => current_cell);
      return getNewGridWithWallToggled(current_grid, row, col);
    } else if (validNewTerminalPosition(current_grid[row][col], type)) {
      updateTerminalNode(current_grid, last_cell, current_cell, type);
    }

    return current_grid;
  });
};

export const Up = () => {
  mouseIsPressed.update(() => false);
  lastTerminalType.update(() => NODE_TYPE.None);
};
