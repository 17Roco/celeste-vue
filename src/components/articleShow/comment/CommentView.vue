<script setup lang="ts">
import CommentInput from "@/components/articleShow/comment/CommentInput.vue";
import {useCommentStore} from "@/stores/commentStore";
import {reactive, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import CommentShow from "@/components/articleShow/comment/CommentShow.vue";

const open = defineModel<boolean>()
const props = defineProps<{aid: number}>()
const store = useCommentStore()
const route = useRoute()

let commentList = ref<Page<Comment>>()

watchEffect(async () => {
    commentList.value = await store.getArticleComments(props.aid,route.query.p || 1)
})

</script>

<template>
    <el-drawer v-model="open" direction="rtl">
        <comment-input/>
        <comment-show v-if="commentList" :list="commentList"/>
        <div v-else>
            评论加载中
        </div>
    </el-drawer>
</template>

<style>

</style>