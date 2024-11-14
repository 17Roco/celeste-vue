<script setup lang="ts">
import {computed, reactive, ref, watch, watchEffect} from "vue";
import {useMainStore} from "@/stores/mainStore";
import UserInfoItem from "@/components/common/UserInfoShow.vue";
import {ElMessage} from "element-plus";
import Pagination from "@/components/common/Pagination.vue";
import router from "@/router";
import {useRoute} from "vue-router";

const store = useMainStore()
const route = useRoute()
const props = defineProps<{
    uid?: number,
    index: number,
    followed: boolean
}>()

let index = computed(()=> route.query.index || 1)

let list = ref<Page<UserInfo>|null>(null)

// 关注/取消关注
let follow = async (uid: number, isFollow: boolean) => {
    let b = await store.follow(uid, isFollow)
    // 显示提示信息
    ElMessage((isFollow ? '关注' : '取消关注') + list.value.records.find(u => u.uid === uid).username + (b ? '成功' : '失败'))
    // 更新用户信息
    list.value.records.find(u => u.uid === uid).isFollow = isFollow
}

// 监听用户列表
watchEffect(async () => {
    if (props.followed) {
        list.value = await store.getFollowedList(props.uid, props.index)
    }else {
        list.value = await store.getFollowerList(props.uid, props.index)
        list.value.records.forEach(u => u.isFollow = true)
    }
})


let changePage = (index: number) => router.push({query:{index}})

</script>

<template>
    <div class="com-user-follow-list">
        <!-- 标题 -->
        <h1>{{ followed ? '被' : ''}}关注列表</h1>
        <!-- 分页 -->
        <Pagination v-if="list" :list="list" class="pagination" @change="changePage" :current-page="index" />
        <!-- 列表 -->
        <user-info-item
            class="item"
            follow-opt text avatar
            v-if="list && list.records.length > 0"
            v-for="follower in list.records" :user="follower" :key="follower.uid"
            @change="follow(follower.uid,$event)"
        />
        <div v-else>
            <p>{{ followed ? '暂无被用户关注' : '暂无关注用户'}}</p>
        </div>
    </div>
</template>

<style>
.com-user-follow-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    //width: 600px;

    .pagination{
        margin-bottom: 50px;
    }
    >.item{
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
    }
}


</style>
