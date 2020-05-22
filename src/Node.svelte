<script>
  import * as handleMouse from "./HandleMouse.js";
  export let col, type, row;
</script>

<style>
  .node {
    outline: 1px solid rgb(175, 216, 248); /* #1b1f3b; /* rgb(175, 216, 248) */
    background-color: #fbfbfb;
  }
  /* // BBCDE5 */
  .node-finish {
    background-color: red; /* #f0386b; */
  }

  .node-start {
    background-color: green; /* #40f99b; */
  }

  .node-visited {
    animation-name: visitedAnimation;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes visitedAnimation {
    0% {
      transform: scale(0.3);
      background-color: rgba(0, 0, 66, 0.75);
      border-radius: 100%;
    }
    50% {
      background-color: rgba(17, 104, 217, 0.75);
    }
    75% {
      transform: scale(1.2);
      background-color: rgba(0, 217, 159, 0.75);
    }
    100% {
      transform: scale(1);
      background-color: rgba(0, 190, 218, 0.75);
    }
  }

  .node-wall {
    animation-name: wallAnimation;
    animation-duration: 0.4s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes wallAnimation {
    0% {
      transform: scale(0.3);
      background-color: rgb(12, 53, 71); /* #ffd9da rgb(12, 53, 71); */
    }

    50% {
      transform: scale(1.2);
      background-color: rgb(12, 53, 71);
    }

    100% {
      transform: scale(1);
      background-color: rgb(12, 53, 71);
    }
  }

  .node-shortest-path {
    animation-name: shortestPath;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes shortestPath {
    0% {
      transform: scale(0.6);
      background-color: rgb(255, 254, 106);
    }

    50% {
      transform: scale(1.2);
      background-color: rgb(255, 254, 106);
    }

    100% {
      transform: scale(1);
      background-color: rgb(255, 254, 106);
    }
  }
</style>

<div
  id={`node-${row}-${col}`}
  class={`node ${type}`}
  on:mousedown={() => handleMouse.Down(row, col)}
  on:mouseenter={() => handleMouse.Enter(row, col)} />
