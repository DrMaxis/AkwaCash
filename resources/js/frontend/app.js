
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import '../bootstrap';
import '../plugins';
import './vendor/circle-progress/circle-progress.min';
import './vendor/cookie/jquery.cookie';
import './vendor/bootstrap/footable';
import './vendor/intlTelInput/utils';
import Vue from 'vue';
import  intlTelInput from 'intl-tel-input';
import Swiper from 'swiper';
window.Vue = Vue; 
window.Swiper = Swiper;
window.intlTelInput = intlTelInput;
/* Vue.use(VueMaterial); */
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

/* Vue.component('example-component', require('./components/ExampleComponent.vue').default); */
/*  Vue.component('dial-payment', require('./components/DialPaymentComponent.vue').default);   */
    

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/* const app = new Vue({
    el: '#dial-payment',
});
  */
