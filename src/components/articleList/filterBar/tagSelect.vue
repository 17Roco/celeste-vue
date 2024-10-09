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
const tag = defineModel()
let change = (t:string) => {
    tag.value === t ? tag.value = null : tag.value = t
}

</script>

<style>
.com-tag-select{
    display: flex;
    flex-wrap: wrap;
    //padding: 0 30px;
    >button{
        margin-bottom: 10px;
    }
}
</style>