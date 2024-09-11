<script setup lang="ts">

import TagShow from "./TagShow.vue";
import BottomBar from "./BottomBar.vue";

defineProps<{
    article:Article|null
}>()

</script>

<template>
    <div class="com-article-show">
        <template class="view-article" v-if="article!==null">
            <h1> {{ article.title }}</h1>
            <p class="info">
                作者：{{ article.user.username }} &emsp;
                创建时间：{{ article.createTime }} &emsp;
                <template v-if="article.createTime!=article.updateTime">更新时间：{{ article.updateTime }}</template>
            </p>
            <tag-show :tags="article.tags"/>
            <p class="context" v-html="article.context"></p>
            <bottom-bar :user="article.user" />
        </template>
        <template v-else>
            <p>文章不存在</p>
        </template>
    </div>
</template>

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