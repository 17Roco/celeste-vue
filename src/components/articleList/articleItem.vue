<template>
    <div class="com-article-item" @click="to('/blog/detail/'+article.aid)">
        <div class="title">{{ article.title }}</div>
        <div class="context">
            <img :src="article.img" alt="" v-if="article.img"/>
            <div class="text">
                <span v-html="article.context"></span>
                <InfoBar :article="article" :edit="edit"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import InfoBar from "@/components/articleList/infoBar.vue";
import router from "@/router";

defineProps([
    "article",
    "edit"
])

let to = (path) => router.push(path)

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
        padding-left: 10px;
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