<script setup lang="ts">

import {useBlogStore} from "@/stores/blogStore";
import {onMounted, ref, watchEffect} from "vue";

const store = useBlogStore()
const props = defineProps<{uid?:number}>()
let articles = ref<Array<Article>>(null)
let count = ref(-1)


watchEffect(async ()=> {
    // 获取用户文章列表
    let r = (await store.getArticleList({uid:props.uid},!props.uid))
    articles.value = r.records.slice(0,4)
    count.value = r.total
})
</script>

<template>
    <div class="com-user-show-item">
        <p style="margin: 7px">
            文章
            <span v-show="count>-1">{{count}}</span>
        </p>
        <div class="items" v-if="articles">
            <div v-if="articles.length==0">
                <p>暂无文章</p>
            </div>
            <router-link class="item" v-for="a in articles" :to="'/blog/article/'+a.aid">
                <p>{{ a.title }}</p>
                <img v-if="a.img" :src="a.img" alt=""/>
                <span v-else>{{ a.context }}</span>
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
            width: 240px;
            height: 180px;
            border-radius: 10px;
            border: 2px solid #ccc;
            overflow: hidden;
            box-shadow: 0 0 3px #d2d2d5;
            >p{
                margin: 5px;
                white-space: nowrap; /* 不换行 */
                overflow: hidden; /* 隐藏超出部分 */
                text-overflow: ellipsis; /* 超出部分显示为... */
            }
            >img{
                border-radius: 5px;
                width: 240px; /* 根据容器宽度自动调整 */
                height: 150px; /* 自动高度，保持比例 */
                max-height: 200px; /* 设置最大高度，比如200px */
                object-fit: cover; /* 保持比例，裁剪多余部分 */
            }
            span {
                display: -webkit-box; /* 适配多行 */
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4; /* 最多显示3行 */
                overflow: hidden; /* 隐藏超出部分 */
                text-overflow: ellipsis; /* 超出部分显示为... */
                margin-top: 10px;
            }
        }
    }
}
</style>