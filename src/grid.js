import * as dflt_values from "./ConstValues.js";

export const getInitialGrid = () => {
  let grid = new Array(dflt_values.N_ROWS).fill(0).map((x, row) =>
    new Array(dflt_values.N_COLS).fill(0).map((node, col) => {
      let type = dflt_values.NODE_TYPE.None;

      if (
        row === dflt_values.START_NODE_ROW &&
        col === dflt_values.START_NODE_COL
      ) {
        type = dflt_values.NODE_TYPE.Start;
      }
      if (
        row === dflt_values.FINISH_NODE_ROW &&
        col === dflt_values.FINISH_NODE_COL
      ) {
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
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  if (
    node.type !== dflt_values.NODE_TYPE.Start &&
    node.type !== dflt_values.NODE_TYPE.Finish
  ) {
    const newNode = {
      ...node,
      type:
        node.type === dflt_values.NODE_TYPE.Wall
          ? dflt_values.NODE_TYPE.None
          : dflt_values.NODE_TYPE.Wall,
    };
    newGrid[row][col] = newNode;
  }
  return newGrid;
};
