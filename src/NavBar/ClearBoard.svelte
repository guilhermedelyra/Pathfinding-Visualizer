<script>
  import { getInitialGrid } from "./../grid.js";
  import { grid } from "./../store.js";
  const cleanUp = () => {
    grid.update(() => getInitialGrid());
  };
</script>

<style>
  button {
    background-color: #8884ff;
    vertical-align: center;
    text-decoration: none;
    display: inline-block;
    color: #ff9;
    padding: 18px 15px;
    cursor: pointer;
    width: 10em;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.2);
    border: none;
  }
  button:hover {
    background-color: #6d6ade;
  }
</style>

<button on:click={cleanUp}>🧹 Clear Board</button>
