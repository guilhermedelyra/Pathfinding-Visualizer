import * as dflt_values from "./constValues.js";
import { compareObj } from "./helpers";

export const getInitialGrid = () => {
  let grid = new Array(dflt_values.N_ROWS).fill(0).map((x, row) =>
    new Array(dflt_values.N_COLS).fill(0).map((y, col) => {
      let type = dflt_values.NODE_TYPE.None;
      const startNode = {
        row: dflt_values.START_NODE_ROW,
        col: dflt_values.START_NODE_COL,
      };
      const finishNode = {
        row: dflt_values.FINISH_NODE_ROW,
        col: dflt_values.FINISH_NODE_COL,
      };
      const currentNode = {
        row,
        col,
      };
      if (compareObj(startNode, currentNode)) {
        type = dflt_values.NODE_TYPE.Start;
      }
      if (compareObj(finishNode, currentNode)) {
        type = dflt_values.NODE_TYPE.Finish;
      }

      return {
        row,
        col,
        type,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
      };
    })
  );

  return grid;
};

export const getNewGridWithWallToggled = (grid, row, col) => {
  const node = grid[row][col];
  const newNode = {
    ...node,
    type:
      node.type === dflt_values.NODE_TYPE.Wall
        ? dflt_values.NODE_TYPE.None
        : dflt_values.NODE_TYPE.Wall,
  };
  grid[row][col] = newNode;

  return grid;
};

export const moveTerminalNode = (grid, lastCell, currentCell, terminalType) => {
  const lastNode = grid[lastCell.row][lastCell.col];
  const currentNode = grid[currentCell.row][currentCell.col];

  const newLastNode = {
    ...lastNode,
    type: dflt_values.NODE_TYPE.None,
  };
  grid[lastCell.row][lastCell.col] = newLastNode;

  const newCurrentNode = {
    ...currentNode,
    type: terminalType,
  };
  grid[currentCell.row][currentCell.col] = newCurrentNode;

  return grid;
};
