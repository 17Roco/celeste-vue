<template>
    <div class="com-tags">
        <el-menu-item :index="'/article/tag/'+tag" v-for="tag in props.tags" :key="tag" @click="fun">
            <el-tag type="primary" class="tag">{{ tag }}</el-tag>
        </el-menu-item>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(['tags'])


let fun = (index) =>{
    // console.log(index.indexPath)
    // console.log(index)
}


</script>
<style>
.com-tags{
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    .tag{
        font-size: 16px;
    }
}
</style>