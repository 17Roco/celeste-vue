<template>
    <div class="com-article-list">
        <!-- 过滤条 -->
        <filter-bar :articleList="articleList" :filter="filter"/>
        <!--    文章列表    -->
        <div v-if="load" style="text-align: center">加载中</div>
        <template v-else>
            <div v-if="articleList.records.length === 0" style="text-align: center">
                空
            </div>
            <article-item v-else v-for="a in articleList.records" :v-key="a.title" :article="a" :edit="false"/>
        </template>
        <!--    底部分页    -->
        <Pagination style="align-self: center" :article-list="articleList" v-model="filter.index"/>
    </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useMainStore} from "@/stores/mainStore.ts";
import FilterBar from "./filterBar/FilterBar.vue";
import ArticleItem from "./articleItem.vue";
import Pagination from "./filterBar/Pagination.vue";


let load = ref(false);

let filter = reactive({
    tag:"tag_1",
    order:"最新",
    index:1,
    timeRange:[null,null]
})
let articleList = reactive({
    pages:10,
    total:100,
    index:1,
    records:[{
        aid:1,
        title:"title",
        img:"",
        context:"111",

        uid:"1",
        likee:1,
        watch:1,
        updateTime:new Date()
    }]
})

</script>

<style>
.com-article-list {
    width: 900px;


    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

