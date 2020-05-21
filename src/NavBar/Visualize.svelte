<script context="module">
  export const animateShortestPath = nodesInShortestPathOrder => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        if (
          node.type !== dflt_values.NODE_TYPE.Start &&
          node.type !== dflt_values.NODE_TYPE.Finish
        ) {
          _grid.update(grid => {
            grid[node.row][node.col].type = dflt_values.NODE_TYPE.ShortestPath;
            return grid;
          });
        }
      }, 50 * i);
    }
  };
</script>

<script>
  import * as dflt_values from "./../ConstValues";
  import { visualizeDijkstra } from "./../pathfinding_algorithms/Dijkstra/Dijkstra.svelte";
  //   import { visualizeDFS } from "./../pathfinding_algorithms/DFS/DFS.svelte";
  //   import { visualizeBFS } from "./../pathfinding_algorithms/BFS/BFS.svelte";
  //   import { visualizeAStar } from "./../pathfinding_algorithms/A*/A*.svelte";

  import { selected_algorithm, grid as _grid } from "./../store.js";

  const visualize = {
    Dijkstra: visualizeDijkstra
    // DFS: visualizeDFS,
    // BFS: visualizeBFS,
    // "A*": visualizeAstar
  };
  let algorithm_name;
  const unsubscribe = selected_algorithm.subscribe(value => {
    algorithm_name = value;
  });

  async function visualizeAlgorithm() {
    if (algorithm_name !== undefined && algorithm_name !== "") {
      visualize[algorithm_name]().then(nodesInShortestPathOrder => {
        animateShortestPath(nodesInShortestPathOrder);
      });
    }
  }
</script>

<style>
  button.run {
    background-color: #454ade;
    vertical-align: center;
    text-decoration: none;
    display: inline-block;
    color: #ff9;
    padding: 18px 15px;
    cursor: pointer;
    width: 14em;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.2);
    border: none;
  }
  button.run:hover {
    background-color: #373bc8;
  }
</style>

<button class="run" on:click={visualizeAlgorithm}>
  {#if algorithm_name == undefined || algorithm_name == ''}
    👈 Choose one algorithm
  {:else}👁️ Visualize {algorithm_name}!{/if}
</button>
