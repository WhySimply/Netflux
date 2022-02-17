<template>
  <div class="backdrop fixed top-0 left-0 h-full w-full bg-black bg-opacity-80 flex items-end overflow-hidden"
       v-bind:class="{'active': movie !== null}">
    <div class="modal rounded relative flex transition-all bg-primary py-5 px-5 w-full max-h-80p
">
      <div class="flex flex-col lg:flex-row" v-if="movie !== null">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt=""
             class="rounded top-0 left-0 w-40 lg:w-60 -mt-24 shadow-xl mx-auto mb-3 lg:mb-0">
        <div class="flex flex-col px-5 items-start">
          <h2 class="text-2xl text-white font-bold mx-auto lg:mx-0">{{ movie.title }}</h2>
          <div class="rounded h-fit p-2 text-white font-bold mt-2 mx-auto lg:mx-0" v-bind:class="{
          'bg-green-500': movie.vote_average > 7,
          'bg-yellow-600': movie.vote_average > 5,
          'bg-yellow-300': movie.vote_average > 4,
          'bg-red-600': movie.vote_average <= 4,
        }"><p>{{ movie.vote_average }}</p></div>
          <p class="mt-2 text-white text-left line-clamp-3 overflow-ellipsis text-center lg:text-left">{{
            movie.overview
            }}</p>
          <div class="flex flex-col lg:flex-row mt-5 mx-auto lg:mx-0">
            <base-button class="mb-3 lg:mb-0 lg:mr-5" @clickOnButton="this.$toast.success(`ToDo...`)">Regarder</base-button>
            <button-favorite :movie="movie"></button-favorite>
          </div>
        </div>
      </div>

      <div class="absolute right-5 -top-5 bg-gray-500 rounded-full flex w-10 h-10 cursor-pointer"
           @click="removeDetailMovie()">
        <img class="m-auto font-bold text-3xl text-primary w-2/4" src="../assets/images/cross.svg" alt="">
      </div>
    </div>
  </div>
  <div></div>
</template>
<script>

import {useDetailMovieStore} from '@/store/DetailMovie.ts';
import BaseButton from "@/components/Base/Button";
import {useFavoritesMoviesStore} from "@/store/Favorites.ts";
import ButtonFavorite from "@/components/ButtonFavorite";
import {mapActions} from "pinia";


export default {
  name: 'DetailMovie',
  components: {ButtonFavorite, BaseButton},
  data() {
    return {
      movie: null,
      isFavorites: false
    }
  },
  created() {
    const detailMovieStore = useDetailMovieStore();
    const favoritesMoviesStore = useFavoritesMoviesStore();
    detailMovieStore.$subscribe(el => {
      if (el.events.newValue) {
        this.movie = el.events.newValue
        this.isFavorites = favoritesMoviesStore.favorites.find(el => el.id === this.movie.id);
      } else {
        this.movie = null;
      }
    });
  },
  methods: {
    ...mapActions(useDetailMovieStore, ['removeDetailMovie'])
  }
};
</script>

<style lang="scss">
.backdrop {
  z-index: 105;
  visibility: hidden;
  opacity: 0;
  transition: all .25s ease;

  &.active {
    visibility: visible;
    opacity: 1;
    transition: all .25s ease;

    .modal {
      transform: translateX(0);
      transition: all .3s ease;
    }
  }
}

.modal {
  transform: translateY(50%);
  transition: all .3s ease;
}
</style>