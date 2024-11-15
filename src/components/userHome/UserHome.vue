<script setup lang="ts">

import {useMainStore} from "@/stores/mainStore";
import {provide, ref, watchEffect} from "vue";
import UserInfoShow from "@/components/userHome/UserInfoShow.vue";
import UserShowItem from "@/components/userHome/UserArticleShow.vue";
import ShowBox from "@/components/common/showBox/ShowBox.vue";
import {ElMessage} from "element-plus";

const store = useMainStore()
const props = defineProps<{
    uid?: number
}>()

provide("followOps", async ()=>{
    // 关注/取消关注
    let u = userInfo.value as UserInfo
    let b = await store.follow(u.uid,!u.isFollow)
    ElMessage((!u.isFollow ? '关注' : '取消关注') + (b ? '成功' : '失败'))
    if (b)
        u.isFollow =!u.isFollow
        // (userInfo.value as UserInfo).isFollow =!userInfo.value?.isFollow
})

// 用户信息
let userInfo = ref<UserInfo|null>(null)
// 获取用户信息
watchEffect(async ()=>{
    userInfo.value = await store.getUser(props.uid)
})

</script>

<template>
    <ShowBox class="com-user-home" :object="userInfo">
        <!-- 显示用户信息 -->
        <user-info-show :user-info="userInfo"/>
        <!-- 显示用户文章 -->
        <user-show-item :uid="uid"/>
    </ShowBox>
</template>

<style>
.com-user-home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}
</style>