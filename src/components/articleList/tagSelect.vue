<template>
    <div class="com-tag-select">
        <el-button
            v-for="t in store.tags" :key="t.title"
            @click="clickTag(t.title)"
            :type="tag === t.title?'primary':null"
            round size="small"
        >{{ t.title }}</el-button>
    </div>
</template>

<script lang="ts" setup>
import {useArticleStore} from "@/store/article";
import {defineModel} from "vue"

const store:any = useArticleStore()
const tag:any = defineModel()

store.loadTags()

let clickTag = (title)=>{
    tag.value = (tag.value === title) ? undefined : title
}

</script>

<style>
.com-tag-select{
    display: flex;
    flex-wrap: wrap;
    padding: 0 60px;
    >button{
        margin-bottom: 10px;
    }
}
</style>