<template>
  <div class="w-full flex flex-col my-2 mb-10 -mt-24 relative">
    <h3 class="text-white font-bold text-4xl ml-12 text-left">{{ title }}</h3>
    <swiper
        :slides-per-group="1"
        :space-between="15"
        :loop="true"
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        :breakpoints="breakpoints"
        class="mySwiper w-full swiper-init relative">

      <swiper-slide v-for="item in moviesList" :key="item"
                    class=" rounded relative flex items-stretch transition-all keepwatching-swiper">
        <template v-if="!!item" @click="this.$toast.success('To Do...')">
          <img :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`" alt="" class="w-full rounded">
          <div
              class="detail absolute top-0 left-0 text-white w-full h-full flex items-center justify-center flex-col rounded">
            <div class="relative">
              <video class="w-16 hidden lg:block" muted="" autoplay preload="auto" playsinline="" loop="" tabindex="-1">
                <source src="https://ssl.gstatic.com/stadia/gamers/assets/playbutton-idle.webm" type="video/webm">
              </video>
              <img class=" block absolute top-0 w-16" src="../assets/images/play.svg" alt="">
            </div>
            <div>
              <p class="line-clamp-2 px-5 py-2 font-bold">{{ item.title }}</p>
            </div>
          </div>
        </template>
        <div v-else class="rounded relative w-full flex items-stretch transition-all h-48 loading bg-gray-500"></div>
      </swiper-slide>
      <div class="swiper-button-prev h-full m-0 top-0 left-0 w-20"></div>
      <div class="swiper-button-next h-full m-0 top-0 right-0 w-20"></div>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';

export default {
  name: 'SwiperMovies',
  props: ['title', 'moviesList'],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      breakpoints: {
        1536: {
          slidesPerView: 5
        },
        1280: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2,
          centeredSlides: true
        },
        348: {
          slidesPerView: 1.5,
          centeredSlides: true
        }
      }
    }
  }
};
</script>

<style lang="scss">
.keepwatching-swiper.swiper-slide {

  .detail {
    visibility: hidden;
    opacity: 0;
    transition: all .25s ease;
    cursor: pointer;
  }

  &:hover {
    transition: all .25s ease;
    transform: scale(1.1);
    z-index: 100;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #191919);

    .detail {
      visibility: visible;
      transition: all .25s ease;
      opacity: 1;
      background: rgba(0, 0, 0, .65);
    }
  }
}

.loading {
  animation: lazyLoading;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}

@media (max-width: 800px) {
  .keepwatching-swiper.swiper-slide {
    transition: all .25s ease;
    z-index: 100;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #191919);

    .detail {
      visibility: visible;
      transition: all .25s ease;
      opacity: 1;
      background: rgba(0, 0, 0, .65);
    }
  }
}
</style>