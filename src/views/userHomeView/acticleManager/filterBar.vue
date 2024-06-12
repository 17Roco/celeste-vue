<template>
    <div class="com-filter-bar">
        <el-segmented v-model="order" :options="options" size="large" @change="change"/>
        <el-date-picker
            class="data-picker"
            v-model="timeRange"
            type="daterange"
            unlink-panels
            range-separator="到"
            start-placeholder="起始时间"
            end-placeholder="结束时间"
            size="default"
            :disabled-date="disDate"
            @change="change"
            />
        </div>
</template>

<script setup>
import { defineEmits, reactive, ref } from 'vue';

const emit = defineEmits(['change'])


let order = ref("new")
let timeRange = ref()
let options = reactive([
    {"value":'new','label':'最新'},
    {"value":'like','label':'高赞'},
    {"value":'watch','label':'高浏览量'}
])

let change = (y)=> emit('change',{order,timeRange})
let disDate = (t)=> t > new Date()


</script>

<style lang="less">
.com-filter-bar{
    display: flex;
    justify-content: space-between;
    .data-picker{
        max-width: 400px;
    }
}
</style>