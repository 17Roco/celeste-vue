<script setup lang="ts">
import UserHome from "@/components/userHome/UserHome.vue";

defineProps<{uid?:number}>()
</script>

<template>
    <UserHome :uid="uid"/>
</template>
