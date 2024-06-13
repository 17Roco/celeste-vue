<template>
    <div class="com-tag-select">
        <el-button
            v-for="t in props.tags" :key="t.value"
            @click="check(t.value)"
            :type="tag === t.value?'primary':null"
            round size="small"
        >{{ t.label }}</el-button>
    </div>
</template>

<script setup>
const props = defineProps({
    tags:Array
})
const tag = defineModel()

const check = (val)=>{
    if(tag.value === val)
        tag.value = null
    else
        tag.value = val
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