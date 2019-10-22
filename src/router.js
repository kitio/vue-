import VueRouter from 'vue-router'

//导入路由组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'

//创建路由对象
var router = new VueRouter({
    routes:[
       {path:'/home',component:home},
       {path:'/member',component:member},
       {path:'/shopcar',component:shopcar},
       {path:'/search',component:search}
    ],
    linkActiveClass:'mui-active'
})

export default router