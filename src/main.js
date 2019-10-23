//入口文件

import Vue from "vue";

import {Header,Swipe, SwipeItem ,Button} from 'mint-ui';
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)


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
Vue.http.options.root = "http://www.liulongbin.top:3005";



import app from './app.vue';

import moment from 'moment'
// 定义全局过滤器
Vue.filter("dateformat",function (data,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(data).format(pattern)
})



var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router
})