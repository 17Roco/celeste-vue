<template>
    <div class="com-info-bar">
        <div class="info">
            <router-link to="/about">作者 : {{ props.article.user }}</router-link>
            <span>like:{{ props.article.like }}</span></div>
        <div v-if="props.edit">
            <el-button size="small" round>查看</el-button>
            <el-button size="small" round>编辑</el-button>
            <el-button size="small" round>删除</el-button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    "article":Object,
    "edit":Boolean
})

</script>

<style>
.com-info-bar{
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;

}
</style>