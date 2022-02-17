<template>
  <div id="home" class="w-full items-center h-full pt-8">
    <TabsGenre @clickOnGenre="getMoviesByGenre"></TabsGenre>
    <div v-if="moviesList.length" class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 px-5 gap-3	items-stretch	">
      <template v-for="item in moviesList" :key="item.id">
        <card-movie :movie="item"></card-movie>
      </template>
    </div>
    <div v-else class="px-5 py-12 font-bold text-white">
      <p>Aucun film n'est disponible pour ce genre, désolé...</p>
    </div>
  </div>
</template>

<script>
import TabsGenre from '@/components/TabsGenres';
import axios from "axios";
import {LinkAPIListMoviesByGenres} from '@/data/api.const.ts';
import CardMovie from '@/components/CardMovie';

export default {
  name: 'List',
  components: {
    TabsGenre,
    CardMovie
  },
  data() {
    return {
      moviesList: [],
    }
  },
  methods: {
    getMoviesByGenre(genre) {
      axios.get(`${LinkAPIListMoviesByGenres}&with_genres=${genre.id}`)
          .then(response => this.moviesList = response.data.results).catch(e => this.errors.push(e));
    }
  }
}
</script>