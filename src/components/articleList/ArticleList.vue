<template>
    <!--  文章列表  -->
    <div class="com-article-list">
        <!-- 过滤条 -->
        <filter-bar :articleList="articleList"/>
        <!-- 文章列表 -->
        <PageShowBox :object="articleList">
            <article-item
                v-for="a in articleList?.records"
                :v-key="a.title"
                :article="a"
                :edit="edit"
            />
        </PageShowBox>
    </div>
</template>

<script setup lang="ts">
import FilterBar from "./filterBar/FilterBar.vue";
import ArticleItem from "./ArticleItem.vue";
import PageShowBox from "@/components/common/showBox/PageShowBox.vue";
import {computed,  provide, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {useBlogStore} from "@/stores/blogStore";
import {NP} from "@/util/NP";

const props = defineProps<{edit:boolean}>()
const store = useBlogStore()
const route = useRoute()

// 过滤器
let filter = computed(() => ({
    index:      route.query.index     || 1,
    tag:        route.query.tag       || null,
    order:      route.query.order     || "new",
    beginTime:  route.query.beginTime || null,
    endTime:    route.query.endTime   || null,
} as ArticleFilter))

// 文章列表
let articleList = ref<Page<Article>|null>(null)
// 更新文章列表
watchEffect(()=>{
    NP(async()=>articleList.value = await store.getArticleList(filter?.value,props.edit))
})


// 提供文章过滤器
provide("articleFilter",filter)
// 提供文章列表
provide("articleList",articleList)


</script>

<style>
.com-article-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

