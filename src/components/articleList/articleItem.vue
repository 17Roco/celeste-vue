<template>
    <router-link class="com-article-item" :to="'/blog/detail/'+props.article.aid">
        <div class="title">{{ props.article.title }}</div>
        <div class="context">
            <img :src="props.article.img || 'https://media.prts.wiki/d/db/%E5%B9%B2%E5%91%98%E8%BD%AE%E6%8D%A2%E5%8D%A1%E6%B1%A0134.jpg'" alt=""/>
            <div class="text">
                <span>{{ props.article.context }}</span>
                <InfoBar :article="props.article" :edit="props.edit"/>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import InfoBar from "@/components/articleList/infoBar.vue";

const props = defineProps({
    "article":Object,
    "edit":Boolean
})


</script>

<style lang="less">
.com-article-item:hover{
    border: rgba(44, 62, 80, 1) 1px solid;
    border-radius: 10px;
    transition: 0.3s;
}
.com-article-item{
    margin: 10px 40px;
    border: rgba(44, 62, 80, 0.0) 1px solid;
    border-bottom: rgba(44, 62, 80, 0.2) 1px solid;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    //transition: 0.3s;
    >.title{
        margin: 0 20px;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 10px;
        white-space: nowrap;
        text-overflow: clip;
        overflow: hidden;
    }
    >.context{
        display: flex;
        >img{
            border-radius: 10px;
            margin: 0 20px 10px;
            width: 160px;
            height: 100px;
        }
        >.text{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: space-between;
            color: #555666;
            >span{
                text-align: left;
                height: 5.2em;
                line-height: 1.3;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }

}
</style>