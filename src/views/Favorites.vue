<template>
  <div id="home" class="w-full items-center h-full pt-8">
    <div class="px-5 pt-16 mb-5">
      <h3 class="text-white font-bold text-2xl ml-12 text-left">Ma Liste</h3>
    </div>
    <div v-if="favoritesList.length" class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 px-5 gap-3	items-stretch	">
      <template v-for="item in favoritesList" :key="item.id">
        <card-movie :movie="item"></card-movie>
      </template>
    </div>
    <div v-else class="px-5 py-12 font-bold text-white">
      <p>Aucun contenu n'est encore dans ma liste...</p>
      <base-button class="mt-5" @clickOnButton="$router.push('/list')">Voir le contenu</base-button>
    </div>
  </div>
</template>

<script>
import CardMovie from '@/components/CardMovie';
import BaseButton from "../components/Base/Button";
import {useFavoritesMoviesStore} from "@/store/Favorites.ts";

export default {
  name: 'List',
  components: {
    BaseButton,
    CardMovie
  },
  data() {
    return {
      favoritesList: [],
    }
  },
  created() {
    const favoritesMoviesStore = useFavoritesMoviesStore();
    this.favoritesList = favoritesMoviesStore.favorites;
    favoritesMoviesStore.$subscribe(() => {
      this.favoritesList = favoritesMoviesStore.favorites;
    })
  }
}
</script>