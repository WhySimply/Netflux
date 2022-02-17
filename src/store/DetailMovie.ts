import {defineStore} from "pinia";

export const useDetailMovieStore = defineStore({
    id: 'detailMovieStore',
    state: () =>
        ({
            movie: null,
        }),
    getters: {},
    actions: {
        /**
         * Add item to the cart
         * @param movie
         */
        addDetailMovie(movie) {
            this.movie = movie;
        },

        /**
         * Add item to the cart
         */
        removeDetailMovie() {
            this.movie = null;
        }
    }
})