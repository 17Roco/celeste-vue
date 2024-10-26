<script setup lang="ts">
import Editer from "@/components/editer/Editer.vue";

defineProps<{aid:number}>()

</script>

<template>
    <Editer :aid="aid"/>
</template>

<style>

</style>