<script setup lang="ts">

import {useMainStore} from "@/stores/mainStore";
import {provide, ref, watchEffect} from "vue";
import UserInfoShow from "@/components/userHome/UserInfoShow.vue";
import UserShowItem from "@/components/userHome/UserArticleShow.vue";
import EmptyBox from "@/components/common/EmptyBox.vue";

const store = useMainStore()
const props = defineProps<{
    uid?: number
}>()

// 用户信息
let userInfo = ref<UserInfo|null>(null)
// 获取用户信息
watchEffect(async ()=>{
    userInfo.value = await store.getUser(props.uid)
})


provide("updateFollow", async (b:boolean)=>{
    // 更新关注状态
    if(userInfo.value)
        userInfo.value.isFollow = b
})

</script>

<template>
    <div class="com-user-home" v-if="userInfo">
        <!-- 显示用户信息 -->
        <user-info-show :user-info="userInfo"/>
        <!-- 显示用户文章 -->
        <user-show-item :uid="uid"/>
    </div>
    <EmptyBox v-else/>
</template>

<style>
.com-user-home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}
</style>