<template>
  <div
      class="flex justify-center items-center w-full h-70v promote-content bg-local bg-cover bg-top bg-center bg-no-repeat
        relative"
      :style="{ backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1)), url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')' }">
    <div class="w-10/12 flex flex-col">
      <div class="flex text-3xl">
        <p class="text-white font-bold mr-1">NETFLUX </p>
        <p class="text-white text-opacity-50">ORIGINALS</p>
      </div>
      <h2 class="text-5xl font-extrabold text-white text-left mt-2 mb-5">{{ movie.title }}</h2>
      <div class="flex">
        <base-button class="mr-5 flex" @clickOnButton="this.$toast.success(`ToDo...`)">
          Regarder
        </base-button>
        <button-favorite :movie="movie"></button-favorite>
      </div>
    </div>
  </div>
</template>

<script>

import BaseButton from "@/components/Base/Button";
import ButtonFavorite from "@/components/ButtonFavorite";

export default {
  name: 'SwiperMovies',
  components: {
    BaseButton,
    ButtonFavorite
  },
  props: ['movie']
};
</script>

<style lang="scss">
.promote-content::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #191919);
}
</style>