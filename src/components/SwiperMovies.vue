<template>
  <div class="w-full flex flex-col my-2 mt-10">
    <h3 class="text-white font-bold text-4xl ml-12 text-left">{{ title }}</h3>
    <div v-if="moviesList.length">
      <swiper
          :slides-per-group="1"
          :space-between="10"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="breakpoints"
          class="mySwiper w-full swiper-init">
        <swiper-slide v-for="item in moviesList" :key="item" class="rounded flex items-stretch transition-all movies-swiper static">
        <template v-if="!!item">
            <card-movie :movie="item"></card-movie>
        </template>
        <div v-else class="rounded relative w-full flex items-stretch transition-all h-48 loading bg-gray-500"></div>
        </swiper-slide>
        <div class="swiper-button-prev h-full m-0 top-0 left-0 w-20"></div>
        <div class="swiper-button-next h-full m-0 top-0 right-0 w-20"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import CardMovie from "./CardMovie";

export default {
  name: 'SwiperMovies',
  props: ['title', 'moviesList'],
  components: {
    CardMovie,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      breakpoints: {
        1536: {
          slidesPerView: 10
        },
        1280: {
          slidesPerView: 8
        },
        1024: {
          slidesPerView: 6
        },
        768: {
          slidesPerView: 4,
          centeredSlides: true
        },
        348: {
          slidesPerView: 2.5,
          centeredSlides: true
        }
      }
    }
  },
};
</script>

<style lang="scss">

.movies-swiper.swiper-slide:hover {
  transition: all .25s ease;
  transform: scale(1.1);
  z-index: 100;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #191919);
}

.loading {
  animation: lazyLoading;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}


</style>