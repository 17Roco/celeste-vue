<template>
    <div class="com-filter-bar">
        <!--    tag    -->
        <tag-select v-model="filter.tag"/>
        <div class="button-bar">
            <!--    排序    -->
            <el-segmented size="large" :options="store.filter.order" v-model="filter.order"/>
            <!--    顶部分页    -->
            <Pagination :article-list="articleList" v-model="filter.index"/>
            <!--    时间范围    -->
            <DateSelect v-model="filter.timeRange"/>
        </div>
    </div>
</template>

<script setup>
import TagSelect from "@/components/articleList/filterBar/tagSelect.vue";
import Pagination from "@/components/articleList/filterBar/Pagination.vue";
import DateSelect from "@/components/articleList/filterBar/DateSelect.vue";
import {useMainStore} from "@/stores/mainStore.ts";


const store = useMainStore()
defineProps(["articleList","filter"])



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