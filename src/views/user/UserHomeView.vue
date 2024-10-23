<script setup lang="ts">

import UserHome from "@/components/userHome/UserHome.vue";
import {useMainStore} from "@/stores/mainStore";

const store = useMainStore()
defineProps<{uid:number|null}>()
</script>

<template>
    <UserHome :uid="uid"/>
</template>

<style>

</style>