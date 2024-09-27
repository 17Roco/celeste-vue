<template>
    <div class="view-editor" v-if="article">
        <div class="top-bar">
            <tag-edit :tags="article.tags" @change="change"/>
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
import {ref, shallowRef, onBeforeUnmount, onMounted} from "vue";
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import TagEdit from "@/components/editer/TagEdit.vue";
import {useBlogStore} from "@/stores/blogStore";

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



let article = ref<Article|null>()
onMounted(()=>{
    if (props.aid)
        store.getArticle(props.aid).then((data:Article)=>article.value=data)
    else
        article.value = {
            aid:0,
            title:'',
            img:'',
            context:'',
            likee:0,
            watch:0,
            createTime:'',
            updateTime:'',
            tags:[]
        }
})

let change = (check:boolean,tag:string)=>{
    if (!check)
        article.value.tags = article.value.tags.filter(v => v!= tag)
    else
        article.value.tags.push(tag)
}

let save = () => {
    // store.updateArticle(article.value).then(()=>ElMessage('更新成功')).catch(data=>ElMessage('更新失败'))
}
let release = () => {
    // store.addArticle(article.value).then(()=>ElMessage('发布成功')).catch(data=>ElMessage('发布失败'))
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