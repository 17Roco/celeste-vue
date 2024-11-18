<template>
    <div class="com-bottom-bar">
        <div class="body">
            <!-- 作者信息 -->
<!--            <div class="user-info" v-if="article.user.uid !== store.self?.uid">-->
<!--                &lt;!&ndash; 头像 &ndash;&gt;-->
<!--                <router-link :to="'/user/' + article.user.uid">-->
<!--                    <el-avatar :src="article.user.img" size="default"/>-->
<!--                </router-link>-->
<!--                &lt;!&ndash; 昵称 &ndash;&gt;-->
<!--                <router-link :to="'/user/' + article.user.uid">-->
<!--                    <span style="margin-right: 30px">{{ article.user.username }}</span>-->
<!--                </router-link>-->
<!--                &lt;!&ndash; 关注按钮 &ndash;&gt;-->
<!--                <FollowButton :user="article.user"/>-->
<!--            </div>-->
<!--            &lt;!&ndash; 编辑按钮 &ndash;&gt;-->
<!--            <div class="user-info" v-else>-->
<!--                <el-button @click="toEdit">编辑</el-button>-->
<!--            </div>-->
            <user-info-show :user="article.user" avatar text follow-opt/>
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
    bottom: 0;
    width: 1240px;
    margin-left: -620px;

    display: flex;
    justify-content: center;
    border: 1px #b7b7bc solid;
    border-bottom: 0;
    border-radius:15px 15px 0 0;
    background: #e9ecef;

    >.body{
        width: 1000px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        >.user-info{
            display: flex;
            align-items: center;
        }
    }
}

@media (min-width: 1200px) {
    width: 1200px;
}
</style>