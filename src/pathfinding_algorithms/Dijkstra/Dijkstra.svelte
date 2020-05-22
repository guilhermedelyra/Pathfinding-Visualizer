<script context="module">
  import {
    grid as _grid,
    start_node_pos,
    finish_node_pos
  } from "../../store.js";
  import { get } from "svelte/store";
  import { dijkstra, getNodesInShortestPathOrder } from "./dijkstra";
  import * as dflt_values from "../../constValues";

  export async function visualizeDijkstra() {
    const grid = get(_grid);
    const st = get(start_node_pos);
    const fn = get(finish_node_pos);

    const startNode = grid[st.row][st.col];
    const finishNode = grid[fn.row][fn.col];

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
