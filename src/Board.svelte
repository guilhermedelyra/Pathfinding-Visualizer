<script>
  import Node from "./Node.svelte";
  import { grid } from "./store.js";
  import * as dflt_values from "./ConstValues.js";

  let board;
  const unsubscribe = grid.subscribe(value => {
    board = value;
  });
</script>

<style>
  .board {
    display: grid;
    grid-template-rows: repeat(18, 1fr);
    grid-template-columns: repeat(50, 1fr);
    background-color: #fbfbfb;
    margin: 5em auto;
    width: 80vw;
    height: 65vh;

    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* Internet Explorer / Edge */
    user-select: none;
    /* Non-prefixed version */
  }
</style>

<div class="board">
  {#each board as row, i}
    {#each row as node, j}
      <Node row={i} col={j} type={node.type} />
    {/each}
  {/each}
</div>
