<template>
    <div class="cmt-contain">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120"> </textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list" v-for="(item,i) in comments" :key="i">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{i + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateformat}}
                </div>
                <div class="cmt-body">
                    {{item.content === 'undefined' ? "此用户很懒":item.content}}
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    props:['id'],
    data () {
        return {
            pageindex:1,
            comments:[]

        }
    },
    created() {
        this.getcomment()
    },
    methods: {
        getcomment () {
            this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageindex).then(res =>{
                if(res.body.status === 0) {
                    this.comments = res.body.message
                } else {
                    Toast("获取评论失败")
                }
            })
        }
    },
}
</script>

<style lang="less" scoped>
    .cmt-contain{
        h3 {
            font-size: 18px;

        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin-bottom: 0px;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                 .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
            
        }
    }
</style>

