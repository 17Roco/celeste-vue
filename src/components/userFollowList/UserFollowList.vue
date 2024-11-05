<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {useMainStore} from "@/stores/mainStore";
import UserFollowItem from "@/components/userFollowList/UserFollowItem.vue";
import UserInfoItem from "@/components/other/UserInfoItem.vue";

const store = useMainStore()
const props = defineProps<{ uid?: number }>()
let followerList = reactive<Page<UserInfo>>({
    pages:0,
    total:0,
    index:0,
    records:[]
})

onMounted(async () => {
    let result = await store.getFollowerList(props.uid,1)
    followerList.pages = result.pages
    followerList.total = result.total
    followerList.index = result.index
    followerList.records = result.records
})
</script>

<template>
    <div>
        <h1>User Follow List</h1>
        <user-info-item v-for="follower in followerList.records" v-model="follower" :key="follower.uid" />
    </div>
</template>

<style>

</style>