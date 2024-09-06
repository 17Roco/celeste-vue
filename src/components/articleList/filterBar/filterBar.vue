<template>
    <div class="com-filter-bar">
        <!--    tag    -->
        <tag-select v-model="filter.tag"/>
        <div class="button-bar">
            <!--    排序    -->
            <el-segmented
                :options="store.filter.order"
                size="large"
                v-model="filter.order"/>
            <!--    顶部分页    -->
            <div class="page-bar">
                <el-pagination
                    background layout="prev, pager, next"
                    @change="toTop"
                    v-show="articleList.pages > 1"
                    :total="articleList.total"
                    :page-count="articleList.pages"
                    v-model:current-page="filter.index"
                />
            </div>
            <!--    时间范围    -->
            <el-date-picker
                style="max-width: 200px"
                v-model="timeRange"
                type="daterange"
                unlink-panels
                range-separator="到"
                start-placeholder="起始时间"
                end-placeholder="结束时间"
                size="default"
                :disabled-date="t => t > new Date()"
            />
        </div>
    </div>
</template>

<script setup>

import TagSelect from "@/components/articleList/filterBar/tagSelect.vue";
import {reactive} from "vue";
import {useMainStore} from "@/stores/mainStore.ts";

const store = useMainStore()

defineProps(["articleList"])


let filter = reactive({
    tag:"tag_1",
    order:"最新",
    index:1
})
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