<template>
    <div class="newsInfo">
        <!-- 大标题 -->
        <h3 class="title">{{newsInfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{newsInfo.add_time | dateformat}}</span>
            <span>点击：{{ newsInfo.click }}次</span>
        </p>
        <hr>
        <!-- 内容 -->
        <div class="content" v-html="newsInfo.content">

        </div>
        <!-- 评论子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';

//导入评论子组件
import comment from "../subcomponent/comment.vue"
export default {
    data () {
        return {
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo() {
            this.$http.get('api/getnew/' + this.id).then( res =>{
                if(res.body.status === 0) {
                    this.newsInfo = res.body.message[0];
                } else {
                    Toast('获取新闻失败')
                }
            })
        }
    },
    components: {
        "comment-box":comment,
    }
}
</script>

<style lang="less" scoped>
    .newsInfo {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin:15px auto;
            color: red;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content {
            img {
                width: 100%
            }
        }
    }
</style>