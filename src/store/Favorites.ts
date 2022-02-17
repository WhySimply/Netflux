import {defineStore} from "pinia";

export const useFavoritesMoviesStore = defineStore({
    id: 'FavoritesMovieStore',
    state: () =>
        ({
            favorites: [],
        }),
    getters: {},
    actions: {
        /**
         * Add item to the cart
         * @param movie
         */
        addFavoriteMovie(movie) {
            this.favorites.push(movie);
        },

        /**
         * Add item to the cart
         * @param movie
         */
        removeFavoriteMovie(movie) {
            this.favorites = this.favorites.filter(obj => obj.id !== movie.id);
        }
    }
})