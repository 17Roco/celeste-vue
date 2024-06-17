<template>
    <div class="com-info-bar">
        <div class="info">
            <router-link to="/about">作者 : {{ props.article.uid }}</router-link>
            <span>like:{{ props.article.likee }} |</span>
            <span>watch:{{ props.article.watch }} |</span>
            <span>{{ moment(props.article.updateTime).format('YYYY-MM-DD') }}</span>
        </div>
        <div v-if="props.edit">
            <el-button size="small" round>查看</el-button>
            <el-button size="small" round>编辑</el-button>
            <el-button size="small" round>删除</el-button>
        </div>
    </div>
</template>

<script setup>
import moment from "moment";

const props = defineProps({
    "article":Object,
    "edit":Boolean
})

</script>

<style>
.com-info-bar {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;

    > .info {

        > span {
            color: #b7b7bc;
            padding: 0 5px;
        }
    }
}

</style>