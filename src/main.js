import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
import Toaster from "@meforma/vue-toaster";
import '@/assets/css/tailwind.css'
import '@/assets/css/swiper.css'
import '@/assets/css/commons.css'
import 'swiper/swiper-bundle.css';
import SwiperCore, {Navigation, Lazy} from 'swiper/core';

SwiperCore.use([Navigation, Lazy]);
createApp(App)
    .use(Toaster, {position: 'top', maxToasts: 1, duration: 1200})
    .use(router)
    .use(createPinia())
    .mount('#app')
