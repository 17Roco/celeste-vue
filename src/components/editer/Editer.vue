<template>
    <div class="view-editor" v-if="article">
        <div class="top-bar">
            <tag-edit :tags="article.tags" @change="changeTags"/>
            <el-button type="warning" round v-if="aid" @click="save">保存</el-button>
            <el-button type="warning" round v-else @click="release">发布</el-button>
        </div>
        <!--   标题+编辑器     -->
        <el-input v-model="article.title" placeholder="请输入标题" input-style="font-size: 2em;text-align:center;margin: 10px;" class="title-input"/>
        <div style="border: 1px solid #ccc">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
            />
            <Editor
                style="min-height: 600px"
                v-model="article.context"
                :defaultConfig="{ placeholder: '请输入内容...' }"
                @onCreated="handleCreated"
            />
        </div>
    </div>
    <div v-else>
        加载中
    </div>
</template>

<script setup lang="ts">
import {ref, shallowRef, onBeforeUnmount, onMounted, reactive} from "vue";
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import TagEdit from "@/components/editer/TagEdit.vue";
import {useBlogStore} from "@/stores/blogStore";
import {getArticleContent, saveArticle, updateArticle} from "@/api/blogApi";
import {ElMessage} from "element-plus";

const store = useBlogStore()
const props = defineProps<{
    aid:number|null
}>()

const editorRef = shallowRef()
const handleCreated = (editor) => {editorRef.value = editor}
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})





let article = reactive<ChangedArticle>({
    title:"",
    context:"",
})
onMounted(async ()=>{
    if (!props.aid)return
    let data:Article = await getArticleContent(props.aid)
    ElMessage("加载中")
    article.title=data.title
    article.context=data.context
    ElMessage("加载成功")
})

let changeTags = (check:boolean,tag:string)=>{
    if (!check)
        article.value.tags = article.value.tags.filter(v => v!= tag)
    else
        article.value.tags.push(tag)
}

let save = async () => {
    let data = await updateArticle(article,props.aid)
    console.log(data)
}
let release = async () => {
    let data = await saveArticle(article)
    console.log(data)
}



</script>

<style>
.view-editor{
    >.top-bar{
        width:100%;
        display: flex;
        justify-content: space-between;

        padding-bottom: 30px;
    }
    padding: 10px;
    .vuepress-markdown-body>*{
        text-align: left;
    }
}
</style>