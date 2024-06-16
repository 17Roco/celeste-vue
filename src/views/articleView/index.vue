<template>
    <div class="view-article">
        <template v-if="store.curArticle!==null">
            <h1> {{ store.curArticle.title }}</h1>
            <p class="info">作者：{{ store.curArticle.uid }} {{ store.curArticle.createTime }}</p>
            <span class="context">{{ store.curArticle.context }}</span>
            <bottom-bar/>
        </template>
        <template v-else>
            <p>加载中</p>
        </template>
<!--        <el-button @click="aaa">aaa</el-button>-->
    </div>
</template>

<script setup>
import {onMounted,reactive,nextTick} from 'vue'
import {useArticleStore} from "@/store/article";
import bottomBar from './bottomBar.vue'

const props = defineProps(['id'])
const store = useArticleStore();



onMounted(()=>store.getArticle(props.id))

</script>

<style>
.view-article {
    line-height: 1.5;
    text-indent: 2em;
    padding-bottom: 90px;
    >.info{
        text-align: center;
        color: #b7b7bc;
    }
    >.context{
        line-height: 2em;
    }
}
</style>