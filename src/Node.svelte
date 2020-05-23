<script>
  import * as handleMouse from "./handleMouse.js";
  import Icon from "svelte-awesome";
  import * as icons from "svelte-awesome/icons";
  export let col, type, row;
</script>

<style>
  .node {
    outline: 1px solid rgb(175, 216, 248); /* #1b1f3b; /* rgb(175, 216, 248) */
    background-color: #fbfbfb;
    text-align: center;
  }
  /* // BBCDE5 */
  .node-finish {
    cursor: pointer;
  }

  .node-start {
    cursor: pointer;
  }

  .arrow {
    border-bottom-style: solid;
    border-bottom-width: 0.25em;
    border-right-style: solid;
    border-right-width: 0.25em;
    border-color: #42033d;
    margin: 0 auto;
    display: inline-block;
    height: 0.8em;
    position: relative;
    width: 0.8em;
    -moz-transform: rotate(315deg);
    -ms-transform: rotate(315deg);
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    right: 15%;
    top: 15%;
  }

  /* .arrow::after {

    height: 12px;
    position: absolute;
    width: 12px;
  } */
  :global(.startIcon) {
    margin: 0 auto;
    fill: #1b1f3b !important; /* #40f99b; */
  }

  :global(.finishIcon) {
    fill: #d33f49 !important; /* #f0386b; */
    /* height: 1.3em;
    width: 1.3em; */
    position: relative;
    top: 15%;
    margin: auto;
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
  on:mouseenter={() => handleMouse.Enter(row, col)}>
  {#if type === 'node-start'}
    <span class="arrow" title="Next" />
    <!-- <Icon data={icons.angleRight} scale="1" class="startIcon" /> -->
  {:else if type === 'node-finish'}
    <Icon data={icons.bullseye} scale="1.2" class="finishIcon" />
  {/if}
  <!-- <div class="container"> -->
  <!-- </div> -->
</div>
