<template>
    <div class="view-editor">
        <edit-info create-time="------------" update-time="--------------">
            <el-button type="warning" round v-if="article.aid" @click="save">保存</el-button>
            <el-button type="warning" round v-else @click="release">发布</el-button>
        </edit-info>
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

<script setup>
import {ref,reactive,shallowRef,onBeforeUnmount,onMounted} from "vue";
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {getDefaultArticle, useArticleStore} from "@/store/article";
import EditInfo from "@/views/editorView/editInfo.vue";
import {onBeforeRouteUpdate} from "vue-router";
import {ElMessage} from "element-plus";
import {useUserStore} from "@/store/user";

const store = useArticleStore()
const userStore = useUserStore()
const props = defineProps(['aid'])

const editorRef = shallowRef()
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 内容
let article = ref(getDefaultArticle())

let getArticle = () => {
    if (!props.aid) return
    store.getArticle(props.aid).then(data => {

        console.log(data.uid , userStore.user.uid)
        if (data.uid != userStore.user.uid){
            ElMessage('无法编辑')
        }
        article.value = data
    })
}
onMounted(getArticle)
onBeforeRouteUpdate((getArticle))


// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})
const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例
}

let save = () => {}
let release = () => {}

</script>

<style>
.view-editor{

    padding: 10px;
    .vuepress-markdown-body>*{
        text-align: left;
    }
}
</style>