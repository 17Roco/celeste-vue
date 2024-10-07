<template>
    <div class="com-article-show">
        <template v-if="article==null">
            <p>文章不存在</p>
        </template>
        <div class="view-article" v-else>
            <h1> {{ article.title }}</h1>
            <p class="info" v-if="article.user">
                作者：{{ article.user.username }} &emsp;
                创建时间：{{ article.createTime }} &emsp;
                <template v-if="article.createTime!=article.updateTime">更新时间：{{ article.updateTime }}</template>
            </p>
            <tag-show :tags="article.tags"/>
            <p class="context" v-html="article.context"></p>
            <bottom-bar v-if="article.user" :user="article.user" />
        </div>
    </div>
</template>

<script setup lang="ts">

import TagShow from "./TagShow.vue";
import BottomBar from "./BottomBar.vue";
import {ref, onMounted, watch} from "vue";
import {getArticleContent} from "@/api/blogApi";

const props = defineProps<{
    aid:number
}>()

let article = ref<Article|null>(null)
onMounted(()=>{
    getArticleContent(props.aid).then(data => article.value = data)
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