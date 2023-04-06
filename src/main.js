import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Editor from "vue3-editor"
import '@/assets/client/css/animate.css'
import '@/assets/client/css/fontawesome-all.css'
import '@/assets/client/css/line-awesome.min.css'
import '@/assets/client/css/magnific-popup/magnific-popup.css'
// import '@/assets/client/css/owl-carousel/owl.carousel.css'
import '@/assets/client/css/base.css'
import '@/assets/client/css/shortcodes.css'
import '@/assets/client/css/style.css'
import '@/assets/client/css/custom.css'
import '@/assets/client/css/responsive.css'

let app;
// firebase.getAuth().onAuthStateChanged(() =>
//     {
        if (!app) {
            const aPP=createApp(App)
            aPP.use(store)
            aPP.use(router)
            aPP.use(Vue3Editor)
            aPP.config.productionTip = false
            aPP.mount('#app')
        }
    // });

