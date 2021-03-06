/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
 import VueRouter from 'vue-router';
 import router from './router'

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter)


const app = new Vue({
    el: '#app',
    router
});
