<template>
    <div class="photoinfo-container">
        <h2>{{info.tit}}</h2>
        <p class="subtitle">
            <span>发表时间:{{info.time|dateFormat}}</span>
            <span>点击次数：{{info.t}}</span>
        </p>

        <hr>

        <!-- 缩略图 -->
        <!-- <img class="preview-img" v-for="(item ,index) in list" :src="item.src"
         height="100" @click="$preview.open(index,list)" :key="item.id"> -->
         <vue-preview :slides="slide1" @close="handleClose"></vue-preview>

        <!-- 图片内容区域 -->
        <div class="content">
            没有深度思考， 我们对一些事物的了解仅仅限于表面，没有转化成自己的知识，
            当你实际应用的时候，你会发现原来你以为会的东西实际上没有真正了解。
            现在特别流行快速读书，手机上经常看到教人快速读书的方法，
            我也曾经尝试快速的去读一个本，觉得读书越快越好，我坚持了一段时间，
            确实读了很多书，
        </div>

        <!-- 评论子组件 -->
        <com-box></com-box>
    </div>
</template>

<script>
//导入品论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            info:{},
            photoinfo1:{d:1,tit:'1XXXXXX',time:Date.now(),t:1},
            photoinfo2:{d:2,tit:'2XXXXXX',time:Date.now(),t:5},
            photoinfo3:{d:3,tit:'3XXXXXX',time:Date.now(),t:3},
            //photoinfo4:{d:4,tit:'4XXXXXX',time:Date.now(),t:6},
            list:[
                
            ],
            slide1:[
                // {src:require('../../img/photo1.jpg'),
                //  msrc:require('../../img/图片.png'),
                //  w:600,
                //  h:400
                // }
            ]
        }
    },
    methods:{
        getPhotoInfo(){
            var id = this.$route.params.id
            if(id==1){
                this.info = this.photoinfo1
                var mimg =
                    {src:require('../../img/photo1.jpg'), msrc:require('../../img/图片.png'),w:600,h:400}
                    //{src:require('../../img/photo2.jpg'), msrc:require('../../img/新闻.png'),w:600,h:400}
                
                this.slide1.push(mimg)
            }else if(id==2){
                this.info = this.photoinfo2
                var mimg1 ={src:require('../../img/photo2.jpg'), msrc:require('../../img/新闻.png'),w:600,h:400}
                this.slide1.unshift(mimg1) 
            }else{
                 this.info = this.photoinfo3
            }
            console.log(id)
        },

        handleClose(){
            console.log('close event')
        }
    },
    created(){  //组件的生命周期
        //获取id 的值
        //console.log(this.$route.params.id)
        this.getPhotoInfo();
    },
    components:{
        //注册评论子组件
        'com-box':comment
    }
    
}
</script>

<style scoped>
    .photoinfo-container{
        padding: 3px;
    }

    .photoinfo-container h2{
        font-size: 15px;
        color: aqua;
        text-align: center;
        margin: 15px 0;
    }

    .photoinfo-container .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }

    .photoinfo-container .content{
        font-size: 13px;
        line-height: 30px;
    }

    /* .my-gallery img{
        background-color:rgb(24, 4, 4);
    } */
</style>