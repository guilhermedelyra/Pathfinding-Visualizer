<script>
  import Board from "./Board.svelte";
  import NavBar from "./NavBar/NavBar.svelte";
  import * as handleMouse from "./handleMouse.js";
  import Icon from "svelte-awesome";
  import * as icons from "svelte-awesome/icons";
</script>

<style>
  :global(html) {
    background: url(https://i.imgur.com/ltOvZqa.png);
  }
  .App {
    min-height: 100%;
  }
</style>

<main class="App" on:mouseup={() => handleMouse.Up()}>
  <NavBar />
  <Board />
</main>
