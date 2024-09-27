<template>
    <div class="com-info-bar">
        <p class="info">
            <router-link :to="'/user/'+article.user.uid" v-if="!edit">作者 : {{ article.user.username }}</router-link>
            <span>like:{{ article.likee }} |</span>
            <span>watch:{{ article.watch }} |</span>
            <span>{{ moment(article.updateTime).format('YYYY-MM-DD') }}</span>
        </p>
        <div v-if="edit" class="opt">
            <el-button size="small" round @click.stop="router.push('/blog/article/'+article.aid)">查看</el-button>
            <el-button size="small" round @click.stop="router.push('/blog/edit/'+article.aid)">编辑</el-button>
            <el-button size="small" round @click.stop="delArticle">删除</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from "moment";
import router from "@/router";
import {ElMessage,ElMessageBox} from "element-plus";


const prop = defineProps<{
    article:Article,
    edit:boolean
}>()

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
    align-items: center;
    > .info {
        color: #9b9ba0;
        padding: 0 5px;
    }
    >.opt {
        display: flex;
        flex-wrap: nowrap;
    }
}

</style>