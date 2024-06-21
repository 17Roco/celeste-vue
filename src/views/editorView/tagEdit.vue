<template>
    <div class="com-tag-edit">
        <el-check-tag v-for="t in store.tags" :key="t.title" round type="success" class="tag" @change="change($event,t.title)" :checked="checkedTag[t.title]">{{ t.title }}</el-check-tag>
    </div>
</template>

<script setup>
import {ref,watch} from "vue";
import {useArticleStore} from "@/store/article";

const props = defineProps(['tags','aid'])
const emit = defineEmits(['change'])
const store = useArticleStore()

let checkedTag = ref({})

watch(()=>props.tags,()=>{
    checkedTag.value = {}
    props.tags.forEach(tag=>{checkedTag.value[tag]=true})
})



let change = (check,tag)=>{
    checkedTag.value[tag]=check
    if (props.aid){
        check ? store.addTag(props.aid,tag) : store.deleteTag(props.aid,tag)
    }else {
        emit('change',checkedTag.value)
    }
}
</script>

<style>
.com-tag-edit {
    >.tag{
        margin: 5px;
    }
}
</style>