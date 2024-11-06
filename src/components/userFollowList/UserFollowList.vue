<script setup lang="ts">
import {onMounted, reactive, watchEffect} from "vue";
import {useMainStore} from "@/stores/mainStore";
import UserInfoItem from "@/components/common/UserInfoItem.vue";
import {ElMessage} from "element-plus";
import Pagination from "@/components/common/Pagination.vue";
import router from "@/router";

const store = useMainStore()
const props = defineProps<{
    uid?: number,
    index: number
}>()
let followerList = reactive<Page<UserInfo>>({
    pages:0,
    total:0,
    index:0,
    records:[]
})

let follow = async (uid: number, isFollow: boolean) => {
    let b = await store.follow(uid, isFollow)
    // 显示提示信息
    ElMessage((isFollow ? '关注' : '取消关注') + followerList.records.find(u => u.uid === uid).username + (b ? '成功' : '失败'))
    // 更新用户信息
    followerList.records.find(u => u.uid === uid).isFollow = isFollow
}

let changePage = (index: number)=>{
    router.push({query:{p:index}})
}

watchEffect(async () => {
    let result = await store.getFollowerList(props.uid || (await store.getSelfInfo()).uid,props.index)
    followerList.pages = result.pages
    followerList.total = result.total
    followerList.size = result.size
    followerList.current = result.current
    followerList.records = result.records
    followerList.records.forEach(u => u.isFollow = true)
})
</script>

<template>
    <div class="com-user-follow-list">
        <h1>关注列表</h1>
        <Pagination :list="followerList" v-model="followerList.current" class="pagination" @CurrentChange="changePage" />
        <user-info-item
            class="list"
            v-if="followerList.records.length > 0"
            v-for="follower in followerList.records" :user="follower" :key="follower.uid"
            @change="follow(follower.uid,$event)"
        />
        <div v-else></div>
    </div>
</template>

<style>
.com-user-follow-list{
    display: flex;
    flex-direction: column;
    align-items: center;

    .pagination{
        margin-bottom: 50px;
    }
}


</style>
