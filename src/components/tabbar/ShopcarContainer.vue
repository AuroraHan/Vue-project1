<template>
    <div class="shopcar-container">

       <div class="goods-list">
           <!-- 商品列表区域 -->
            <div class="mui-card" v-for="(item , i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">

                       <mt-switch 
                       v-model="$store.getters.getGoodsSelected[item.id]" 
                       @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                       <img src="../../img/商品.png">

                       <div class="info">
                           <h1>商品id：{{item.id}} 小米（mi）小米Note 12 16G双网通</h1>
                           <p>
                               <span class="price">￥{{item.price}}</span>
                               <munbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></munbox>
                               <!-- 
                                   问题：如何从购物车中获取商品数量
                                   1、我们可以先建立一个空对象，然后循环购物车中所有商品的数据，把当前循环这条商品的ID
                                   作为对象的属性名，count值作为对象的属性值，这样当把所有商品循环一遍，就会得到
                                   一个对象  :{id:count}
                                -->
                                <!-- item.id 是删除 store中 state 的数据 / i 是删除 goodslist中的数据 -->
                               <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                           </p>
                       </div>
                    </div>
                </div>
            </div>
       </div>

       <!-- 结算区域 -->
       <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>以勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件，
                        总价<span class="red">{{$store.getters.getGoodsCountAndAmount.amount}}</span>
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>

        <p>{{$store.getters.getGoodsSelected}}</p>
    </div>
</template>

<script>
import munbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return{
            goodslist:[]    //购物车中所有商品数据
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        //获取store中所有商品,并把商品加入到 数据的goodslist中
        getGoodsList(){
            this.$store.state.car.forEach(item => this.goodslist.push(item));
        },
        //点击删除，把商品从 store 中根据 传递的 id 删除，
        //同时把 当前组件中的 goodslist中，对应要删除的那个商品，根据 index 来删除
        remove(id,index){
            this.goodslist.splice(index,1);
            this.$store.commit('removeFormCar',id)
        },
        //每当点击开关 把最新的状态同步到 store 中
        selectedChange(id,val){
            //console.log(id + '-----' + val)
            this.$store.commit('updateGoodsSelected',{id,selected:val})
        }
    },
    components:{
        munbox
    }
}
</script>

<style  scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
    }
    .shopcar-container .goods-list .mui-card-content-inner{
        display: flex;
        align-items: center;
    }
    .shopcar-container .goods-list img{
        width: 60px;
        height: 60px;
    }

    .shopcar-container .goods-list h1{
        font-size: 13px;
    }

    .shopcar-container .goods-list .info .price{
        color: red;
        font-weight: bold;
    }

    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .jiesuan .red{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
</style>