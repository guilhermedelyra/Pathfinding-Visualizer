<script>
  import Board from "./Board.svelte";
  import NavBar from "./NavBar/NavBar.svelte";
  import * as handleMouse from "./HandleMouse.js";
</script>

<style>
  :global(html) {
    background: url(https://i.imgur.com/ltOvZqa.png);
  }
  .App {
    min-height: 100%;
    text-align: center;
  }
</style>

<main class="App" on:mouseup={() => handleMouse.Up()}>
  <NavBar />
  <Board />
</main>
