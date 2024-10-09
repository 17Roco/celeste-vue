<template>
    <div class="com-article-show">
        <div v-if="article==null">
            <p>文章不存在</p>
        </div>
        <div class="view-article" v-else>
            <!--标题-->
            <h1> {{ article.title }}</h1>
            <!--用户信息-->
            <p class="info" v-if="article.user">
                作者：{{ article.user.username }} &emsp;
                创建时间：{{ article.createTime }} &emsp;
                <template v-if="article.createTime!=article.updateTime">更新时间：{{ article.updateTime }}</template>
            </p>
            <!--标签-->
            <tag-show :tags="article.tags"/>
            <!--正文-->
            <p class="context" v-html="article.context"></p>
            <!--底部条-->
            <bottom-bar v-if="article.user" :user="article.user" />
        </div>
    </div>
</template>

<script setup lang="ts">

import TagShow from "./TagShow.vue";
import BottomBar from "./BottomBar.vue";
import {onMounted, ref} from "vue";
import {getArticleContent} from "@/api/blogApi";

const props = defineProps<{
    aid:number
}>()

let article = ref<Article|null>(null)
onMounted(async ()=>{
    article.value = await getArticleContent(props.aid)
    console.log(article.value)
})
</script>

<style>

.com-article-show {
    line-height: 1.5;
    text-indent: 2em;
    padding-bottom: 90px;
    width: 100%;
    >h1{
        text-align: center;
    }
    >.info{
        text-align: center;
        color: #b7b7bc;
    }
    >.context{
        line-height: 2em;
    }
}
</style>