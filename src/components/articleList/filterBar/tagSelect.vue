<template>
    <div class="com-tag-select">
        <el-button
            round size="small"
            v-for="t in store.filter.tags" :key="t"
            :type="tag === t?'primary':null"
            @click="$emit('change', t === tag ? null : t)"
        >{{ t }}</el-button>
    </div>
</template>

<script setup lang="ts">
import {useBlogStore} from "@/stores/blogStore";
const store = useBlogStore()

defineProps<{tag:string|null}>()
defineEmits<{change: (tag:string|null) => void}>()

</script>

<style>
.com-tag-select{
    display: flex;
    flex-wrap: wrap;
    >button{
        margin-bottom: 10px;
    }
}
</style>