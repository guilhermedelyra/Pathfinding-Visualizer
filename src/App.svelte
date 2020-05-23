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
    text-align: center;
  }
  :global(.footer) {
    margin: 0 auto;
    fill: #e5e7f5 !important; /* #40f99b; */
  }
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 40em;
    margin: -1em auto;
  }

  .bar {
    color: #fbfbfb;
    font-size: 1.5em;
  }

  a,
  p {
    display: inline-block;
    margin: 0 auto;
    /* padding: 3px 0 6px; */
    color: #92a2a3;
    font-size: 1.5em;
    text-decoration: none;
  }
</style>

<main class="App" on:mouseup={() => handleMouse.Up()}>
  <NavBar />
  <Board />
  <footer class="container">
    <a
      target="_blank"
      href="https://github.com/guilhermedelyra/Pathfinding-Visualizer">
      View on Github
    </a>
    <p class="bar">|</p>
    <a
      target="_blank"
      href="https://github.com/guilhermedelyra/Pathfinding-Visualizer/blob/master/LICENSE.md">
      MIT License
    </a>
    <p class="bar">|</p>
    <!-- <p>Contact me:</p> -->
    <a href="http://github.com/guilhermedelyra" target="_blank">
      <Icon data={icons.github} scale="2.5" class="footer" />
    </a>
    <a href="https://t.me/guilhermedlp" target="_blank">
      <Icon data={icons.telegram} scale="2.5" class="footer" />
    </a>
    <a href="https://www.facebook.com/guilyra12" target="_blank">
      <Icon data={icons.facebook} scale="2.5" class="footer" />
    </a>
  </footer>
  <br />
  <div />
</main>
