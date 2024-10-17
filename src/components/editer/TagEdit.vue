<template>
    <div class="com-tag-edit">
        <el-tag class="tag" v-for="tag in tags" :key="tag" type="primary" closable round hit @close="$emit('changeTag',false,tag)">
            {{ tag }}
        </el-tag>
        <el-select class="new-tag" filterable placeholder="点击添加标签" @change="$emit('changeTag',true,$event)">
            <el-option v-for="tag in uncheckTags" :key="tag" :value="tag"/>
        </el-select>
    </div>
</template>

<script setup lang="ts">
import {useBlogStore} from "@/stores/blogStore.ts";
import {computed} from "vue";

const store = useBlogStore()
const props = defineProps<{
    tags:Array<string>,
    aid:number
}>()
defineEmits<{
    changeTag:[b:boolean,tag:string]
}>()
let uncheckTags = computed(() => store.filter.tags.filter(tag => !props.tags.includes(tag)))

</script>

<style>
.com-tag-edit {
    padding-right: 20px;
    >.tag{
        font-size: 14px;
        margin: 5px;
    }
    >.new-tag{
        margin-left: 20px;
        width: 120px
    }
}
</style>