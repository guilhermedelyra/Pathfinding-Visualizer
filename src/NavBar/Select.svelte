<script>
  import { selected_algorithm } from "./../store.js";
  let selected;
  $: selected_algorithm.update(() => selected);
</script>

<style>
  .select-css {
    background-color: #8884ff;
    vertical-align: center;
    text-align: center;
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

    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    -moz-appearance: none;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
      no-repeat right #8884ff;
    -webkit-appearance: none;
    background-repeat: no-repeat, repeat;
    background-position: right 0.3em top 50%, 0 0;
  }
  .select-css::-ms-expand {
    display: none;
  }
  .select-css:hover {
    background-color: #6d6ade;
  }
  .select-css option {
    font-weight: normal;
  }

  option {
    background-color: #f0e2fc;
    color: #2c343f;
  }
</style>

<select class="select-css" bind:value={selected}>
  <option value="" selected disabled hidden>📚 Algorithms</option>
  <option value="Dijkstra">💠 Dijkstra</option>
  <option value="A*">‍🌟 A*</option>
  <option value="DFS">‍🔷 DFS</option>
  <option value="BFS">🔶 BFS</option>
</select>
