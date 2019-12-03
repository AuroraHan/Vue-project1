<template>
    <div class="newsinfo-container">
        <!-- 新闻标题 -->
        <h2 class="title">新闻标题</h2>

        <!-- 新闻子标题 -->
        <p class="subtitle">
            <span>发表时间:2020-12-12 12:12:12</span>
            <span>点击次数:0</span>
        </p>
        <hr>

        <!-- 新闻内容 -->
        <div class="content">
            <p>
                （1）多看书，多看好书，尤其是可以启发人思维的书籍。
                （2）做生活中的有心人。其实创新能力并不是与生俱来的，对于大部分人而言，
                需要后天的一些行为习惯养成自己的创造、创新能力，所以一定要做生活的有心人，多去观察生活中的事情和人物，启发自己。
            </p>
            <p>
                （3）保持好奇心，好奇心才能刺激创造力，有底蕴才能激发创新力。虽然说好奇害死猫，但是好奇心的的确确是培养创新能力的好方法，
                不管是日常生活中还是工作职场中，保持好奇心，对自己创新能力的培养有利无害。
            </p>
        </div>

        <!-- 子组件的评论区域 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
//导入子组件
import comment from '../subcomponents/comment.vue'
export default {
    // data(){
    //     return{
    //         id:this.$router.params.id        //将URL中的传递的 id 值，挂载到data上。
    //     }
    // }

    components:{    //用来注册子组件的节点
        "comment-box":comment
    },
}
</script>



<style scoped>

    /* 如果图片过大 则把 scoped 去掉 */

     .newsinfo-container{
         padding: 0 4px;
     }

    .newsinfo-container .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }

    .newsinfo-container .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content:space-between;
    }

    .newsinfo-container .content{
        font-size: 16px;
    }
</style>