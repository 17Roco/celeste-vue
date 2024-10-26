<template>
    <div class="com-filter-bar">
        <!--    tag    -->
        <tag-select v-model="filter.tag" />
        <div class="button-bar">
            <!--    排序    -->
            <el-segmented :options="store.filter.order" v-model="filter.order"/>
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
import {reactive, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {useBlogStore} from "@/stores/blogStore";
import {formatDate} from "@/util/TimeUtil";
import router from "@/router";


const store = useBlogStore()
const route = useRoute()
defineProps<{articleList:Page<Article>}>()


let filter = reactive<Filter>({
    index:undefined,
    order:store.filter.order[0],
    tag:undefined,
    beginTime:undefined,
    endTime: undefined,
})

// 更新时间范围
let changeTime = (beginTime:Date,endTime:Date)=>{
    filter.beginTime = beginTime ? formatDate(beginTime) : undefined
    filter.endTime   = endTime   ? formatDate(endTime)   : undefined
}

// 更新路径
watchEffect(()=>router.push({
  path:route.path,
  query:filter
}))
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