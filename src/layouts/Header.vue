<template>
  <header class="fixed w-full z-10">
    <nav class="flex items-center justify-between flex-wrap px-4 lg:px-10 lg:pt-5 pb-8 pt-1 bg-gradient-to-b from-black to-transparent bg-opacity-20">
      <div class="flex items-center flex-no-shrink text-white mr-0">
        <router-link to="/">
          <h1 class="font-semibold text-3xl tracking-tight text-red-600">Netflux</h1>
        </router-link>
      </div>
      <div class=" flex flex-grow justify-end w-auto">
        <router-link class="text-white text-lg hover:text-red-600 transition-all	ml-8 font-bold"
                     v-bind:class="{'text-red-600': currentRoute === '/list'}" to="/list">Liste</router-link>
        <router-link class="text-white text-lg hover:text-red-600 transition-all	ml-8 font-bold"
                     v-bind:class="{'text-red-600': currentRoute === '/favorites'}" to="/favorites">Ma Liste</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      currentRoute: ''
    }
  },
  watch:{
    $route (to){
      this.currentRoute = to.path;
    }
  }
};
</script>