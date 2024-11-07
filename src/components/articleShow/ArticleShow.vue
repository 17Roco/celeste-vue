<template>
    <div class="com-article-show">
        <div v-if="article==null">
            <p>{{ status }}</p>
        </div>
        <div class="view-article" v-else>
            <!--标题-->
            <h1> {{ article.title }}</h1>
            <!--用户信息-->
            <p class="info" v-if="article.user">
                作者：{{ article.user.username }} &emsp;
                创建时间：{{ article.createTime }} &emsp;
                <template v-if="article.createTime!=article.updateTime">更新时间：{{ article.updateTime }}</template>
            </p>
            <!--标签-->
            <tag-show
                v-if="article.tags && article.tags.length>0"
                :tags="article.tags"
            />
            <!--正文-->
            <p class="context" v-html="article.context"></p>
            <!--底部条-->
            <bottom-bar v-if="article.user" v-model="article" :aid="article.aid"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import TagShow from "./TagShow.vue";
import BottomBar from "./BottomBar.vue";
import {onMounted, ref} from "vue";
import {useBlogStore} from "@/stores/blogStore";

const store = useBlogStore()
const props = defineProps<{aid:number}>()

let status = ref<string>("加载中")
let article = ref<Article|null>(null)

onMounted(async ()=> {
    // 获取文章
    article.value = await store.getArticle(props.aid)
    if(!article.value)
        (status.value = "文章不存在")
})
</script>














<style>

.com-article-show {
    line-height: 1.5;
    padding-bottom: 90px;
    width: 100%;
    >.view-article {
        > h1 {
            text-align: center;
        }
        > .info {
            text-align: center;
            color: #b7b7bc;
        }
        > .context {
            line-height: 2em;
            text-indent: 2em;
        }
    }
}
</style>