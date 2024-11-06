<script setup lang="ts">

import UserFollowList from "@/components/userFollowList/UserFollowList.vue"
const props = defineProps<{
    uid: number,
    index?: number
}>()
</script>

<template>
    <UserFollowList :uid="uid" :index="index||1" />
</template>

<style>

</style>