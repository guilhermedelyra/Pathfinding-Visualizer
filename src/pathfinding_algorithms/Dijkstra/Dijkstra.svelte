<script context="module">
  import { grid as _grid } from "../../store.js";
  import { get } from "svelte/store";
  import { dijkstra, getNodesInShortestPathOrder } from "./dijkstra";
  import * as dflt_values from "../../ConstValues";

  export async function visualizeDijkstra() {
    const grid = get(_grid);
    const startNode =
      grid[dflt_values.START_NODE_ROW][dflt_values.START_NODE_COL];
    const finishNode =
      grid[dflt_values.FINISH_NODE_ROW][dflt_values.FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);

    await animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    return nodesInShortestPathOrder;
  }

  async function animateDijkstra(visitedNodesInOrder) {
    return new Promise((resolve, reject) => {
      visitedNodesInOrder.forEach((node, it, arr) => {
        setTimeout(() => {
          if (
            node.type !== dflt_values.NODE_TYPE.Start &&
            node.type !== dflt_values.NODE_TYPE.Finish
          ) {
            _grid.update(grid => {
              grid[node.row][node.col].type = dflt_values.NODE_TYPE.Visited;
              return grid;
            });
          }

          if (it === arr.length - 1) {
            resolve();
          }
        }, 10 * it);
      });
    });
  }
</script>
