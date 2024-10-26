<template>
    <div class="com-filter-bar">
        <!--    tag    -->
        <tag-select @change="change({tag:$event || undefined})" />
        <div class="button-bar">
            <!--    排序    -->
            <el-segmented size="large" :options="store.filter.order" v-model="order"/>
            <!--    顶部分页    -->
            <Pagination :article-list="articleList" v-model="filter.index"/>
            <!--    时间范围    -->
            <DateSelect @change="changeTime"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import TagSelect from "@/components/articleList/filterBar/tagSelect.vue";
import Pagination from "@/components/articleList/filterBar/Pagination.vue";
import DateSelect from "@/components/articleList/filterBar/DateSelect.vue";
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useRoute} from "vue-router";
import router from "@/router";
import {useBlogStore} from "@/stores/blogStore";
import {formatDate, toDate} from "@/util/TimeUtil";


const store = useBlogStore()
const route = useRoute()
defineProps<{
    articleList:Page<Article>
}>()
let order = ref<string>(store.filter.order[0])


let filter = reactive<Filter>({
    index:route.query.index ||1,
    order:route.query.order ||"最新",
    tag:route.query.tag,
    beginTime:null,
    endTime: null,
})

let changeTime = (beginTime:Date,endTime:Date)=>{
    filter.beginTime = beginTime ? formatDate(beginTime) : undefined
    filter.endTime = endTime ? formatDate(endTime) : undefined
}

// watch(filter,()=>{
//     // 更新路径
//     router.push({path:route.path,query:filter})
// },{deep:true})

let change = (filter:Filter) => {
    console.log(filter);
}
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