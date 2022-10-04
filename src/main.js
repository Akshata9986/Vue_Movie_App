import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex"
import axios from "axios"

let store = createStore({
    state() {
        return {
            movies: [],
        }
    },

    mutations: {
        fetchMovies(state, payload) {
            state.movies = payload
        }
    },
    actions: {
        async fetchMovies(context, searchMovie) {
            try {
                let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchMovie}`)
                console.log("response", res);
                let resMovies = res.data;
                console.log("resMovies", resMovies);
                context.commit("fetchMovies", resMovies)
            }
            catch (err) {
                console.log("error", err);
            }
        }
    }
})
let app = createApp(App)
app.use(store)
app.mount('#app')
