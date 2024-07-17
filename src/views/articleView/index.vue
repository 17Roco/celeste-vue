<template>
    <div class="view-article" v-if="article!==null">
        <h1> {{ article.title }}</h1>
        <p class="info">作者：{{ article.uid }} {{ article.createTime }}</p>
        <tag-show :tags="article.tags"/>
        <span class="context" v-html="article.context"></span>
<!--        <bottom-bar v-if="article" :uid="article.uid" />-->
    </div>
    <p v-else>加载中</p>

</template>

<script lang="ts" setup>
import {onMounted,reactive,ref} from 'vue'
import {useArticleStore} from "@/store/article";
import bottomBar from './bottomBar.vue'
import {onBeforeRouteUpdate} from "vue-router";
import TagShow from "@/views/articleView/tagShow.vue";


const props:any = defineProps(['aid'])
const store:any = useArticleStore();
let article:any = ref(null)

onMounted(()=> {
    // store.getArticle(props.aid).then(data => {
    //     article.value = data
    // })
})


</script>

<style>
.view-article {
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