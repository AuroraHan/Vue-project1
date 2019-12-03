<template>
    <div class="goodsinfo-container">
        <!-- 购物车的小球 -->
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotulist="lunbotuList" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{title}}--{{id}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥2399</del>&nbsp;&nbsp;销售价:<span class="now_price">￥2199</span>
                    </p>
                    <p>购买数量:<numbox @getcount="getSelectCount" :max="stock"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        <!-- 分析：如何实现加入购物车的时候，拿到选择的数量 -->
                        <!-- 
                            由于子父组件嵌套了，无法再goodsinfo 页面中获取到选中商品的数量值
                            #涉及到 子组件向父组件传值（事件调用机制）
                            #父向子传递方法，子调用方法，同时把数据当作参数传递给这个方法
                         -->
                    </p>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:YXF4FE6679812</p>
                    <p>库存情况:{{stock}}</p>
                    <p>上架时间:2020-12-12</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'

export default {
    data(){
        return{
            id:this.$route.params.id,       //获取当前的id值
            title:'',
            stock:'',
            ballFlag:false, //控制小球的隐藏和显示的标识
            selectedCount:1,  //保存用户选中的商品数量
            lunbotuList:[
                {id:1,path:require('../../img/goodsinfo2.png')},
                {id:2,path:require('../../img/goodsinfo1.png')}
            ]
        }
    },
    methods:{
        //var id1=this.$route.params.id,
        goDesc(id){ //使用编程式导航
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        goComment(id){
            this.$router.push({name:'goodscomment',params:{id}})
        },
        
        //为每一项传递数据
        setdata(){
            var gid = this.$route.params.id
            if(gid==1){
                this.title='小米手机',
                this.stock=30
            }else if(gid==2){
                this.title='华为手机',
                this.stock=40
            }else{
                this.title='苹果手机',
                this.stock=50
            }
        },

        addToShopCar(){     //添加到购物车
            this.ballFlag=!this.ballFlag;
            //拼接处要加入购物车商品的对象
            var goodsinfo = {
                id:this.id,
                count:this.selectedCount,
                price:2199,
                selected:true
            };

            //调用store 中的 mutation 来将商品加到购物车
            this.$store.commit("addToCar",goodsinfo);
        },

        //小球动画效果
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth;
            /**
             * 小球动画优化效果
             *  1、不同的分辨率和滚动条滚动的情况下，问题就会出现
             * 解决：不能把坐标位置写死，应该根据不同的情况计算不同的坐标值
             *  domObject.getBoundingClientRect()
             * 
             */

            //获取小球在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            //获取徽标在页面中的位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition='all 0.6s cubic-bezier(.3,-0.4,1,.63)';
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },

        //父向子传递的方法
        getSelectCount(count){
            //当子组件把选中的数量传递给父组件的时候，把选中的值保存到data上
            this.selectedCount =count;
            console.log('父组件拿到的数量为:'+this.selectedCount)
        }
    },
    created(){
        // var id =this.$route.params.id
        //console.log(this.$route.params.id)
        //console.log(stock)
        this.setdata()
    },
    components:{
        swiper,
        numbox
    }
}
</script>

<style scoped>
    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;
    }

     .goodsinfo-container .now_price{
         color: red;
         font-size: 16px;
         font-weight: bold;
     }

     .goodsinfo-container .mui-card-footer{
         display: block;
     }

     .mui-card-footer button{
         margin: 15px 0;
     }

     .goodsinfo-container .ball{
         width: 15px;
         height: 15px;
         background-color: red;
         border-radius: 50%;
         position: absolute;
         z-index: 99;
         top: 420px;
         left: 136px;
         
     }
</style>