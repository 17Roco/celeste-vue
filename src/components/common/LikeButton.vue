<script setup lang="ts">

import {useBlogStore} from "@/stores/blogStore";
import {ElMessage} from "element-plus";
import {useMainStore} from "@/stores/mainStore";
import SwitchButton from "@/components/common/SwitchButton.vue";
import {computed, reactive} from "vue";

const article = defineModel<Article>()
const store = useBlogStore()
const mainStore = useMainStore()
const label = computed<[string,string]>(() => [`已点赞(${article.value.likee})`,`点赞(${article.value.likee})`])

let like = async (isLike: boolean) => {
    // 调用 store.likeArticle 方法
    let b = await store.likeArticle(article.value.aid,isLike)
    // 显示提示信息
    ElMessage((isLike ? '点赞' : '取消点赞')  + (b ? '成功' : '失败'))
    // 更新用户信息
    if(b) article.value.isLike = isLike
    if (b) article.value.likee += (isLike ? 1 : -1)
}

</script>

<template>
    <SwitchButton
        v-if="article.uid !== mainStore.userStatus?.userInfo?.uid"
        :is="article.isLike" :label="label" @change="like"/>
    <slot v-else/>
</template>