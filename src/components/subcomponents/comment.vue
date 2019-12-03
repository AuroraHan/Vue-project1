<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论的内容(最多120字)" maxlength="120" v-model="content"></textarea>

        <mt-button type="primary" size="large" @click="add">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="item in list" :key="item.time">
                <div class="cmt-title">
                    第{{item.ls}}楼 &nbsp;&nbsp;用户：匿名用户 &nbsp;&nbsp; 发表时间：{{item.time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>

            <div class="cmt-item">
                <div class="cmt-title">
                    第X楼 &nbsp;&nbsp;用户：匿名用户 &nbsp;&nbsp; 发表时间：2020-12-12 12:12:12
                </div>
                <div class="cmt-body">
                    众里寻他千百度 慕然回首那人却在灯火阑珊处
                </div>
            </div>

        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            content:'',
            ls:1,
            list:[
                //{time:Date.now(),user:"匿名用户",content:'XXXXXX'}
            ]
        }
    },
    methods:{
        add(){
            if(this.content.length===0){
                return Toast("评论不能为空")
            }
            var comment = { time:Date.now(),user:"匿名用户",content:this.content,ls:this.ls++}
            this.list.unshift(comment)
            this.content=''
        }
    }
}
</script>

<style scoped>
    .cmt-container h3{
        font-size: 18px;
    }

    .cmt-container textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list{
        margin: 5px 0;
    }

    .cmt-list .cmt-item{
        font-size: 13px;
    }

    .cmt-list .cmt-item .cmt-title{
        line-height: 30px;
        background-color: #ccc;
    }

    .cmt-list .cmt-item .cmt-body{
        line-height: 35px;  /* 增加高度*/
        text-indent: 2em;  /* 缩进*/
    }
</style>