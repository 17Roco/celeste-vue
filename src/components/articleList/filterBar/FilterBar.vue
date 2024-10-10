<template>
    <div class="com-filter-bar">
        <!--    tag    -->
        <tag-select v-model="filter.tag" />
        <div class="button-bar">
            <!--    排序    -->
            <el-segmented size="large" :options="store.filter.order" v-model="filter.order"/>
            <!--    顶部分页    -->
            <Pagination :article-list="articleList" v-model="filter.index"/>
            <!--    时间范围    -->
            <DateSelect v-model="timeRange"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import TagSelect from "@/components/articleList/filterBar/tagSelect.vue";
import Pagination from "@/components/articleList/filterBar/Pagination.vue";
import DateSelect from "@/components/articleList/filterBar/DateSelect.vue";
import {computed, reactive, watch} from "vue";
import {useRoute} from "vue-router";
import router from "@/router";
import {useBlogStore} from "@/stores/blogStore";
import {formatDate, toDate} from "@/util/TimeUtil";


const store = useBlogStore()
const route = useRoute()
const props = defineProps<{
    articleList:Page<Article>
}>()


let filter = reactive<Filter>({
    index:route.query.index ||1,
    order:route.query.order ||"最新",
    tag:route.query.tag,
    beginTime:undefined,
    endTime: undefined,
})

let timeRange = computed({
    get:()=> [
        route.query.beginTime?toDate(route.query.beginTime):route.query.beginTime,
        route.query.endTime?toDate(route.query.endTime):route.query.endTime
    ],
    set:(time:Array<Date>|null)=>{
        if(time){
            filter.beginTime = time[0]?formatDate(time[0]):undefined
            filter.endTime = time[1]?formatDate(time[1]):undefined
        }else {
            filter.beginTime = filter.endTime = undefined
        }
    }
})

watch(filter,()=>{
    router.push({path:route.path,query:filter})
},{deep:true})



</script>

<style lang="less">
.com-filter-bar{
    margin: 10px 60px;
    display: flex;
    flex-direction: column;
    >.button-bar{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
}
</style>