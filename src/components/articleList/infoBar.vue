<template>
    <div class="com-info-bar">
        <div class="info">
            <span>作者 : {{ props.article.uid }}</span>
            <span>like:{{ props.article.likee }} |</span>
            <span>watch:{{ props.article.watch }} |</span>
            <span>{{ moment(props.article.updateTime).format('YYYY-MM-DD') }}</span>
        </div>
        <div v-if="props.edit">
            <el-button size="small" round>查看</el-button>
            <el-button size="small" round @click.stop="router.push('/blog/editor/'+props.article.aid)">编辑</el-button>
            <el-button size="small" round @click.stop="delArticle">删除</el-button>
        </div>
    </div>
</template>

<script setup>
import moment from "moment";
import {ElMessage,ElMessageBox} from "element-plus";
import router from "@/router";

const props = defineProps({
    "article":Object,
    "edit":Boolean
})

let delArticle = () => {
    // ElMessage({message:'del'})
    ElMessageBox.confirm('你确定要删除这篇文章吗？', '警告', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }).catch(()=>{})
    .then(() => {
        ElMessage("ok")
    })
}






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