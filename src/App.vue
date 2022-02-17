<template>
  <div id="app" class="h-full">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <detail-movie></detail-movie>

  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import DetailMovie from '@/components/DetailMovie.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    DetailMovie
  }
}
</script>

<style>

html, body {
  background: rgba(25, 25, 25, 1);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
