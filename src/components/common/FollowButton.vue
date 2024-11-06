<script setup lang="ts">

import {useMainStore} from "@/stores/mainStore";
import {ElMessage} from "element-plus";
import SwitchButton from "@/components/common/SwitchButton.vue";

const store = useMainStore()
const user = defineModel<UserInfo>()
// 关注/取消关注用户
let followUser = async (isFollow: boolean) => {
    // 调用 store.follow 方法
    let b = await store.follow(user.value.uid,isFollow)
    // 显示提示信息
    ElMessage((isFollow ? '关注' : '取消关注') + user.value.username + (b ? '成功' : '失败'))
    // 更新用户信息
    user.value.isFollow = isFollow
}
</script>

<template>
    <SwitchButton
        v-if="user.uid !== store.userStatus?.userInfo?.uid"
        :is="user.isFollow" :label="['已关注','关注']" @change="followUser"/>
    <slot v-else/>
</template>

<style>

</style>