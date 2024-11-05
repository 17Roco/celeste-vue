<script setup lang="ts">

import FollowButton from "@/components/other/FollowButton.vue";
import {useMainStore} from "@/stores/mainStore";

const store = useMainStore();
const user = defineModel<UserInfo>();

</script>

<template>
    <div class="com-user-info-item" v-if="user.uid !== store.userStatus?.userInfo?.uid">
        <!-- 头像 -->
        <router-link :to="'/user/' + user.uid">
            <el-avatar :src="user.img" size="default"/>
        </router-link>
        <!-- 昵称 -->
        <router-link :to="'/user/' + user.uid">
            <span style="margin-right: 30px">{{ user.username }}</span>
        </router-link>
        <!-- 关注按钮 -->
        <FollowButton v-model="user"><slot/></FollowButton>
    </div>
</template>

<style>

>.com-user-info-item{
    display: flex;
    align-items: center;
}
</style>