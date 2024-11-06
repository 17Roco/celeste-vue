<template>
    <div class="com-bottom-bar">
        <div class="body">
            <!-- 作者信息 -->
            <div class="user-info" v-if="article.user.uid !== store.userStatus?.userInfo?.uid">
                <!-- 头像 -->
                <router-link :to="'/user/' + article.user.uid">
                    <el-avatar :src="article.user.img" size="default"/>
                </router-link>
                <!-- 昵称 -->
                <router-link :to="'/user/' + article.user.uid">
                    <span style="margin-right: 30px">{{ article.user.username }}</span>
                </router-link>
                <!-- 关注按钮 -->
                <FollowButton v-model="article.user"/>
            </div>
            <!-- 编辑按钮 -->
            <div class="user-info" v-else>
                <el-button @click="toEdit">编辑</el-button>
            </div>
            <!-- 操作 -->
            <div class="opt">
                <LikeButton v-model="article"></LikeButton>
                <el-button @click="comment">评论</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from "@/router";
import FollowButton from "@/components/common/FollowButton.vue";
import {useMainStore} from "@/stores/mainStore";
import LikeButton from "@/components/common/LikeButton.vue";

const props = defineProps<{aid:number}>()
const article = defineModel<Article>()
const store = useMainStore()


let toEdit = () => {
    router.push(('/blog/edit/'+props.aid))
}

let comment = () => {

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