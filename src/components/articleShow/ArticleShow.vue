<template>
    <div class="com-article-show">
        <div class="view-article" v-if="article">
            <!--标题-->
            <h1> {{ article.title }}</h1>
            <!--用户信息-->
            <p class="info" v-if="article.user">
                作者：{{ article.user.username }}
                创建时间：{{ article.createTime }}
                <template v-if="article.createTime!==article.updateTime">更新时间：{{ article.updateTime }}</template>
            </p>
            <!--标签-->
            <tag-show v-if="article.tags && article.tags.length>0" :tags="article.tags"/>
            <!--正文-->
            <p class="context" v-html="article.context"></p>
            <!--底部条-->
            <bottom-bar v-if="article.user" :article="article" :aid="article.aid"/>
        </div>
        <EmptyBox v-else/>
    </div>
</template>

<script setup lang="ts">
import TagShow from "./TagShow.vue";
import BottomBar from "./BottomBar.vue";
import EmptyBox from "@/components/common/EmptyBox.vue";
import {provide, ref, watchEffect} from "vue";
import {useBlogStore} from "@/stores/blogStore";
import {ElMessage} from "element-plus";

const store = useBlogStore()
const props = defineProps<{aid:number}>()
let article = ref<Article>()

// 获取文章
watchEffect(async ()=> {
    // 获取文章
    article.value = await store.getArticle(props.aid)
    if(!article.value){
        // 文章不存在 todo
        ElMessage.error("文章不存在")
    }
})

// 点赞操作
provide("likeOps", async ()=>{
    if(!article.value) return
    let b = await store.likeArticle(props.aid,!article.value.isLike)
    ElMessage((!article.value.isLike ? '点赞' : '取消点赞') + (b ? '成功' : '失败'))
    if(b && article.value) {
        article.value.isLike =!article.value.isLike
        article.value.likee += (article.value.isLike ? 1 : -1)
    }
})




</script>



<style>

.com-article-show {
    line-height: 1.5;
    padding-bottom: 90px;
    width: 100%;
    min-height: 70vh;
    >.view-article {
        > h1 {
            text-align: center;
        }
        > .info {
            text-align: center;
            color: #b7b7bc;
        }
        > .context {
            line-height: 2em;
            text-indent: 2em;
        }
    }
}
</style>