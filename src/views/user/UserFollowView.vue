<script setup lang="ts">
import UserFollowList from "@/components/userFollowList/UserFollowList.vue"
const props = defineProps<{
    uid?: number
}>()
</script>

<template>
    <UserFollowList :uid="uid" />
</template>
