<template>
    <div class="com-tag-select">
        <el-button
            v-for="t in store.filter.tags" :key="t"
            @click="change(t)"
            :type="tag === t?'primary':null"
            round size="small"
        >{{ t }}</el-button>
    </div>
</template>

<script setup lang="ts">

import {useBlogStore} from "@/stores/blogStore";
const store = useBlogStore()
const tag = defineModel<string|null>()

// 修改标签
let change = (t:string) => tag.value = (tag.value === t) ? null : t

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