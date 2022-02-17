<template>
  <div id="home" class="w-full items-center h-full">
    <forward-content-home :movie="forwardMovie"></forward-content-home>
    <swiper-keep-watching title="Continuer de regarder..."
                          :moviesList="moviesList['CurrentWatching'].length ? moviesList['CurrentWatching'] : Array(10)"></swiper-keep-watching>
    <swiper-movies title="Les nouveautés..."
                   :moviesList="moviesList['SortByPopularity'].length ? moviesList['SortByPopularity'] : Array(10)"></swiper-movies>
    <swiper-movies title="Les Blockbusters..."
                   :moviesList="moviesList['SortByRevenue'].length ? moviesList['SortByRevenue'] : Array(10)"></swiper-movies>
  </div>
</template>

<script>
import SwiperMovies from '@/components/SwiperMovies.vue'
import SwiperKeepWatching from '@/components/SwiperKeepWatching.vue'
import ForwardContentHome from '@/components/ForwardContentHome.vue'
import {LinkAPIMovies} from '../data/api.const.ts';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    SwiperMovies,
    SwiperKeepWatching,
    ForwardContentHome
  },

  data() {
    return {
      forwardMovie: [],
      moviesKeepWatching: [],
      moviesList: [],
      errors: [],
    }
  },
  created() {
    for (const typeSort in LinkAPIMovies) {
      this.moviesList[typeSort] = [];
      axios.get(LinkAPIMovies[typeSort])
          .then(response => {
            if (typeSort === Object.keys(LinkAPIMovies)[0]) {
              this.forwardMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
            }
            this.moviesList[typeSort] = response.data.results;
          }).catch(e => this.errors.push(e));
    }
  }

}

</script>