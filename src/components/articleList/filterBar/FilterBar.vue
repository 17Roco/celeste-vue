<template>
    <div class="com-filter-bar">
        <!--    tag    -->
        <tag-select :tag="filter?.tag" @change="updateFilter({tag: $event})"/>
        <div class="button-bar">
            <!--    排序    -->
            <el-segmented :options="store.filter.order" v-model="order">
                <template #default="{item}">{{ store.filter._oder[item] }}</template>
            </el-segmented>
            <!--    时间范围    -->
            <DateSelect @change="changeTime"/>
        </div>
        <div style="width:100%;display:flex;justify-content: center;">
            <Pagination v-if="articleList" :list="articleList" @change="updateFilter({index: $event})" />
        </div>
    </div>
</template>

<script setup lang="ts">
import TagSelect from "@/components/articleList/filterBar/tagSelect.vue";
import Pagination from "@/components/common/Pagination.vue";
import DateSelect from "@/components/articleList/filterBar/DateSelect.vue";
import {computed, inject} from "vue";
import {useRoute} from "vue-router";
import {useBlogStore} from "@/stores/blogStore";
import {formatDate} from "@/util/TimeUtil";
import router from "@/router";

const store = useBlogStore()
const route = useRoute()

// 注入文章过滤器
let filter = inject<ArticleFilter>("articleFilter")
// 注入文章列表
let articleList = inject<Page<Article>>("articleList")


// 更新时间范围
let changeTime = (beginTime:Date,endTime:Date)=>{
    updateFilter({
        beginTime: beginTime ? formatDate(beginTime) : undefined,
        endTime: endTime   ? formatDate(endTime)   : undefined
    })
}
// 排序方式
let order = computed({
    get:() => filter.value.order,
    set:(value:string)=> updateFilter({order: value})
})

// 更新路径
let updateFilter = (filter:ArticleFilter) =>
    router.push({
    query:{...route.query, ...filter}
})

</script>

<style lang="less">
.com-filter-bar{
    margin: 10px 30px;
    display: flex;
    flex-direction: column;
    >.button-bar{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
}


/**/
@media (max-width: 400px) {
    .com-filter-bar {
        >.button-bar{
            flex-direction: column;
            >div{
                margin-bottom: 10px;
            }
        }
    }
}
</style>