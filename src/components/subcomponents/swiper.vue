<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 将来谁使用轮播图，谁传递 lunbotulist -->
            <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
                <img :src=item.path :class="{'full':isfull}">
            </mt-swipe-item>
            <!-- <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:['lunbotulist',"isfull"]
}
</script>

<style scoped>
    .mint-swipe{
        height:230px;
    }

    .mint-swipe-item{
        text-align: center;
    }
    /* 更换背景颜色为图片 */
    /* .mint-swipe-item:nth-child(1){
        background-color:#1abc9c;
    }

    .mint-swipe-item:nth-child(2){
        background-color:#e74c3c;
    }

    .mint-swipe-item:nth-child(3){
        background-color:#ffeaa7;
    } */

    .mint-swipe-item img{
        /* width: 100%; */
        height: 100%;
    }

    .full{
        width: 100%;
    }
</style>