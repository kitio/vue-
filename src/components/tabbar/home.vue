<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
                
            </mt-swipe-item>
        </mt-swipe>

        <!-- 这是九宫格 到六宫格的改造 -->

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu1.png" alt="">
		        <div class="mui-media-body">新闻资讯</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu2.png" alt="">
		        <div class="mui-media-body">图片分享</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu3.png" alt="">
		        <div class="mui-media-body">商品购买</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu4.png" alt="">
		        <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu5.png" alt="">
		        <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/menu6.png" alt="">
		        <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                lunbotuList:[],
            }
        },
        created () {
            this.getLunbotu()
        },
        methods:{
            getLunbotu () {
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res =>{
                    if(res.body && res.body.status == 0) {
                        this.lunbotuList = res.body.message
                    } else {
                        Toast('轮播图获取失败')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
    img {
        width: 60px;
        height: 60px;
    }
    .mui-media-body {
        font-size: 13px;
    }
}


</style>
