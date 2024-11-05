<script setup lang="ts">

import {useBlogStore} from "@/stores/blogStore";
import {ElMessage} from "element-plus";
import {useMainStore} from "@/stores/mainStore";

const article = defineModel<Article>()
const store = useBlogStore()
const mainStore = useMainStore()

let like = async () => {
    // 调用 store.likeArticle 方法
    let b = await store.likeArticle(article.value.aid,!article.value.isLike)
    // 显示提示信息
    ElMessage((article.value.isLike ? '取消点赞' : '点赞')  + (b ? '成功' : '失败'))
    // 更新用户信息
    if(b) article.value.isLike = !article.value.isLike
}

</script>

<template>
    <el-button v-if="article.uid !== mainStore.userStatus?.userInfo?.uid" @click="like">
        {{article.isLike ? '已点赞' : '点赞'}}
    </el-button>
    <slot v-else/>
</template>

<style>

</style>