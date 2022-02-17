<template>
  <div class="rounded relative flex items-stretch transition-all card-movie" @click="addDetailMovie(movie)">
    <img :src="!!movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`:
    'assets/images/poster_path_default.png'" alt=""
         class="w-full rounded relative top-0 left-0">
    <div v-if="isFavoriteMovie" class="absolute bottom-2 right-2 w-6 h-6 shadow-2xl bg-white rounded-full flex">
      <img class="m-auto w-3/4" src="../assets/images/favorite.svg" alt="">
    </div>
  </div>
</template>

<script>
import {useDetailMovieStore} from '@/store/DetailMovie.ts';
import {useFavoritesMoviesStore} from "@/store/Favorites.ts";
import {mapActions} from "pinia";

export default {
  name: 'CardMovie',
  props: ['movie'],
  components: {},
  data() {
    return {
      isFavoriteMovie: false
    }
  },
  created() {
    const favoritesMoviesStore = useFavoritesMoviesStore();
    this.isFavoriteMovie = favoritesMoviesStore.favorites.find(favorite => favorite.id === this.movie.id)
    favoritesMoviesStore.$subscribe(() => {
      this.isFavoriteMovie = favoritesMoviesStore.favorites.find(favorite => favorite.id === this.movie.id);
    })
  },
  methods: {
    ...mapActions(useDetailMovieStore, ['addDetailMovie'])
  }
};
</script>

<style lang="scss">
.card-movie:hover {
  transition: all .25s ease;
  transform: scale(1.1);
  z-index: 100;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(25, 25, 25, 0.64));
}
</style>