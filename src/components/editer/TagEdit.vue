<template>
    <div class="com-tag-edit">
        <el-check-tag
            class="tag"
            round type="success"
            v-for="tag in store.filter.tags" :key="tag"
            @change="change($event,tag)"
            :checked="tags.find(v => v===tag) != undefined">
            {{ tag }}
        </el-check-tag>
    </div>
</template>

<script setup lang="ts">
import {useBlogStore} from "@/stores/blogStore.ts";

const store = useBlogStore()
const tags = defineModel<Array<string>>()

let change = (check:boolean,tag:string)=>{
    check ? tags.value.push(tag) : tags.value = tags.value.filter(t=>t!==tag)
}
</script>

<style>
.com-tag-edit {
    padding-right: 20px;
    >.tag{
        margin: 5px;
    }
}
</style>