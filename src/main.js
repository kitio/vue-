//入口文件

import Vue from "vue";

import {Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//导入mui样式
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"


//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

//导入vue-resource
import vueResource from 'vue-resource';
Vue.use(vueResource);



import app from './app.vue';



var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router
})