<script setup lang="ts">
import CommentInput from "@/components/articleShow/comment/CommentInput.vue";
import {useCommentStore} from "@/stores/commentStore";
import {provide, reactive, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import CommentShow from "@/components/articleShow/comment/CommentShow.vue";
import {ElMessage} from "element-plus";

const open = defineModel<boolean>()
const props = defineProps<{aid: number}>()
const store = useCommentStore()
const route = useRoute()

let commentList = ref<Page<Comment>>()
let replyId = ref<number|null>(null)

provide("replyId", replyId)


watchEffect(async () => {
    commentList.value = await store.getArticleComments(props.aid,route.query.p || 1)
})

let comment = async (text: string) =>{
    let b = replyId.value!== null ? (await store.commentChildren(replyId.value,text)) : (await store.commentArticle(props.aid,text))
    ElMessage(b ? "评论成功" : "评论失败")
}

</script>

<template>
    <el-drawer v-model="open" direction="rtl">
        <comment-input @comment="comment"/>
        <comment-show v-if="commentList" :list="commentList"/>
        <div v-else>
            评论加载中
        </div>
    </el-drawer>
</template>

<style>

</style>