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
import {ref} from "vue";
const store = useBlogStore()

const emit = defineEmits<{ change: (tag: string)=>void }>()

const tag = ref<string>()
let change = (t:string) => {
    tag.value = (tag.value === t) ? null : t
    emit("change", tag.value)
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