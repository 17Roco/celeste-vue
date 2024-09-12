<template>
    <div class="com-tag-edit">
        <el-check-tag
            class="tag"
            round type="success"
            v-for="tag in store.filter.tags" :key="tag"
            @change="emit('change',$event,tag)" :checked="tags.find(v => v===tag)">
            {{ tag }}
        </el-check-tag>
    </div>
</template>

<script setup lang="ts">
import {useBlogStore} from "@/stores/blogStore.ts";

const store = useBlogStore()
const emit = defineEmits<{
    change:[boolean,string]
}>()
defineProps<{
    tags:Array<string>
}>()



</script>

<style>
.com-tag-edit {
    padding-right: 20px;
    >.tag{
        margin: 5px;
    }
}
</style>