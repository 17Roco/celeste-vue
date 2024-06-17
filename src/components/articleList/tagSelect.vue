<template>
    <div class="com-tag-select">
        <el-button
            v-for="t in store.tags" :key="t.title"
            @click="clickTag(t.title)"
            :type="store.filter.tag === t.title?'primary':null"
            round size="small"
        >{{ t.title }}</el-button>
    </div>
</template>

<script setup>
import {useArticleStore} from "@/store/article";

const store = useArticleStore()
store.loadTags()

let clickTag = (title)=>{
    store.filter.tag = (store.filter.tag === title) ? null : title
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