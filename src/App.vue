<template>
  <h1>SUPERHIT MOVIE INFORMATION📽🎬</h1>
  <movie-search />
</template>

<script>
import MovieSearch from "./components/MovieSearch.vue";

export default {
  name: "App",
  components: {
    MovieSearch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
