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
            <article-item v-else v-for="a in articleList.records" :v-key="a.title" :article="a" :edit="edit"/>
        </template>
        <!--    底部分页    -->
        <Pagination style="align-self: center" :article-list="articleList" v-model="filter.index"/>
    </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import FilterBar from "./filterBar/FilterBar.vue";
import ArticleItem from "./articleItem.vue";
import Pagination from "./filterBar/Pagination.vue";

defineProps({
    "edit":{type:Boolean,default:false}
})

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
        title:"title_title_title_title",
        img:"https://media.prts.wiki/8/83/%E6%B4%BB%E5%8A%A8%E9%A2%84%E5%91%8A_%E6%B3%B0%E6%8B%89%E9%A5%AD_01.jpg",
        context:"11uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd111uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd1",
        user:{
            uid:1,
            username:"user1"
        },
        likee:1,
        watch:1,
        updateTime:new Date()
    },{
        aid:1,
        title:"title_title_title_title",
        img:"https://media.prts.wiki/8/83/%E6%B4%BB%E5%8A%A8%E9%A2%84%E5%91%8A_%E6%B3%B0%E6%8B%89%E9%A5%AD_01.jpg",
        context:"11uinertuherhrsdurhrhrhurghgruhruhrjetiorehruhrhrihrhrehreungrtnrnuthtgurguieijoehirgiongnrd1",
        user:{
            uid:1,
            username:"user1"
        },
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

