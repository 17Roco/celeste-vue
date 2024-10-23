<template>
    <div class="com-tag-edit">
        <el-tag class="tag" v-for="tag in tags" :key="tag" type="primary" closable round hit @close="close(tag)">
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
import {ElMessageBox} from "element-plus";

const store = useBlogStore()
const props = defineProps<{
    tags:Array<string>
}>()
let emit = defineEmits<{
    changeTag:[b:boolean,tag:string]
}>()

let uncheckTags = computed(() => store.filter.tags.filter(tag => !props.tags.includes(tag)))
let close = (tag:string) => ElMessageBox.confirm('确定要删除吗?', '', {confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning',}).then(()=>emit("changeTag",false,tag))
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