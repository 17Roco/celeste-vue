<script setup lang="ts">

import {useMainStore} from "@/stores/mainStore";
import {ElMessage} from "element-plus";

const props = defineProps<{
    user:UserInfo,
    change:(boolean)=>void,
}>()
const store = useMainStore()

// 关注/取消关注用户
let followUser = async () => {
    // 调用 store.follow 方法
    let b = await store.follow(props.user.uid,!props.user.isFollow)
    // 显示提示信息
    ElMessage((props.user.isFollow ? '取消关注' : '关注') + props,user.username + (b ? '成功' : '失败'))
    // 更新用户信息
    if(b) props.change(!props.user.isFollow)
}
</script>

<template>
    <el-button v-if="user.uid !== store.userStatus?.userInfo?.uid" @click="followUser">
        {{user.isFollow? '已关注' : '关注'}}
    </el-button>
    <slot v-else/>
</template>

<style>

</style>