<script>
  import Node from "./Node.svelte";
  import { grid } from "./store.js";

  let board;
  const unsubscribe = grid.subscribe(value => {
    board = value;
  });
</script>

<style>
  .board {
    display: block;

    margin: 45px 0 0;
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

  .row {
    margin-top: -0.25em;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fbfbfb;
    display: inline-block;
  }
</style>

<div class="board">
  {#each board as row, i}
    <div class="row">
      {#each row as node, j}
        <Node row={i} col={j} type={node.type} />
      {/each}
    </div>
  {/each}
</div>
