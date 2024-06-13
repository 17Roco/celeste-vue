<template>
    <div class="com-info-bar">
        <template v-if="props.edit">
            <el-button>查看</el-button>
            <el-button>编辑</el-button>
            <el-button>删除</el-button>
        </template>
        <template v-else>
            <router-link to="/about">作者 : {{ props.article.user }}</router-link>
            <span>like:{{ props.article.like }}</span>
        </template>
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
    padding: 5px 0;
    display: flex;
    >*{
        padding: 0 10px;
        line-height: 1.5;
    }
}
</style>