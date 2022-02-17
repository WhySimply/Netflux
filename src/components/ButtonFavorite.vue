<template>
  <base-button @clickOnButton="gestureFavoritesButton(movie)">{{isFavorites ? 'Retirer de ma liste' : 'Ajouter a ma liste'}}</base-button>
</template>

<script>
import BaseButton from "@/components/Base/Button";
import {useFavoritesMoviesStore} from "@/store/Favorites.ts";

export default {
  name: 'ButtonFavorite',
  components: {BaseButton},
  props: ['movie'],
  data() {
    return {
      isFavorites: false
    }
  },
  created() {
    const favoritesMoviesStore = useFavoritesMoviesStore();
    this.isFavorites = favoritesMoviesStore.favorites.find(el => el.id === this.movie.id);
  },
  methods: {
    gestureFavoritesButton(movie) {
      const favoritesMoviesStore = useFavoritesMoviesStore();
      if (this.isFavorites) {
        favoritesMoviesStore.removeFavoriteMovie(movie);
        this.$toast.success(`Le film n'est plus dans ma liste !`);
      } else {
        favoritesMoviesStore.addFavoriteMovie(movie);
        this.$toast.success(`Le film est dans ma liste !`);
      }
      this.isFavorites = favoritesMoviesStore.favorites.find(el => el.id === this.movie.id);
    }
  }
}
</script>