<script setup lang="ts">
import CommentInput from "@/components/articleShow/comment/CommentInput.vue";
import {useCommentStore} from "@/stores/commentStore";
import {provide, ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import CommentShow from "@/components/articleShow/comment/CommentShow.vue";
import {ElMessage, ElMessageBox} from "element-plus";

const open = defineModel<boolean>()
const props = defineProps<{aid: number}>()
const store = useCommentStore()
const route = useRoute()

let commentList = ref<Page<Comment>>()
let replyId = ref<number|null>(null)
let index = ref<number>(1)

provide("replyId", replyId)
provide("deleteComment",async (cid:number)=>{
    let value = await ElMessageBox.confirm('你确定要删除这条评论吗？', '警告', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }).catch(()=>{})
    if (value) {
        let b = await store.deleteComment(cid)
        ElMessage(b ? "删除成功" : "删除失败")
        //刷新评论列表
        if (b && commentList.value)
            commentList.value.records = commentList.value.records.filter(item => item.cid!== cid)
    }
})

// 自动刷新评论列表
watchEffect(async () => {
    commentList.value = await store.getArticleComments(props.aid,index.value)
})

// 发表评论
let comment = async (text: string) =>{
    let b = replyId.value!== null ? (await store.commentChildren(replyId.value,text)) : (await store.commentArticle(props.aid,text))
    ElMessage(b ? "评论成功" : "评论失败")
    if(b){
      //刷新评论列表
        commentList.value = await store.getArticleComments(props.aid,index.value)
    }
}

</script>

<template>
    <el-drawer v-model="open" direction="rtl">
        <comment-input @comment="comment"/>
        <comment-show v-if="commentList" :list="commentList" @change="index = $event"/>
        <div v-else>
            评论加载中
        </div>
    </el-drawer>
</template>

<style>

</style>