// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store/store'
import store from './components/Vuex/store/store'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Color from '@/components/ColorManupulation';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

Vue.use(VueResource);
Vue.use(vuetify);
Vue.use(BootstrapVue);
/*globally*/
Vue.component('my-color',Color)

/* Check MainDirective.vue*/
Vue.directive('highlightTest', {
  bind(el,binding,vnode){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;

    if(binding.modifiers['delayed']){
      delay = 1000;
    }
    setTimeout(()=>{
      if(binding.arg == 'backgroundiets'){
        el.style.backgroundColor = binding.value
      }else{
        el.style.color = binding.value
      }
    },delay)
  }
});

Vue.filter('filter-lowercase',function (text) {
  return text.toLowerCase()
})

/* Global API Url  */
// Vue.http.options.root = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=AIzaSyARXQL2uG2J79svWtE3BcO8HVP0k9V-tfU'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
})
