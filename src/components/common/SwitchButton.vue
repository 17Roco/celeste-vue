<script setup lang="ts">

const emit = defineEmits<{
    change: (is: boolean) => void
}>()
const props = defineProps<{
    is:boolean,
    label:[string,string]
}>()


</script>

<template>
    <el-button @click="$emit('change',!is)">
        {{is ? label[0] : label[1]}}
    </el-button>
</template>
