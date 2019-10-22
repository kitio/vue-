//入口文件

import Vue from "vue";

import {Header } from 'mint-ui';
Vue.component(Header.name,Header)

//导入mui样式
import "./lib/mui/css/mui.min.css"


import app from './app.vue';



var vm = new Vue({
    el:"#app",
    render:c => c(app)
})