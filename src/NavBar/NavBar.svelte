<script>
  import Visualize from "./Visualize.svelte";
  import ClearBoard from "./ClearBoard.svelte";
  import Select from "./Select.svelte";

  let algorithm_name = "Djikstra";
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);
  nav {
    display: table;
    margin: 25px auto;
    box-shadow: 0px 1px 0px #023333;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul ul {
    opacity: 0;
    position: absolute;
    top: 160%;
    visibility: hidden;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
  }

  ul li:hover > ul {
    z-index: 1000;
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  ul li {
    float: left;
    position: relative;
  }
  ul ul li {
    float: none;
  }
  ul li {
    background-color: #8884ff;
    cursor: pointer;
  }
  ul li a {
    vertical-align: top;
    text-decoration: none;
    display: inline-block;
    color: #ff9;
    padding: 18px 15px;
    width: 6em;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.2);
  }

  ul li:hover {
    background-color: #6d6ade;
  }
  ul li a:hover {
    background-color: #6d6ade;
  }

  ul li.ignore-css {
    all: unset;
    display: inline-block;
    float: left;
  }
</style>

<nav>
  <ul>
    <li class="ignore-css">
      <Select />
    </li>
    <li class="ignore-css">
      <Visualize />
    </li>
    <li class="ignore-css">
      <ClearBoard />
    </li>
  </ul>
</nav>
