<template>
    <div class="com-bottom-bar">
        <div class="body">
            <!-- 作者信息 -->
            <user-info-show :user="article.user" avatar text follow-opt/>
            <el-button v-if="store.self && store.self.uid== article.user.uid" @click="toEdit">编辑</el-button>
            <!-- 操作 -->
            <div class="opt">
                <el-button @click="likeOps" v-if="store.self">{{ article.isLike ? "已" : ""}}点赞 ({{ article.likee }})</el-button>
                <el-button @click="comment">评论</el-button>
            </div>
        </div>
    </div>
    <comment-view v-model="commentOpen" :aid="article.aid"/>
</template>

<script setup lang="ts">
import CommentView from "@/components/articleShow/comment/CommentView.vue";
import FollowButton from "@/components/common/button/FollowButton.vue";
import {useMainStore} from "@/stores/mainStore";
import router from "@/router";
import {inject, ref} from "vue";
import UserInfoShow from "@/components/common/UserInfoShow.vue";
import UserOpsButton from "@/components/common/button/UserOpsButton.vue";

const store = useMainStore()
const props = defineProps<{article:Article}>()
let commentOpen = ref(false)
const likeOps = inject<()=>void>("likeOps")

// 编辑按钮
let toEdit = () => {
    router.push(('/blog/edit/'+props.article.aid))
}

// 评论按钮
let comment = () => {
    commentOpen.value = !commentOpen.value
}

</script>

<style>
.com-bottom-bar{
    position: fixed;
    left: 50%;
    bottom: 10px;
    width: 90%;
    margin-left: -45%;
    border-radius: 25px;

    display: flex;
    justify-content: center;
    border: 1px #b7b7bc solid;
    background: #e9ecef;
    transition: transform 0.5s ease;

    >.body{
        height: 50px;
        width: 90%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
.com-bottom-bar:hover{
    transform: scale(1.07);
    box-shadow: 0 0 10px #b7b7bc;
}
@media (min-width: 1200px) {
    .com-bottom-bar {
        width: 1100px;
        margin-left: -551px;
    }
}
</style>