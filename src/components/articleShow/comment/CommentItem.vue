<script setup lang="ts">

import UserInfoShow from "@/components/common/UserInfoShow.vue";
import {inject, onMounted, ref, watch, watchEffect} from "vue";
import CommentShow from "@/components/articleShow/comment/CommentShow.vue";
import {useCommentStore} from "@/stores/commentStore";
import {useMainStore} from "@/stores/mainStore";
import {ElMessage, ElMessageBox} from "element-plus";

const store = useCommentStore()
const mainStore = useMainStore()
const props = defineProps<{
    comment: Comment,
    children?:boolean
}>()
let deleteComment = inject("deleteComment")


// 回复评论id
let replyId = inject<number>("replyId")
// 评论列表索引
let index = ref(1)
// 是否显示子评论
let showReply = ref(false)
// 子评论列表
let childrenCommentList = ref<Page<Comment>|null>()

// 监听是否显示子评论
watchEffect(async ()=>{
    if (showReply.value && props.comment.childrenCount !== childrenCommentList.value?.total) {
        childrenCommentList.value = await store.getChildComments(props.comment.cid,index.value)
    }
})
// 监听回复评论页面
watch(index,async ()=>{
    childrenCommentList.value = await store.getChildComments(props.comment.cid,index.value)
})


// 点赞
let like = async () => {
    let b = await store.likeComment(props.comment.cid,!props.comment.isLike)
    ElMessage((!props.comment.isLike ? '点赞' : '取消点赞')  + (b ? '成功' : '失败'))
    if (b){
        props.comment.isLike = !props.comment.isLike
        props.comment.likee +=  props.comment.isLike ? 1 : -1
    }
}

</script>

<template>
    <!-- 评论 -->
    <div class="com-comment-item">
        <!-- 评论用户信息  -->
        <user-info-show :user="comment.user" avatar text class="user-info"/>
        <!-- 评论内容 -->
        <div class="content">
            <!-- 评论内容 -->
            <span class="text">{{comment.text}}</span>
            <!-- 评论操作 -->
            <div class="opt">
                <!-- 评论时间 -->
                <span>{{comment.time}}</span>
                <!-- 回复按钮 -->
                <el-button v-if="!children" @click="replyId = comment.cid" link>回复</el-button>
                <!-- 显示子评论 -->
                <el-button v-if="!children && comment.childrenCount>0" @click="showReply =!showReply" link>查看回复</el-button>
                <!-- 点赞按钮 -->
                <el-button link @click="like">{{ comment.isLike ? "取消点赞" : "点赞" }} ({{comment.likee}})</el-button>
                <!-- 删除按钮 -->
                <el-button v-if="mainStore.userStatus.userInfo && comment.user?.uid === mainStore.userStatus.userInfo.uid" @click="deleteComment(comment.cid)" link>删除</el-button>
            </div>
            <!-- 子评论 -->
            <comment-show v-if="childrenCommentList" v-show="showReply" :list="childrenCommentList" children @change="index=$event"/>
        </div>
    </div>
</template>

<style>
.com-comment-item{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    align-items: start;
    padding: 10px 0;

    >.user-info{
        span{
            color: #b7b7bc;
        }
    }

    >.content{
        //width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 70px;
        >.text{
            width: 100%;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal;
        }
        >.opt{
            font-size: 12px;
            color: #999;
            margin-top: 10px;
            >.el-button{
                font-size: 12px;
            }
        }
    }
}
</style>