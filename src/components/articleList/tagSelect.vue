<template>
    <div class="com-tag-select">
        <el-button
            v-for="t in store.tags" :key="t.value"
            @click="store.filter.tag = t.value"
            :type="store.filter.tag === t.value?'primary':null"
            round size="small"
        >{{ t.label }}</el-button>
    </div>
</template>

<script setup>
import {useArticleStore} from "@/store/article";

const store = useArticleStore()

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