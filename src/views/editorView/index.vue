<template>
    <div class="view-editor">
        <div style="width:100%;display: flex;justify-content: end;padding-bottom: 30px">
            <tag-edit :tags="article.tags" :aid="article.aid" @change="checkTag"/>
            <el-button type="warning" round v-if="article.aid" @click="save">保存</el-button>
            <el-button type="warning" round v-else @click="release">发布</el-button>
        </div>
        <el-input v-model="article.title" placeholder="请输入标题" input-style="font-size: 2em;text-align:center;margin: 10px;" class="title-input"></el-input>
        <div style="border: 1px solid #ccc">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
            />
            <Editor
                style="min-height: 600px"
                v-model="article.context"
                :defaultConfig="editorConfig"
                @onCreated="handleCreated"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref,shallowRef,onBeforeUnmount,onMounted,watch} from "vue";
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {getDefaultArticle, useArticleStore} from "@/store/article";
import {onBeforeRouteUpdate} from "vue-router";
import {ElMessage} from "element-plus";
import {useUserStore} from "@/store/user";
import TagEdit from "@/views/editorView/tagEdit.vue";
import router from "@/router";

const store:any = useArticleStore()
const userStore:any = useUserStore()
const props = defineProps(['aid'])

const editorRef = shallowRef()
const toolbarConfig = {}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})
const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例
}
const editorConfig = { placeholder: '请输入内容...' }

// 内容
let article = ref(getDefaultArticle())

let getArticle = () => {
    if (!props.aid){
        article.value = getDefaultArticle()
        return
    }
    store.getArticle(props.aid).then(data => {
        article.value = data
        if (data.uid != userStore.user.uid){
            ElMessage('无法编辑其他用户文章')
            router.back()
        }
    })
}
onMounted(getArticle)
onBeforeRouteUpdate((getArticle))

let checkTag = (tag) => {
    if (!article.value.aid)
    article.value.tags = Object.keys(tag)
}
let save = () => {
    store.updateArticle(article.value).then(()=>ElMessage('更新成功')).catch(data=>ElMessage('更新失败'))
}
let release = () => {
    store.addArticle(article.value).then(()=>ElMessage('发布成功')).catch(data=>ElMessage('发布失败'))
}



</script>

<style>
.view-editor{

    padding: 10px;
    .vuepress-markdown-body>*{
        text-align: left;
    }
}
</style>