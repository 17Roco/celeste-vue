<script setup lang="ts">
import {useMainStore} from "@/stores/mainStore";
import {ref} from "vue";
import {ElMessage} from "element-plus";

const store = useMainStore()

const props = defineProps<{
    user:UserInfo
}>()
const emit = defineEmits<{
    (e:"follow",b:boolean):void;
}>()
let loading = ref(false)

let follow = async () => {
    loading.value = true
    // 关注/取消关注
    let b = await store.follow(props.user.uid,!props.user.isFollow)
    ElMessage((!props.user.isFollow ? '关注' : '取消关注') + (b ? '成功' : '失败'))
    // 触发事件，通知父组件
    emit("follow",!props.user.isFollow)
    loading.value = false
}
</script>


<template>
    <el-button type="primary" @click="follow" v-loading="loading">
        {{ user.isFollow ? "取消关注" : "关注" }}
    </el-button>
</template>
