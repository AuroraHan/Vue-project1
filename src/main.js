//入口文件
import Vue from 'vue'
//1.1导入 路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的路由模块
import router from './route.js'

//导入 vue-resource  目前没有服务器，无法获取
//import VueResource from 'vue-resource'
//安装
//Vue.use(VueResource)
//全局配置 设置请求服务器的根地址
//Vue.http.options.root='根地址'

//注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//每次进入网站的时候，肯定会调用 mian.js 在刚调用的时候，把购物车的数据读出来，放到store  
var car = JSON.parse(localStorage.getItem('car')||'[]')
var store = new Vuex.Store({
    state:{     //this.$store.state.****
        car:car      //将购物车中的数据存储到car中，在car数组中存储商品对象  
                    //{id:商品id ,count:商品数量,price:商品价格,selected:false}  
    },
    mutations:{     //this.$store.commit('方法名称','按需传递唯一参数')
        //添加商品
        addToCar(state,goodsinfo){
            //点击加入购物车，吧商品信息保存到 store中的car
            //分析：1、如果购物车之前就有对应的商品，只需要更新数量
            //2、如果没有商品，则只需要push 到 car

            //假设在购物车中没有找到商品
            var flag = false

            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count+=parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })

            //如果最终循环完毕，得到的flag还是false 则把商品加到购物车中
            if(!flag){
                state.car.push(goodsinfo)
            }

            //当更新完成后，把car数组存储到 本地localStorage
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        //更新购物车中商品
        updateGoodsInfo(state,goodsinfo){
            //修改购物车中的数量
            //分析：
            state.car.some(item=>{
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            //当x修改完成后，把最新购物车数据存储到 本地localStorage
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        //删除商品
        removeFormCar(state,id){
            //根据id 从 store 中购物车中删除对应那条商品数据
            state.car.some((item,i)=>{
                if (item.id == id) {
                    state.car.splice(i,1)
                    return true;
                }
            })
            //将删除完毕后的购物车同步到本地
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        //把开关的最新信息同步到 car 的selected:false
        updateGoodsSelected(state,info){
            state.car.some(item => {
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })
            //把最新的 所有购物车商品的最新状态同步到 store 中
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{       //this.$store.getters.***
        //相当于 计算属性 也相当于 过滤器
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c
        },
        getGoodsCount(state){       //拼接商品id和数量
            //类似{id：count}  商品id和改商品的数量
            var o = {}
            state.car.forEach(item=>{
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state){    //商品前面开关选中
            var o ={}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){  //总计件数和计算总价
            var o = {
                count:0,    //勾选的数量
                amount:0    //勾选的总价
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
    
})


//定义全局的时间过滤器
import moment from 'moment'  //时间格式化插件
Vue.filter('dateFormat',function(dataStr , pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

//导入MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入 Mint-UI 组件
// import { Header,Swipe, SwipeItem ,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//图片预览插件  导入 vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入 App 根组件
import app from './App.vue'


var vm = new Vue({
    el:'#app',
    render: c=>c(app),
    router, //挂载路由对象
    store   // 挂载 store 状态管理对象
})