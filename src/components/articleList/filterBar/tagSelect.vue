<template>
    <div class="com-tag-select">
        <el-button
            v-for="t in store.filter.tags" :key="t"
            @click="clickTag(t)"
            :type="tag === t?'primary':null"
            round size="small"
        >{{ t }}</el-button>
    </div>
</template>

<script setup>

import {reactive} from "vue";
import {useMainStore} from "@/stores/mainStore.ts";

const store = useMainStore()

let tags = reactive(['1','2','3','4'])
const tag = defineModel()


let clickTag = (title)=>{
    tag.value = (tag.value === title) ? undefined : title
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