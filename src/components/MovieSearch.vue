<template>
  <div class="container">
    <div class="form-outline">
      <input
        type="search"
        id="form1"
        placeholder="Enter Movie name to search"
        class="form-control"
        v-model="searchMovie"
        style="margin-top: 40px"
      />

      <button @click="searchData" type="button" class="btn btn-primary mt-2">
        Search
      </button>
    </div>
  </div>

  <div class="c1 mt-4">
    <div class="row">
      <div
        class="card"
        style="width: 30rem"
        v-for="movie in movies"
        :key="movie.id"
      >
        <img
          class="card-img-top"
          :src="movie.show.image"
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title">name: {{ movie.show.name }}</h4>
          <p class="card-text">id: {{ movie.show.id }}</p>
          <p class="card-text">language: {{ movie.show.language }}</p>
          <p class="card-text" style="cursor: pointer">
            url: {{ movie.show.url }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchMovie: "",
    };
  },

  methods: {
    searchData() {
      // this.$store.dispatch({ type: "fetchMovies", value: this.searchMovie });
      this.$store.dispatch("fetchMovies", this.searchMovie);
    },
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },

  // mounted() {
  //   this.$store.dispatch("fetchMovies");
  // },
};
</script>

<style>
.container {
  border: 2px solid black;
  widows: 600px;
  height: 250px;
  background-image: url("https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60");
}
.c1 {
  column-gap: 40px;
  display: inline-flex;
}
.row {
}
</style>