<script setup lang="ts">
import {computed, reactive, watchEffect} from "vue";
import {useMainStore} from "@/stores/mainStore";
import UserInfoItem from "@/components/common/UserInfoItem.vue";
import {ElMessage} from "element-plus";
import Pagination from "@/components/common/Pagination.vue";
import router from "@/router";
import {useRoute} from "vue-router";

const store = useMainStore()
const route = useRoute()
const props = defineProps<{ uid?: number }>()
let index = computed(()=> route.query.index || 1)

let followerList = reactive<Page<UserInfo>>({
    pages:0,
    total:0,
    index:0,
    size:0,
    records:[]
})

// 关注/取消关注
let follow = async (uid: number, isFollow: boolean) => {
    let b = await store.follow(uid, isFollow)
    // 显示提示信息
    ElMessage((isFollow ? '关注' : '取消关注') + followerList.records.find(u => u.uid === uid).username + (b ? '成功' : '失败'))
    // 更新用户信息
    followerList.records.find(u => u.uid === uid).isFollow = isFollow
}

// 监听用户列表
watchEffect(async () => {
    let result = await store.getFollowerList(props.uid,route.query.index || 1)
    followerList.pages = result.pages
    followerList.total = result.total
    followerList.size = result.size
    followerList.current = result.current
    followerList.records = result.records
    followerList.records.forEach(u => u.isFollow = true)
})


let changePage = (index: number) => router.push({query:{index}})

</script>

<template>
    <div class="com-user-follow-list">
        <!-- 标题 -->
        <h1>关注列表</h1>
        <!-- 分页 -->
        <Pagination :list="followerList" class="pagination" @change="changePage" :current-page="index.value" />
        <!-- 列表 -->
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
