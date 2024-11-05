<script setup lang="ts">

import {useBlogStore} from "@/stores/blogStore";
import {onMounted, ref} from "vue";

const store = useBlogStore()
const props = defineProps<{uid?:number}>()
let articles = ref<Array<Article>>(null)



onMounted(async ()=> {
    // 获取用户文章列表 todo
    articles.value = (await store.getArticleList({},true)).records.slice(0,4)

})
</script>

<template>
    <div class="com-user-show-item">
        <p style="margin: 7px"> 文章 </p>
        <div class="items" v-if="articles">
            <router-link class="item" v-for="a in articles" :to="'/blog/article/'+a.aid">
                <p>{{ a.title }}</p>
                <img :src="a.img || 'https://media.prts.wiki/f/fb/%E4%B8%BB%E9%A2%98%E5%9B%BE_%E8%90%A8%E5%8D%A1%E5%85%B9%E7%9A%84%E6%97%A0%E7%BB%88%E5%A5%87%E8%AF%AD.png'" alt=""/>
                <span >{{ a.context }}</span>
            </router-link>
        </div>
        <div v-else>加载中</div>
    </div>
</template>

<style>
.com-user-show-item{
    display: flex;
    flex-direction: column;
    justify-content: left;
    .items{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
        border-top:1px black solid;
        .item{
            margin: 10px;
            flex: 1;
            max-width: 240px;
            height: 180px;
            border-radius: 10px;
            border: 2px solid #ccc;
            overflow: hidden;
            >p{
                margin: 10px 5px;
            }
            >img{
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>