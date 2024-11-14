<script setup lang="ts">
import UserFollowList from "@/components/userFollowList/UserFollowList.vue"
defineProps<{
    uid?: number
}>()
</script>

<template>
    <UserFollowList :uid="uid" followed/>
</template>
