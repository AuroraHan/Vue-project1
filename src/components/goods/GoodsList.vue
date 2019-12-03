<template>
    <div class="goods-list">

        <!-- 网页中跳转方式
                1、使用 a 标签 的形式  标签跳转
                2、使用 window.location.href 的形式，叫做 编程式导航
         -->
        <div class="goods-item" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.src" alt="">
            <h1 class="title">小米（mi）小米Note 12 16G双网通</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.nowP}}</span>
                    <span class="old">￥{{item.oldP}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.store}}</span>
                </p>
            </div>
        </div>

        <div class="goods-item">
            <img src="../../img/goods_phone2.jpg" alt="">
            <h1 class="title">华为（mi）小米Note 12 16G双网通 小米（mi）小米Note 12 16G双网通</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1299</span>
                    <span class="old">￥1499</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余20</span>
                </p>
            </div>
        </div>

        <div class="goods-item">
            <img src="../../img/goods_phone3.jpg" alt="">
            <h1 class="title">苹果（mi）小米Note 12 16G双网通</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1299</span>
                    <span class="old">￥1499</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余20</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {id:1,src:require('../../img/goods_phone1.jpg'),nowP:3299,oldP:3499,store:300},
                {id:2,src:require('../../img/goods_phone2.jpg'),nowP:5299,oldP:5499,store:200},
                {id:3,src:require('../../img/goods_phone3.jpg'),nowP:7299,oldP:7499,store:199}
            ]
        }
    },

    methods:{
        goDetail(id){
            //使用js 形式进行跳转
            //注意：区分 this.$route 和 this.$router 两个对象的区别
            // this.$route  是路由[参数对象]，所有路由中的参数， params query 都属于它
            // this.$router 是一个路由[导航对象]，用它可以方便的使用 JS 代码，实现路由的前进和后退，跳转到新的URL地址
            
            //编程式导航:
            //1、最简单的
            // this.$router.push("/home/goodsinfo/"+id)
            //2、传递对象
            // this.$router.push({path:"/home/goodsinfo/"+id})
            //3、传递命名的路由
            this.$router.push({name:"goodsinfo",params:{id}})
        }
    }
}
</script>

<style scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;    /*自学*/
        padding: 7px;
        justify-content: space-between;
    }

    .goods-list .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 291px;
    }

    .goods-list .goods-item img{
        width: 100%;
    }

    .goods-list .goods-item .title{
        font-size: 14px;
    }

    .goods-list .goods-item .info{
        background-color: #eee;
    }

    .goods-list .goods-item .info p{
        margin: 0;
        padding: 5px;
    }

    .goods-list .goods-item .info .price .now{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }

    .goods-list .goods-item .info .price .old{
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }

    .goods-list .goods-item .info .sell{
        display: flex;
        justify-content: space-between;
    }
</style>