<script setup lang="ts">
import {ref, watchEffect} from "vue";
import {toDate} from "@/util/TimeUtil";
import {useRoute} from "vue-router"
import {Delete} from '@element-plus/icons-vue'

const route = useRoute()
const emit = defineEmits<{
    change:[Date,Date]
}>()

let beginTime = ref<Date | null>(route.query.beginTime ? toDate(route.query.beginTime) : null);
let endTime = ref<Date | null>(route.query.endTime ? toDate(route.query.endTime) : null);

watchEffect(()=>{
    beginTime.value = route.query.beginTime ? toDate(route.query.beginTime) : null
    endTime.value = route.query.endTime ? toDate(route.query.endTime) : null
})
watchEffect(() => emit("change",beginTime.value,endTime.value))

</script>

<template>
    <div class="com-date-select">
        <el-date-picker class="select" :disabled-date="date => endTime ? date>endTime : false" type="date" placeholder="起始时间" v-model="beginTime"/>
        <el-date-picker class="select" :disabled-date="date => beginTime ? date<beginTime : false" type="date" placeholder="结束时间" v-model="endTime"/>
        <el-button type="info" size="small" :icon="Delete" circle @click="beginTime = endTime = null"/>
    </div>
</template>

<style>
.com-date-select{
    margin-right: -10px;
    >.select{
        width: 160px;
        margin-right: 5px;
    }
}
</style>