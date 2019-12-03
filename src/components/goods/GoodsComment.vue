<template>
    <div>
        <h3>商品评论页面{{gcid}}</h3>
        <!-- <cmtbox :id="$route.params.id"></cmtbox>  服务器上使用-->
        <cmtbox></cmtbox>
    </div>
</template>

<script>
import cmtbox from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            gcid:this.$route.params.id      //获取当前的id值
        }
    },
    components:{
        cmtbox
    }
}
</script>

<style scoped>

</style>