<template>
    <div>
        <!-- 轮播图 每4秒更换一次 慢慢滑动为1秒-->
        <swiper :lunbotulist="lunbotulist" :isfull="true"></swiper>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
		            <!-- <span class="mui-icon mui-icon-home"></span>-->
                    <img src="../../img/新闻.png" alt="">
		            <div class="mui-media-body">新闻中心</div> 
                    
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
		            <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                    <img src="../../img/图片.png" alt="">
		            <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
		            <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                    <img src="../../img/商品.png" alt="">
		            <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <!-- <span class="mui-icon mui-icon-location"></span> -->
                    <img src="../../img/留言.png" alt="">
		            <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <!-- <span class="mui-icon mui-icon-search"></span> -->
                    <img src="../../img/视频.png" alt="">
		            <div class="mui-media-body">视频专区</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <!-- <span class="mui-icon mui-icon-phone"></span> -->
                    <img src="../../img/联系我们.png" alt="">
		            <div class="mui-media-body">联系我们</div>
                </a>
            </li>
	    </ul> 
        <h2>HomeContainer</h2>
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'

export default {
    data(){
        return{
            lunbotulist:[
                {id:1,path:require('../../img/photo1.jpg')},
                {id:2,path:require('../../img/photo3.jpg')},
                {id:3,path:require('../../img/photo5.jpg')},
            ]
        }
    },
    components:{
        swiper
    }
}
</script>

<style scoped>
   
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }

    .mui-grid-view.mui-grid-9 img{
        width: 60px;
        height: 60px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
</style>