<template>
    <div class="view-article">
        <template v-if="article!==null">
            <h1> {{ article.title }}</h1>
            <p class="info">作者：{{ article.uid }} {{ article.createTime }}</p>
            <span class="context">{{ article.context }}</span>
        </template>
        <template v-else>
            <p>加载中</p>
        </template>
        <bottom-bar v-if="article" :uid="article.uid" />
    </div>
</template>

<script setup>
import {onMounted,reactive,ref} from 'vue'
import {useArticleStore} from "@/store/article";
import bottomBar from './bottomBar.vue'
import {onBeforeRouteUpdate} from "vue-router";


const props = defineProps(['aid'])
const store = useArticleStore();
let article = ref(null)

onMounted(()=> {
    store.getArticle(props.aid).then(data => {
        article.value = data
    })
})


// onBeforeRouteUpdate(()=>{
//     console.log(props.aid)
//     store.getArticle(props.aid).then(data => {
//         console.log(data)
//         article.value = data
//     })
// })
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