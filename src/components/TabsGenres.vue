<template>
  <div v-if="!isMobile()"
       class="w-full flex flex-col my-2 mt-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 px-5 gap-3	items-stretch	mb-20 mt-14">
    <div v-for="item in listGenres" :key="item.name"
         class=" rounded relative flex items-stretch transition-all py-5 px-2 bg-gray-500 cursor-pointer"
         v-bind:class="{ 'bg-red-600': item.name === activeTabElement.name }"
         @click="activeTab(item)">
      <p class="text-white m-auto font-bold">{{ item.name }}</p>
    </div>
  </div>
  <div v-else class="w-full flex flex-col my-2 mt-10">
    <swiper
        :slides-per-group="1"
        :space-between="10"
        :loop="true"
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        :breakpoints="breakpoints"
        class="mySwiper w-full swiper-init relative">
      <swiper-slide v-for="item in listGenres" :key="item.name"
                    class=" rounded relative flex items-stretch transition-all py-8 bg-gray-500"
                    v-bind:class="{ 'bg-red-600': item.name === activeTabElement.name }"
                    @click="activeTab(item)">
        <p class="text-white m-auto font-bold">{{ item.name }}</p>
      </swiper-slide>
      <div class="swiper-button-prev h-full m-0 top-0 left-0 w-20"></div>
      <div class="swiper-button-next h-full m-0 top-0 right-0 w-20"></div>
    </swiper>
  </div>
</template>

<script>
import axios from "axios";
import {LinkAPIListGenres} from '../data/api.const.ts';
import {Swiper, SwiperSlide} from "swiper/vue";

export default {
  name: 'TabsGenre',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      listGenres: [],
      activeTabElement: {},
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        348: {
          slidesPerView: 2.75,
        }
      }
    }
  },
  created() {
    axios.get(LinkAPIListGenres)
        .then(response => {
          this.listGenres = response.data.genres;
          this.activeTab(this.listGenres[Math.floor(Math.random() * response.data.genres.length)]);
        }).catch(e => this.errors.push(e));
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    activeTab(event) {
      if (event.name !== this.activeTabElement.name) {
        this.activeTabElement = event;
        this.$emit('clickOnGenre', event);
      }
    }
  }

};
</script>
