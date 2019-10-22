//入口文件

import Vue from "vue";

import {Header } from 'mint-ui';
Vue.component(Header.name,Header)

//导入mui样式
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"


//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'


import app from './app.vue';



var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router
})