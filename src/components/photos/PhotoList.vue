<template>
    <div>
        <!-- 头部列表 -->
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
						推荐
					</a>
					<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
						热点
					</a>
					<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
						北京
					</a>
					<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
						社会
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						图片
					</a>
				</div>
			</div>
		</div>
        
		<!-- 图片列表区域 -->
		<ul class="photo-list">
  			<router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
    		<img v-lazy="item.path">
			<div class="info">
				<h1 class="info-title">{{item.title}}</h1>
				<div class="info-body">{{item.titbody}}</div>
			</div>
  			</router-link>
		</ul>

    </div>
</template>

<script>
//导入mui 的文件
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data(){
        return{
			list:[
				{id:1,path:require('../../img/photo1.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
				{id:2,path:require('../../img/photo2.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
				{id:3,path:require('../../img/photo3.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
				{id:4,path:require('../../img/photo4.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
				{id:5,path:require('../../img/photo5.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
				{id:6,path:require('../../img/photo6.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
				{id:7,path:require('../../img/photo7.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
				{id:8,path:require('../../img/photo8.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
				{id:9,path:require('../../img/photo9.jpg'),title:'高尔基曾说过',titbody:'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最容易忽视而又最令人后悔的就是时间'},
			]
		}
    },
    mounted(){      //当组件中的DOM结构渲染好，并放到页面中后，会执行这个生命周期
    //初始化 滑动控件
    mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    },
    methods:{

    },
}
</script>

<style scoped>
*{
    touch-action: pan-y;        /*某个区域是否允许用户操作,谷歌浏览器的一个警告*/
}

/* img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
} */
.photo-list{
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
}
.photo-list li{
	background-color: #ccc;
	text-align: center;
	margin-bottom: 10px;
	box-shadow: 0 0 9px #999;
	position: relative;
}
.photo-list li img{
	width: 100%;
	vertical-align: middle;
}

.photo-list li img[lazy=loading]{
	width: 40px;
  	height: 300px;
  	margin: auto;
}

.info{
	color: white;
	text-align: left;
	position: absolute;
	bottom: 0;
	background-color: rgba(0,0,0,0.5);
	max-height: 84px;
}
.info .info-title{
	font-size: 15px;
}
.info .info-body{
	font-size: 13px;
}
</style>