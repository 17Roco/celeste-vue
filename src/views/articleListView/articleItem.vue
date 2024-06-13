<template>
    <router-link class="com-article-item" :to="'/article/detail/'+props.article.id">
        <div class="title">{{ props.article.title }}</div>
        <div class="context">
            <img :src="props.article.img" alt=""/>
            <div class="text">
                <span>{{ props.article.context }}</span>
                <InfoBar :article="props.article"/>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import InfoBar from "@/views/articleListView/infoBar.vue";

const props = defineProps(["article"])


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