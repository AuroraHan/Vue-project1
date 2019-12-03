<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    mounted(){
        mui(".mui-numbox").numbox();
    },
    methods:{
        countChanged(){
           //数量改变
           //console.log(this.$refs.numbox.value);
           //每当数量值改变则立即把最新的数量同步到购物车，覆盖之前的数量值
           this.$store.commit('updateGoodsInfo',{
               id : this.goodsid,
               count : this.$refs.numbox.value
           })
        }
    },
    props:['initcount',"goodsid"]
}
</script>

<style scoped>

</style>