<template>
    <div class="com-article-item">
        <!--   标题     -->
        <div class="title"><router-link :to="path">{{ article.title }}</router-link></div>
        <!--   摘要     -->
        <div class="context">
            <!-- 图片 -->
            <router-link :to="path"><img v-if="article.img" :src="article.img" alt="" /></router-link>
            <!-- 内容 -->
            <div class="text">
                <!-- 内容 -->
                <span><router-link :to="path">{{ article.context }}</router-link></span>
                <!-- 作者 -->
                <InfoBar :article="article" :edit="edit" v-if="article.user"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InfoBar from "@/components/articleList/InfoBar.vue";
import {computed} from "vue";

const prop = defineProps<{
    article:Article,
    edit:boolean
}>()

// 文章路径
let path = computed(()=>'/blog/article/'+prop.article.aid)

</script>

<style lang="less">
.com-article-item:hover{
    border: rgba(44, 62, 80, 1) 1px solid;
}

.com-article-item{
    border-radius: 10px;
    margin: 10px 40px;
    border: rgba(44, 62, 80, 0.0) 1px solid;
    border-bottom: rgba(44, 62, 80, 0.2) 1px solid;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    >.title{
        margin: 0 20px;
        padding: 10px;
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: clip;
        overflow: hidden;
    }
    >.context{
        display: flex;
        padding: 0 10px;
        img{
            float: left;
            border-radius: 5px;
            margin: 0 10px 10px;
            /**/
            width: 200px;
            height: 120px;
        }
        >.text{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: space-between;
            color: #555666;
            >span{
                line-height: 1.5;
                text-overflow: ellipsis;
                word-break: break-all;
                overflow: hidden;
                white-space: normal;

                display: -webkit-box; /* 使用 flexbox 模型 */
                -webkit-box-orient: vertical; /* 垂直方向排列子元素 */
                -webkit-line-clamp: 4; /* 限制显示 3 行，超出部分会被隐藏 */

            }
        }
    }

}

@media (max-width: 768px) {
    .com-article-item{
        margin: 10px;
        >.context{
            img{
                width: 100px;
                height: 70px;
            }
        }
    }
}
@media (max-width:576px) {
    .com-article-item {
        margin: 10px 0;
    }
}

</style>