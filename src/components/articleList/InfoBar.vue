<template>
    <div class="com-info-bar">
        <div class="info">
            <!--作者信息-->
            <UserInfoShow v-if="!edit" :user="article.user" text>
            <!-- 点赞 阅读量 发布时间-->
            <div class="spans">
                <span>点赞:{{ article.likee }} </span>
                <span>浏览量:{{ article.watch }} </span>
                <span> 更新时间:{{ moment(article.updateTime).format('YYYY-MM-DD') }}</span>
            </div>
            </UserInfoShow>
        </div>
        <!--编辑按钮-->
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
import {useBlogStore} from "@/stores/blogStore";
import UserInfoShow from "@/components/common/UserInfoShow.vue";

const store = useBlogStore()
const props = defineProps<{
    article:Article,
    edit:boolean
}>()

// 删除文章
let delArticle = async () => {
    let value = await ElMessageBox.confirm('你确定要删除这篇文章吗？', '警告', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }).catch(()=>{})
    if (value){
        let b = await store.deleteArticle(props.article.aid)
        ElMessage(b ? "删除成功" : "删除失败")
    }
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
        .spans {
            font-size: 14px;
            white-space: nowrap;
            span {
                margin-right: 10px;
            }
        }

    }
    >.opt {
        display: flex;
        flex-wrap: nowrap;
    }
}
@media (max-width: 576px) {
    .com-info-bar{
        >.info{
            span{
                font-size: 11px;
            }
        }
    }
}
@media (max-width: 414px) {
    .com-info-bar{
        .spans{
            margin-left: -20px;
            span{
                margin-right: 3px;
            }
        }
    }
}
</style>