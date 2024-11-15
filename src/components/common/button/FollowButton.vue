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
    await store.follow(props.user.uid,!props.user.isFollow)
    emit("follow",!user.isFollow)
    ElMessage((!article.value.isLike ? '关注' : '取消关注') + (b ? '成功' : '失败'))
    loading.value = false
}
</script>


<template>
    <el-button type="primary" @click="follow" v-loading="loading">
        {{ user.isFollow ? "取消关注" : "关注" }}
    </el-button>
</template>
