<template>
    <div>
        <h3>商品详细页面{{gdid}}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{
            gdid:this.$route.params.id      //获取当前的id值
        }
    }
}
</script>

<style scoped>

</style>