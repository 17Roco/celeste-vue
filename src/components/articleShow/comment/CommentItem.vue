<script setup lang="ts">

import UserInfoShow from "@/components/common/UserInfoShow.vue";
import {inject, ref} from "vue";
import CommentShow from "@/components/articleShow/comment/CommentShow.vue";
import CommentInput from "@/components/articleShow/comment/CommentInput.vue";
import {useCommentStore} from "@/stores/commentStore";
import {useMainStore} from "@/stores/mainStore";
const store = useCommentStore()
const mainStore = useMainStore()
const props = defineProps<{
    comment: Comment,
    children:boolean
}>()

let replyId = inject<number>("replyId")
let childrenCommentList = ref<Page<Comment>|null>()

let getChildrenComment = async ()=>{
    childrenCommentList.value = await store.getChildComments(props.comment.cid)
}
</script>

<template>
    <div class="com-comment-item">
        <user-info-show user="comment.user" avatar/>
        <div class="content">
            <span class="text">{{comment.text}}</span>
            <div class="time">
                <span>{{comment.time}}</span>
                <el-button v-if="!children" @click="replyId = comment.id" link>回复</el-button>
                <el-button v-if="!children" @click="getChildrenComment" link>查看回复</el-button>
                <el-button link>点赞</el-button>
                <el-button v-if="mainStore.userStatus.userInfo && comment.user?.uid === mainStore.userStatus.userInfo.uid" link>删除</el-button>
            </div>

            <comment-show v-if="childrenCommentList" :list="childrenCommentList" children/>
        </div>
    </div>
</template>

<style>
.com-comment-item{
    display: flex;
    border-bottom: 1px solid #ccc;
    align-items: start;
    padding: 10px 0;
    >.content{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        >.text{
            width: 100%;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal;
        }
        >.time{
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